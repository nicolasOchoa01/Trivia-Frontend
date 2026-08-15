import { type IHistoryService } from "../interfaces/IHistoryService";
import { type History } from "../../domain/entities/History";
import { type IHistoryRepository } from "../ports/IHistoryRepository";

export class HistoryService implements IHistoryService {
    private readonly _repository: IHistoryRepository;

    constructor(repository: IHistoryRepository){
        this._repository = repository;
    }

    async getHistoryByName(name: string): Promise<History>{
        if(name == null){
            throw new Error("el nombre es requerido");
        }

        return await this._repository.getHistoryByName(name);
    }
    async getAllHistories(): Promise<History[]>{
        return await this._repository.getAllHistories();
    }
}