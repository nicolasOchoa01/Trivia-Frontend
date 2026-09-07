export interface History {
    userId: string;
    username: string;
    score: number;
    category: string[];
    questionsTotal: number;
    questionsCorrect: number;
    multipleChoice: boolean;
    random: boolean;
    timer: boolean;
    seconds: number;
    date: Date;
}