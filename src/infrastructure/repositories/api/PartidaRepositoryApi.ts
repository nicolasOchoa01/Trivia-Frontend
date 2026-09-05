import { type IPartidaRepository } from "../../../application/ports/IPartidaRepository";
import { type Partida } from "../../../domain/entities/Partida";

export class PartidaRepositoryApi implements IPartidaRepository {
    async getNewPartida(configId:string): Promise<Partida>{
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";

        const response = await fetch(`${apiUrl}/api/Partida`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(configId)
        });
        

        if (!response.ok) {
            throw new Error("Error al obtener la partida desde la API.");
        }

        const partida: Partida = await response.json();
        return partida;
    }
}