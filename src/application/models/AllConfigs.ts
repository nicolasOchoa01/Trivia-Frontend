import type { Config } from "../../domain/entities/Config";


export interface AllConfigs {
    standard: Config;
    expert: Config;
    easy: Config;
    personalConfigs: Config[];
}