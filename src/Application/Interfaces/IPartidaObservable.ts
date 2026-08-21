import type { IPartidaObserver } from "./IPartidaObserver";


export interface IPartidaObservable{
    suscribe(observer: IPartidaObserver): void;
    notify(): void;
}