import React from "react";
import { Reactive } from "./model";
import { ReactiveCtxModel } from "./context";
/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export declare function listen<T = any>(target: Omit<Reactive<T>, "_state" | "_setState">): {
    then: (...fns: ((value: T) => any)[]) => () => void;
};
export declare const Reactify: <T = any>(initialValue: T) => Reactive<T>;
export declare const ReactifyMemo: <T = any>(initialValue: T) => Reactive<T>;
/**
 * reactive is same with Reactify
 */
export declare const reactive: <T = any>(initialValue: T) => Reactive<T>;
/**
 * reactiveMemo is same with ReactifyMemo
 */
export declare const reactiveMemo: <T = any>(initialValue: T) => Reactive<T>;
/**
 * Accept a value and return a reactive object. When initalValue is valid a new reactive object will be created.
 */
export declare const useReactive: <T = any>(initialValue?: T | undefined) => Reactive<T>;
export declare const useReativeContext: <T = any>(context?: React.Context<ReactiveCtxModel<T> | undefined> | undefined) => Reactive<T>;
/**
 * Accept a value and return a reactive object binded on a ReactRef instance.
 */
export declare const useReactiveRef: <T = any>(initialValue?: T | undefined) => React.MutableRefObject<Reactive<T>>;
