import { type IConfigRepository } from "../../../application/ports/IConfigRepository";
import type { AllConfigs } from "../../../application/models/AllConfigs";

export class ConfigRepositoryApi implements IConfigRepository {
   
    async getAllConfigs(userId:string): Promise<AllConfigs> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const params = new URLSearchParams({ userId });

        const response = await fetch(`${apiUrl}/api/Config?${params.toString()}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
                

        if (!response.ok) {
            throw new Error("Error al obtener la partida desde la API.");
        }

        const allConfigs: AllConfigs = await response.json();
        return allConfigs;
    }
}