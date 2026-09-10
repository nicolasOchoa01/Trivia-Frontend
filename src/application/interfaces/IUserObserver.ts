import type { User } from "../../domain/entities/User";

export interface IUserObserver {
    update(user: User): void;
}