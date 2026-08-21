import type { Partida } from "../../domain/entities/Partida";
import type { Question } from "../../domain/entities/Question";


export interface IPartidaState {
    partidaActual: Partida;
    questionActual: Question;
    questionIndex: number;
    
    init: boolean;
    finish: boolean;

    score: number;
    correctQuestions: number;
}

export class PartidaState implements IPartidaState{
    partidaActual: Partida;
    questionActual: Question;
    questionIndex: number;
    
    init: boolean;
    finish: boolean;

    score: number;
    correctQuestions: number;

    constructor(partida: Partida, question: Question){
        this.partidaActual = partida;
        this.questionActual = question;
        this.questionIndex = 0;
        this.score = 0;
        this.init = false;
        this.finish = false;
        this.correctQuestions = 0;
    }

}
