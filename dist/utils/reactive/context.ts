import { createContext } from "react";
import { Listener, Reactive } from "./model";

export interface ReactiveCtxModel<T = any> {
  value: T;
  subscribe(listener: Listener<T>): () => void;
}

export const createReactiveContext = <T = any>(initialValue?: T) => {
  const reactiveObject = new Reactive(initialValue);
  return createContext<ReactiveCtxModel<T> | undefined>(reactiveObject as any);
};

const ReactiveCtx = createReactiveContext();

export default ReactiveCtx;
