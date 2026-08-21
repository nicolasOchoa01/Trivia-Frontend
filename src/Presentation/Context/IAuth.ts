import type { User } from "../../domain/entities/User";

export interface IAuth {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    login(emailOrName: string, password: string): Promise<User | null>;
    logout(): void;
    register(userName: string, email: string, password: string): Promise<User | null>;
}