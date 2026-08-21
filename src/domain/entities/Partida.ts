import { type Config } from './Config';
import { type Question } from './Question'

export interface Partida {
    id: string;
    config: Config;
    questions: Question[];
}