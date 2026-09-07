import type { Config } from "../../domain/entities/Config";
import type { AllConfigs } from "../models/AllConfigs";

export interface IConfigRepository {
    getAllConfigs(userId: string): Promise<AllConfigs>
    setConfig(userId: string,config: Config): Promise<Config>
}