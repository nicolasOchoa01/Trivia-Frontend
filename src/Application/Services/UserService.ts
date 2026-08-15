import { type User } from "../../domain/entities/User";
import { type IUserService } from "../interfaces/IUserService";
import { type IUserRepository } from "../ports/IUserRepository";

export class UserService implements IUserService {
    private readonly _repository: IUserRepository;

    constructor(repository: IUserRepository){
        this._repository = repository;
    }

    async getUserById(id: string): Promise<User> {
        if(id == null){
            throw new Error("el id es requerido");
        }

        return await this._repository.getUserById(id);
    }
    async getUserByName(name: string): Promise<User> {
        if(name == null){
            throw new Error("el name es requerido");
        }

        return await this._repository.getUserByName(name);
    }
    async getAllUsers(): Promise<User[]> {
        return await this._repository.getAllUsers();
    }
}