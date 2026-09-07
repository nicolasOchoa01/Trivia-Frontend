import type { IUserRepository } from "../../../application/ports/IUserRepository";
import type { User } from "../../../domain/entities/User";
import type { Register } from "../../../application/models/Register";
import type { Login } from "../../../application/models/Login";


export class UserRepositoryApi implements IUserRepository {
    async getUserById(id: string): Promise<User> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const response = await fetch(`${apiUrl}/api/User/${id}`);
        if (!response.ok) {
            throw new Error(`Error fetching user by ID: ${response.statusText}`);
        }
        const user: User = await response.json();
        return user;
    }

    async getUserByName(name: string): Promise<User> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const params = new URLSearchParams({ name });
        const response = await fetch(`${apiUrl}/api/User?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`Error fetching user by name: ${response.statusText}`);
        }
        const users: User[] = await response.json();
        return users[0];
    }

    async getAllUsers(): Promise<User[]> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const response = await fetch(`${apiUrl}/api/User`);
        if (!response.ok) {
            throw new Error(`Error fetching all users: ${response.statusText}`);
        }
        const users: User[] = await response.json();
        return users;
    }

    async login(login: Login): Promise<User> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const response = await fetch(`${apiUrl}/api/Auth/Login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        });
        console.log("response", response);
        if (!response.ok) {
            throw new Error(`Error logging in: ${response.statusText}`);
        }
        const user: User = await response.json();
        return user;
    }

    logout(): void {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        console.log(`Logging out user via API at ${apiUrl}/api/Auth/Logout`);
    }

    async register(register: Register): Promise<User> {
        const apiUrl = import.meta.env.API_URL || "https://localhost:7126";
        const response = await fetch(`${apiUrl}/api/Auth/Register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(register)
        });
        if (!response.ok) {
            throw new Error(`Error registering user: ${response.statusText}`);
        }
        const user: User = await response.json();
        return user;
    }
}