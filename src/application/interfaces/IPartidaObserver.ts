import type { IPartidaState } from './IPartidaState';

export interface IPartidaObserver {
    update(partida: IPartidaState): void;
}