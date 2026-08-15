import { type Config } from "../../domain/entities/Config";
import { type Partida } from "../../domain/entities/Partida";
import type { Question } from "../../domain/entities/Question";
import { type IPartidaObserver } from './IPartidaObserver'

export interface IPartidaService {
    getNewPartida(config: Config): Promise<Partida>;
    revolverQuestions(): void;
    revolverOptions(): void;
    initPartida(): void;
    anwered(answer: string): string; 
    nextQuestion(): void;
    endPartida(): void;
    suscribe(observer: IPartidaObserver): void;
    notify(): void;
}