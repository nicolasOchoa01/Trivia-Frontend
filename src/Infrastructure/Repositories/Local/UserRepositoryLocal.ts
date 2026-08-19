import { type IUserRepository } from "../../../application/ports/IUserRepository";
import { type User } from "../../../domain/entities/User";
import userJson from "../../../../public/data/UserLocal.json"


export class UserRepositoryLocal implements IUserRepository {
    async register(userName: string, email: string, password: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(userName, email, password);
        const user = userJson as unknown as User;
        return user;
    }
    async login(emailOrName: string, password: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));
        console.log(emailOrName, password);
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