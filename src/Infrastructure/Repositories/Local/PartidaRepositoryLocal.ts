import { type IPartidaRepository } from "../../../application/ports/IPartidaRepository";
import { type Config } from "../../../domain/entities/Config";
import { type Partida } from "../../../domain/entities/Partida";
import partidaJson from "../../../../public/data/PartidaLocal.json";

export class PartidaRepositoryLocal implements IPartidaRepository {
    async getNewPartida(config:Config): Promise<Partida>{
        // Simula 500ms de tiempo de respuesta de red
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mapeamos o casteamos la información al tipo del Dominio
        const partida = partidaJson as unknown as Partida;

        return partida;
    }
}