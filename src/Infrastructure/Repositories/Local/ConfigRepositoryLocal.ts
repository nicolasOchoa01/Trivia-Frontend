import { type IConfigRepository } from "../../../application/ports/IConfigRepository";
import { type Config } from "../../../domain/entities/Config";
import configJson from "../../../../public/data/ConfigLocal.json"

export class ConfigRepositoryLocal implements IConfigRepository {
    async getStandardConfig(): Promise<Config> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const config = configJson as unknown as Config;
        return config;
    }
    async getExpertConfig(): Promise<Config> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const config = configJson as unknown as Config;
        return config;
    }
    async getEasyConfig(): Promise<Config> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const config = configJson as unknown as Config;
        return config;
    }
    async getAllConfigs(): Promise<Config[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const config = configJson as unknown as Config;
        return [config];
    }
}