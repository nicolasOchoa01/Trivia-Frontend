import { type Config } from "../../domain/entities/Config";

export interface IConfigRepository {
    getAllConfigs(): Promise<Config[]>
}