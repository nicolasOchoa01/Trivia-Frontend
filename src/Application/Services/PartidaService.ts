import { type IPartidaService } from "../interfaces/IPartidaService";
import { type Config } from "../../domain/entities/Config";
import { type Partida } from "../../domain/entities/Partida";
import { type IPartidaRepository } from "../ports/IPartidaRepository";
import type { Question } from "../../domain/entities/Question";
import type { IPartidaObserver } from "../interfaces/IPartidaObserver";
import { PartidaState, type IPartidaState } from "../interfaces/IPartidaState";

export class PartidaService implements IPartidaService {
    private readonly _repository: IPartidaRepository;
    private _state!: IPartidaState;
    private _observer!: IPartidaObserver;

    constructor(repository: IPartidaRepository){
        this._repository = repository;
    }

    async getNewPartida(config: Config): Promise<Partida> {
        if (!config) {
            throw new Error("La configuración es requerida");
        }
        
        const partida = await this._repository.getNewPartida(config);
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
        console.log("opciones revueltas");
    }

    initPartida(): void {
        this.revolverQuestions();
        this.revolverOptions();
        this._state.questionActual = this._state.partidaActual.questions[0];
        this._state.questionIndex = 0;
        this._state.score = 0;
        this._state.finish = false;
        this._state.init = true;
        this.notify();
    }

    anwered(answer: string): string {
        if (this._state.questionActual.answer == answer) {
            this._state.score = this._state.score + 10;
        }
        this.nextQuestion();
        this.notify();
        return this._state.questionActual.answer;
    }

    nextQuestion(): void {
        if (this._state.partidaActual.questions.length - 1 > this._state.questionIndex) {
            this._state.questionIndex = this._state.questionIndex + 1;
            this._state.questionActual = this._state.partidaActual.questions[this._state.questionIndex];
        } 
        else {
            this.endPartida();
        }
    }

    endPartida(): void {
        console.log("finish");
        this._state.finish = true;
        this.notify();
    }

    suscribe(observer: IPartidaObserver) {
        this._observer = observer;
    }

    notify(): void {
        this._observer!.update(this._state);
    }

}