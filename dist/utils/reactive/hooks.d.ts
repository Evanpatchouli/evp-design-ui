import React from "react";
import { Reactive } from "./model";
import { ReactiveCtxModel } from "./context";
export declare function listen<T = any>(target: ReactiveCtxModel<T>): {
    then: (...listeners: ((value: T) => any)[]) => () => void;
};
export declare function Reactify<T = any>(initialValue: T): Reactive<T>;
export declare const ReactifyMemo: typeof Reactify;
export declare const reactive: typeof Reactify;
export declare const reactiveMemo: typeof Reactify;
export declare function useReactive<T = any>(initialValue?: T): Reactive<T>;
export declare function useReativeContext<T = any>(context?: React.Context<ReactiveCtxModel<T> | undefined>): Reactive<T>;
export declare function useReactiveRef<T = any>(initialValue?: T): React.MutableRefObject<Reactive<T>>;
