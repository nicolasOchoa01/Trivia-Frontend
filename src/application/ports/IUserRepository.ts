import { type User } from "../../domain/entities/User";
import type { Login } from "../models/Login";
import type { Register } from "../models/Register";

export interface IUserRepository {
    getUserById(id: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    login(login: Login): Promise<User>;
    logout(): void;
    register(register: Register): Promise<User>;
}