import { type Config } from "../../domain/entities/Config"
import type { AllConfigs } from "../models/AllConfigs";

export interface IConfigService {
    getAllConfigs(userId: string): Promise<AllConfigs>;
    getConfigs(): AllConfigs;
    getStandardConfig(): Config;
    getExpertConfig(): Config;
    getEasyConfig(): Config;
    setConfig(userId: string,config: Config): Promise<Config>;
}