import { ReactiveCtxModel } from "./context";
export type Listener<T> = (state: T) => any;
export declare class Reactive<T = any> implements ReactiveCtxModel {
    private _setState?;
    private _state;
    private _listeners;
    constructor(state: T, _setState?: ((state: T) => void) | undefined);
    get value(): T;
    set value(newState: T);
    subscribe(listener: Listener<T>): () => void;
    static isReactive(obj: any): boolean;
}
