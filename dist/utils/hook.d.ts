type Listener<T> = (state: T) => any;
export declare class Reactive<T = any> {
    private _state;
    private _setState;
    private _listeners;
    constructor(state: Readonly<T>, setState?: any);
    get value(): Readonly<T>;
    set value(newState: Readonly<T>);
    subscribe(listener: Listener<T>): () => void;
}
/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export declare function listen<T = any>(target: Reactive<T>): {
    then: (...fns: ((value: T) => any)[]) => () => void;
};
export declare const Reactify: <T = any>(initialValue: T) => Reactive<Readonly<T>>;
export declare const ReactifyMemo: <T = any>(initialValue: T) => Reactive<Readonly<T>>;
export declare const reactive: <T = any>(initialValue: T) => Reactive<Readonly<T>>;
export declare const reactiveMemo: <T = any>(initialValue: T) => Reactive<Readonly<T>>;
export type Store<State = any> = {
    state: State;
    setState: (newState: State) => void;
};
export declare const useStore: <T = any>(initialState: T) => Store<T>;
export type Callback<State> = (newState: State) => any;
export declare const useSync: <State>(store: Store<State>) => {
    then: (callbacks: Callback<State>[]) => void;
};
export type Protected<Fx extends Function = Function> = Fx;
/**
 * Catch error handling for a given function.
 * @param fn
 * @param catchHanlder
 * @param finallyHandler
 */
export declare const useCatch: <Fx extends Function = Function>(fn: Fx, catchHandler?: ((err?: any) => any | null) | undefined, finallyHandler?: () => any | null) => Fx;
export {};
