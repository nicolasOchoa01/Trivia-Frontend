import { type Partida } from "../../domain/entities/Partida";

export interface IPartidaRepository {
    getNewPartida(configId:string): Promise<Partida>;
}