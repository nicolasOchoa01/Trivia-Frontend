import { type Config } from "../../domain/entities/Config"

export interface IConfigService {
    getAllConfigs(): Promise<Config[]>;
    getConfigs(): Config[];
    getStandardConfig(): Promise<Config>;
    getExpertConfig(): Promise<Config>;
    getEasyConfig(): Promise<Config>;
}