import { type Config } from "../../domain/entities/Config";

export interface IConfigRepository {
    getAllConfigs(): Promise<Config[]>
    getStandardConfig(): Promise<Config>;
    getExpertConfig(): Promise<Config>;
    getEasyConfig(): Promise<Config>;
}