import { type Config } from "../../domain/entities/Config";
import { type Partida } from "../../domain/entities/Partida";

export interface IPartidaRepository {
    getNewPartida(config:Config): Promise<Partida>;
}