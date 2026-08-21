import { type User } from "./User";
export interface History {
    user: User;
    score: number;
    category: string[];
    questionsTotal: number;
    questionsCorrect: number;
    multipleChoice: boolean;
    random: boolean;
    timer: boolean;
    seconds: number;
    date: string;
}