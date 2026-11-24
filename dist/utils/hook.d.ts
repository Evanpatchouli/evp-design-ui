export { Reactive, listen, Reactify, ReactifyMemo, reactive, reactiveMemo } from "./reactive";
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
