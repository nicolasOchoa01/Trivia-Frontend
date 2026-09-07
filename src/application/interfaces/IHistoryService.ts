import { type History } from "../../domain/entities/History";

export interface IHistoryService {
    getHistoryByUserId(userId: string): Promise<History[]>;
    getAllHistories(): Promise<History[]>;
    setHistory(history: History): void;
}