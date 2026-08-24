import { type IPartidaRepository } from "../../../application/ports/IPartidaRepository";
import { type Config } from "../../../domain/entities/Config";
import { type Partida } from "../../../domain/entities/Partida";

export class PartidaRepositoryApi implements IPartidaRepository {
    async getNewPartida(config:Config): Promise<Partida>{

        const response = await fetch("https://localhost:7126/api/Partida", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(config)
        });
        

        if (!response.ok) {
            throw new Error("Error al obtener la partida desde la API.");
        }

        const partida: Partida = await response.json();
        return partida;
    }
}