import { type IConfigRepository } from "../../../application/ports/IConfigRepository";
import allConfigJson from "../../../../public/data/AllConfigsLocal.json"
import type { AllConfigs } from "../../../application/models/AllConfigs";
import type { Config } from "../../../domain/entities/Config";

export class ConfigRepositoryLocal implements IConfigRepository {
    async setConfig(userId: string, config: Config): Promise<Config> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(userId, config);
        return config;
    }
   
    async getAllConfigs(userId: string): Promise<AllConfigs> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(userId);

        const allConfig = allConfigJson as unknown as AllConfigs;
        return allConfig;
    }
}