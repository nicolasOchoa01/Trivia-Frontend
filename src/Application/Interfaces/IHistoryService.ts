import { type History } from "../../domain/entities/History";

export interface IHistoryService {
    getHistoryByName(name: string): Promise<History[]>;
    getAllHistories(): Promise<History[]>;
    setHistory(history: History): void;
}