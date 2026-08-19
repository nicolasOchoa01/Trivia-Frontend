import { type User } from "../../domain/entities/User";

export interface IUserRepository {
    getUserById(id: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    login(emailOrName: string, password: string): Promise<User>;
    logout(): void;
    register(userName: string, email: string, password: string): Promise<User>;
}