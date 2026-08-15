import { type Config } from "../../domain/entities/Config"

export interface IConfigService {
    getAllConfigs(): Promise<Config[]>
}