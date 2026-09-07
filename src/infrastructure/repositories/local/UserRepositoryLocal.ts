import { type IUserRepository } from "../../../application/ports/IUserRepository";
import { type User } from "../../../domain/entities/User";
import userJson from "../../../../public/data/UserLocal.json"
import type { Register } from "../../../application/models/Register";
import type { Login } from "../../../application/models/Login";


export class UserRepositoryLocal implements IUserRepository {
    async register(register: Register): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(register.userName, register.email, register.password);
        const user = userJson as unknown as User;
        return user;
    }
    async login(login: Login): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(login.email, login.password);
        const user = userJson as unknown as User;
        return user;
    }
    async logout(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log("logout");
    }

    async getUserById(id: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(id);
        const user = userJson as unknown as User;
        return user;
    }
    async getUserByName(name: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(name);
        const user = userJson as unknown as User;
        return user;
    }
    async getAllUsers(): Promise<User[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const user = userJson as unknown as User;
        return [user];
    }
}