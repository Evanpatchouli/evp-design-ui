import React from "react";

/// <reference types="react" />
// Version: 1 Reactive

type Listener<T> = (state: T) => any;

export class Reactive<T = any> {
  private _state: Readonly<T>;
  private _setState: any;
  private _listeners: Listener<Readonly<T>>[] = [];

  constructor(state: Readonly<T>, setState?: any) {
    this._state = state;
    this._setState = setState;
  }

  get value(): Readonly<T> {
    return this._state;
  }

  set value(newState: Readonly<T>) {
    this._setState(newState);
    this._listeners.forEach((listener) => listener(newState));
  }

  subscribe(listener: Listener<T>) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }
}

/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
export function listen<T = any>(target: Reactive<T>) {
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

export const reactive = Reactify;

export const reactiveMemo = ReactifyMemo;

// Version: 2 useStore

type Store<State = any> = {
  state: State;
  setState: (newState: State) => void;
};

export const useStore = <T = any>(initialState: T): Store<T> => {
  const [state, setState] = React.useState<T>(initialState);

  return {
    state,
    setState,
  };
};

type Callback<State> = (newState: State) => any;

export const useSync = <State>(store: Store<State>) => {
  const useSyncEffect = (callbacks: Callback<typeof store.state>[]) => {
    React.useEffect(() => {
      const dispose = store.setState;

      store.setState = (newState: State) => {
        dispose(newState);
        callbacks.forEach((callback) => callback(newState));
      };

      return () => {
        store.setState = dispose;
      };
    }, [store, callbacks]);
  };

  return {
    then: useSyncEffect,
  };
};

export type Protected<Fx extends Function = Function> = Fx;

/**
 * Catch error handling for a given function.
 * @param fn
 * @param catchHanlder
 * @param finallyHandler
 */
export const useCatch = <Fx extends Function = Function>(
  fn: Fx,
  catchHandler?: (err?: any) => any | null,
  finallyHandler?: () => any | null
): Protected<typeof fn> => {
  const fnProtected: Protected<typeof fn> = ((...args: any[]) => {
    try {
      fn(...args);
    } catch (error) {
      if (catchHandler) {
        catchHandler(error);
      } else {
        console.error(error);
      }
    } finally {
      finallyHandler?.();
    }
  }) as unknown as typeof fn;

  return fnProtected;
};

