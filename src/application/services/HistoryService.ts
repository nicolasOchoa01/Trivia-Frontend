import { type IHistoryService } from "../interfaces/IHistoryService";
import { type History } from "../../domain/entities/History";
import { type IHistoryRepository } from "../ports/IHistoryRepository";

export class HistoryService implements IHistoryService {
    private readonly _repository: IHistoryRepository;

    constructor(repository: IHistoryRepository){
        this._repository = repository;
    }
    setHistory(history: History): void {
        this._repository.setHistory(history);
    }

    async getHistoryByUserId(userId: string): Promise<History[]>{
        if(userId == null){
            throw new Error("el ID de usuario es requerido");
        }

        return await this._repository.getHistoryByUserId(userId);
    }
    async getAllHistories(): Promise<History[]>{
        return await this._repository.getAllHistories();
    }
}