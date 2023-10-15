import React from "react";

/// <reference types="react" />
// Version: 1 ReactiveObservor

type Listener<T> = (state: T) => any;

export class ReactiveObservor<T = any> {
  private _state: T;
  private _setState: any;
  private _listeners: Listener<T>[] = [];

  constructor(state: T, setState?: any) {
    this._state = state;
    this._setState = setState;
  }

  get state() {
    return this._state;
  }

  set state(newState: T) {
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

export function listen<T = any>(target: ReactiveObservor<T>) {
  return (...fns: ((state: T) => any)[]) => {
    const fn = (state: T) => fns.forEach((f) => f(state));
    const dispose = target.subscribe(fn);
    return dispose;
  };
}

type Store<State = any> = {
  state: State;
  setState: (newState: State) => void;
};

export const Reactive = <T = any>(initialState: T): ReactiveObservor<T> => {
  const [state, setState] = React.useState<T>(initialState);

  return new ReactiveObservor(state, setState);
};

// Version: 2 useStore

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
  }

  return useSyncEffect;
};
