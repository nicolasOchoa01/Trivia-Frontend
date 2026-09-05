import { type IPartidaRepository } from "../../../application/ports/IPartidaRepository";
import { type Partida } from "../../../domain/entities/Partida";

export class PartidaRepositoryLocal implements IPartidaRepository {
    async getNewPartida(configId:string): Promise<Partida>{
        console.log("Configuración enviada a la API:", configId);

        const response = await fetch("/data/PartidaLocal.json");
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!response.ok) {
            throw new Error("Error al obtener la partida desde la API simulada.");
        }

        const partida: Partida = await response.json();
        return partida;
    }
}