import { type User } from "./User";

export interface History {
    id: string;
    user: User;
    score: number;
}