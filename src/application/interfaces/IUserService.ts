import { type User } from "../../domain/entities/User";
import { type IPartidaObserver } from "./IPartidaObserver";
import { type IPartidaState } from "./IPartidaState";
import type { IUserObservable } from "./IUserObservable";

export interface IUserService extends IPartidaObserver, IUserObservable {
    getUserById(id: string): Promise<User>;
    getUserByName(name: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    login(emailOrName: string, password: string): Promise<User>;
    logout(): void;
    getCurrentUser(): Promise<User | null>;
    getUser(): User;
    register(userName: string, email: string, password: string): Promise<User>;
    update(state: IPartidaState): void;

}