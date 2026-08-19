import { type Config } from "../../domain/entities/Config";
import { type IConfigService } from "../interfaces/IConfigService";
import { type IConfigRepository } from "../ports/IConfigRepository";

export class ConfigService implements IConfigService {
    private readonly _repository: IConfigRepository;
    private _configs!: Config[];

    constructor(repository: IConfigRepository){
        this._repository = repository;
    }

    async getAllConfigs(): Promise<Config[]> {
        this._configs = await this._repository.getAllConfigs();
        return this._configs;
    }

    getConfigs(): Config[] {
        return this._configs;
    }
}