import { type IUserRepository } from "../../../application/ports/IUserRepository";
import { type User } from "../../../domain/entities/User";
import userJson from "../../../../public/data/UserLocal.json"


export class UserRepositoryLocal implements IUserRepository {
    async getUserById(id: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const user = userJson as unknown as User;
        return user;
    }
    async getUserByName(name: string): Promise<User> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const user = userJson as unknown as User;
        return user;
    }
    async getAllUsers(): Promise<User[]> {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const user = userJson as unknown as User;
        return [user];
    }
}