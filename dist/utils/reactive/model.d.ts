import { ReactiveCtxModel } from "./context";
export type Listener<T> = (state: T) => any;
export declare class Reactive<T = any> implements ReactiveCtxModel {
    private _state;
    private _setState;
    private _listeners;
    constructor(state: T, setState?: any);
    get value(): T;
    set value(newState: T);
    subscribe(listener: Listener<T>): () => void;
    static isReactive(obj: any): boolean;
}
