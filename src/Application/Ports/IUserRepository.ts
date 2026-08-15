import { type User } from "../../domain/entities/User";

export interface IUserRepository {
    getUserById(id: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}