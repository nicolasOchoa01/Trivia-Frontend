import { type User } from "../../domain/entities/User";

export interface IUserService {
    getUserById(id: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    login(emailOrName: string, password: string): Promise<User>;
    logout(): void;
    getCurrentUser(): Promise<User | null>;
    register(userName: string, email: string, password: string): Promise<User>;
}