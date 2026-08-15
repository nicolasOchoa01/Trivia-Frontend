import { type Config } from "../../domain/entities/Config";
import { type IConfigService } from "../interfaces/IConfigService";
import { type IConfigRepository } from "../ports/IConfigRepository";

export class ConfigService implements IConfigService {
    private readonly _repository: IConfigRepository;

    constructor(repository: IConfigRepository){
        this._repository = repository;
    }

    async getAllConfigs(): Promise<Config[]> {
        return await this._repository.getAllConfigs();
    }
}