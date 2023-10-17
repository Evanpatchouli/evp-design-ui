import React from "react";
import { Reactive } from "./model";
import ReactiveCtx, { ReactiveCtxModel } from "./context";

/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export function listen<T = any>(target: Omit<Reactive<T>, "_state" | "_setState">) {
  return {
    then: (...fns: ((value: T) => any)[]) => {
      const fn = (value: T) => fns.forEach((f) => f(value));
      const dispose = target.subscribe(fn);
      return dispose;
    },
  };
}

export const Reactify = <T = any>(initialValue: T): Reactive<Readonly<T>> => {
  const [state, setState] = React.useState<Readonly<T>>(initialValue);
  const observer = new Reactive(state, setState);
  return observer;
};

export const ReactifyMemo = <T = any>(initialValue: T) => {
  return React.useMemo(() => Reactify(initialValue), [initialValue]);
};

/**
 * reactive is same with Reactify
 */
export const reactive = Reactify;

/**
 * reactiveMemo is same with ReactifyMemo
 */
export const reactiveMemo = ReactifyMemo;

/**
 * Accept a value and return a reactive object. When initalValue is valid a new reactive object will be created.
 */
export const useReactive = <T = any>(initialValue?: T): Reactive<T> => {
  const [state, setState] = React.useState<T>(initialValue ?? (undefined as T));
  const reactiveObj = new Reactive(state, setState);
  // const context = createReactiveCtx(reactiveObj);
  // const newReactiveCtxModel = React.useContext(context);
  const defaultContextModel = React.useContext((initialValue as any) ?? ReactiveCtx);
  if (initialValue !== undefined && initialValue !== null) {
    return reactiveObj as Reactive<T>;
  }
  // @ts-ignore
  return defaultContextModel;
  // return initialValue ? newReactiveCtxModel : defaultContextModel;
};

export const useReativeContext = <T = any>(context?: React.Context<ReactiveCtxModel<T> | undefined>): Reactive<T> => {
  const reactiveCtxModel = React.useContext(context || ReactiveCtx);
  // @ts-ignore
  return reactiveCtxModel;
  // return initialValue ? newReactiveCtxModel : defaultContextModel;
};

/**
 * Accept a value and return a reactive object binded on a ReactRef instance.
 */
export const useReactiveRef = <T = any>(initialValue?: T): React.MutableRefObject<Reactive<T>> => {
  const ctx = useReactive(initialValue);
  const reactiveRef = React.useRef<ReactiveCtxModel>() as React.MutableRefObject<Reactive>;
  if (!reactiveRef.current) {
    reactiveRef.current = ctx;
  }
  return reactiveRef;
};
