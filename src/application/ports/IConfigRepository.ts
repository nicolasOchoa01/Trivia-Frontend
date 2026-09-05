import type { AllConfigs } from "../models/AllConfigs";

export interface IConfigRepository {
    getAllConfigs(userId: string): Promise<AllConfigs>
}