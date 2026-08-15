import { type IHistoryRepository } from "../../../application/ports/IHistoryRepository";
import { type History } from "../../../domain/entities/History";
import historyJson from "../../../../public/data/HistoryLocal.json"

export class HistoryRepositoryLocal implements IHistoryRepository {
    async getHistoryByName(name: string): Promise<History> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const history = historyJson as unknown as History;
        return history;
    }
    async getAllHistories(): Promise<History[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const history = historyJson as unknown as History;
        return [history];
    }
}