import { type IPartidaService } from "../interfaces/IPartidaService";
import { type Config } from "../../domain/entities/Config";
import { type Partida } from "../../domain/entities/Partida";
import { type IPartidaRepository } from "../ports/IPartidaRepository";
import type { Question } from "../../domain/entities/Question";
import type { IPartidaObserver } from "../interfaces/IPartidaObserver";
import { PartidaState, type IPartidaState } from "../interfaces/IPartidaState";
import type { IHistoryService } from "../interfaces/IHistoryService";
import type { IUserService } from "../interfaces/IUserService";
import type { History } from "../../domain/entities/History";

export class PartidaService implements IPartidaService {
    private readonly _repository: IPartidaRepository;
    private readonly _history: IHistoryService;
    private readonly _user: IUserService;
    private _state!: IPartidaState;
    private _observer!: IPartidaObserver;
    private _timerInterval: number | null = null;
    private _delay: number = 1000;

    constructor(repository: IPartidaRepository, history: IHistoryService, user: IUserService){
        this._repository = repository;
        this._history = history;
        this._user = user;
    }
    

    async getNewPartida(config: Config): Promise<Partida> {
        if (!config) {
            throw new Error("La configuración es requerida");
        }
        
        const partida = await this._repository.getNewPartida(config.id);
        const question = partida.questions[0];
        this._state = new PartidaState(partida, question);
        return this._state.partidaActual;
    }

    revolverQuestions(): void {
        const shuffled: Question[] = [...this._state.partidaActual.questions];

        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        this._state.partidaActual.questions = shuffled;
    }
    
    revolverOptions(): void {
        //revolver las opciones de cada pregunta
        this._state.partidaActual.questions.forEach((question) => {
            const shuffledOptions = [...question.options];
            for (let i = shuffledOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
            }
            question.options = shuffledOptions;
        });
    }

    setDelay(delay: number): void {
        this._delay = delay;
    }

    initPartida(): void {
        this.revolverQuestions();
        this.revolverOptions();
        this._state.questionActual = this._state.partidaActual.questions[0];
        this._state.questionIndex = 0;
        this._state.score = 0;
        this._state.correctQuestions = 0;
        this._state.finish = false;
        this._state.init = true;
        this.regresiveTimer();
        this.notify();    
    }

    stopTimer(): void {
        if (this._timerInterval) {
            clearInterval(this._timerInterval);
            this._timerInterval = null;
        }
    }

    regresiveTimer(): void {
        if(!this._state.partidaActual.config.timer) return;

        this.stopTimer();
        this._timerInterval = setInterval(() => {
            if (this._state.leftTimeQuestion <= 0) {
                this.stopTimer();
                this.nextQuestion();
                
                this.notify();
            }
            else{
                this._state.leftTimeQuestion--;
                console.log("time left", this._state.leftTimeQuestion);
                this.notify();
            }
        }, 1000);
    }

    anwered(answer: string): string {
        this.stopTimer();
        this._state.leftTimeQuestion = this._state.partidaActual.config.seconds;
        if (this._state.questionActual.answer == answer) {
            this._state.score = this._state.score + 10;
            this._state.correctQuestions = this._state.correctQuestions + 1;
        }
        
        setTimeout(() => {
            this.nextQuestion();
            this.notify();
        }, this._delay);

        return this._state.questionActual.answer;
    }

    
    nextQuestion(): void {
        if(this._state.finish) return;
        if (this._state.partidaActual.questions.length - 1 > this._state.questionIndex) {
            this._state.questionIndex = this._state.questionIndex + 1;
            this._state.questionActual = this._state.partidaActual.questions[this._state.questionIndex];

            this._state.leftTimeQuestion = this._state.partidaActual.config.seconds;
            this.regresiveTimer();
        } 
        else {
            this.stopTimer();
            this.endPartida();
        }
    }

    endPartida(): void {
        console.log("finish");
        if(this._state.finish) return;
        if(this._state.partidaActual.questions.length - 1 > this._state.questionIndex){
            this._state.finish = true;
            this.stopTimer();
            return;
        }

        this._state.finish = true;

        const fecha: Date = new Date();

        const newHistory: History = {
            userId: this._user.getUser().id,
            username: this._user.getUser().name,
            score: this._state.score,
            category: this._state.partidaActual.config.category,
            questionsTotal: this._state.partidaActual.config.numberQuestions,
            questionsCorrect: this._state.correctQuestions,
            multipleChoice: this._state.partidaActual.config.multipleChoice,
            random: this._state.partidaActual.config.random,
            timer: this._state.partidaActual.config.timer,
            seconds: this._state.partidaActual.config.seconds,
            date: fecha,
        };
        this._history.setHistory(newHistory);
        this.notify();
    }

    suscribe(observer: IPartidaObserver): void {
        this._observer = observer;
    }

    unsubscribe(observer: IPartidaObserver): void {
        console.log("unsubscribe", observer);
        this._observer = null!;
    }

    notify(): void {
        this._observer!.update(this._state);
    }

}