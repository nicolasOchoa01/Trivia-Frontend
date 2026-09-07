import { type Config } from "../../domain/entities/Config";
import { type IConfigService } from "../interfaces/IConfigService";
import type { AllConfigs } from "../models/AllConfigs";
import { type IConfigRepository } from "../ports/IConfigRepository";

export class ConfigService implements IConfigService {
    private readonly _repository: IConfigRepository;
    private _configs!: AllConfigs;

    constructor(repository: IConfigRepository){
        this._repository = repository;
    }
    getStandardConfig(): Config {
        const standardConfig: Config = this._configs.standard;
        return standardConfig;
    }
    getExpertConfig(): Config {
        const expertConfig: Config = this._configs.expert;
        return expertConfig;
    }
    getEasyConfig(): Config {
        const easyConfig: Config = this._configs.easy;
        return easyConfig;
    }

    async getAllConfigs(userId: string): Promise<AllConfigs> {
        this._configs = await this._repository.getAllConfigs(userId);
        return this._configs;
    }

    getConfigs(): AllConfigs {
        return this._configs;
    }

    async setConfig(userId:string, config: Config): Promise<Config> {
        if(!config.name || config.name.trim() === "") {
            config.name = "MiConfig";
        }
        const response = await this._repository.setConfig(userId, config);
        return response;
    }
}