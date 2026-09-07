import { type IConfigRepository } from "../../../application/ports/IConfigRepository";
import type { AllConfigs } from "../../../application/models/AllConfigs";
import type { Config } from "../../../domain/entities/Config";

export class ConfigRepositoryApi implements IConfigRepository {
    async setConfig(userId: string,config: Config): Promise<Config> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const response = await fetch(`${apiUrl}/api/Config/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(config)
        });
        const newConfig: Config = await response.json();
        return newConfig;
    }
   
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