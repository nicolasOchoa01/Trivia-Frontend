import type { IUserObserver } from "./IUserObserver";

export interface IUserObservable {
    subscribe(observer: IUserObserver): void;
    unsubscribe(observer: IUserObserver): void;
    notify(): void;
}