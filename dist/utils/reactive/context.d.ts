/// <reference types="react" />
import { Listener } from "./model";
export interface ReactiveCtxModel<T = any> {
    value: T;
    subscribe(listener: Listener<T>): () => void;
}
export declare const createReactiveContext: <T = any>(initialValue?: T | undefined) => import("react").Context<ReactiveCtxModel<T> | undefined>;
declare const ReactiveCtx: import("react").Context<ReactiveCtxModel<any> | undefined>;
export default ReactiveCtx;
