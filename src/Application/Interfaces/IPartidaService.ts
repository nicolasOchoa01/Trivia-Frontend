import { type Config } from "../../domain/entities/Config";
import { type Partida } from "../../domain/entities/Partida";
import type { IPartidaObservable } from "./IPartidaObservable";

export interface IPartidaService extends IPartidaObservable {
    getNewPartida(config: Config): Promise<Partida>;
    revolverQuestions(): void;
    revolverOptions(): void;
    initPartida(): void;
    anwered(answer: string): string; 
    nextQuestion(): void;
    endPartida(): void;
}