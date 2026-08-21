import { type IHistoryRepository } from "../../../application/ports/IHistoryRepository";
import { type History } from "../../../domain/entities/History";
import historyJson from "../../../../public/data/HistoryLocal.json"

export class HistoryRepositoryLocal implements IHistoryRepository {
    setHistory(history: History): void {
        console.log(`guadando el historial de esta partida`);
        console.log(history);
    }
    async getHistoryByName(name: string): Promise<History[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(name);
        const history = historyJson as unknown as History;
        return [history, history, history, history, history];
    }
    async getAllHistories(): Promise<History[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const history = historyJson as unknown as History;
        return [history];
    }
}