import React from "react";

/// <reference types="react" />
export { Reactive, listen, Reactify, ReactifyMemo, reactive, reactiveMemo } from "./reactive";

// Version: 2 useStore

export type Store<State = any> = {
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

export type Callback<State> = (newState: State) => any;

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

