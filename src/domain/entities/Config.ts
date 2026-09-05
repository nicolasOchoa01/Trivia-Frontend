export interface Config { 
    id: string;
    name: string;
    timer: boolean;
    seconds: number;
    numberQuestions: number;
    multipleChoice: boolean;
    random: boolean;
    category: string[];
}