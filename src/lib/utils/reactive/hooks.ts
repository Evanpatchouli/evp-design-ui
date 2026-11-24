import React from "react";
import { Reactive } from "./model";
import ReactiveCtx, { ReactiveCtxModel } from "./context";

export function listen<T = any>(target: ReactiveCtxModel<T>) {
  return {
    then: (...listeners: ((value: T) => any)[]) =>
      target.subscribe((value) => listeners.forEach((listener) => listener(value))),
  };
}

function useSnapshot<T>(store: ReactiveCtxModel<T>) {
  const subscribe = React.useCallback((notify: () => void) => store.subscribe(notify), [store]);
  const read = React.useCallback(() => store.value, [store]);
  React.useSyncExternalStore(subscribe, read, read);
}

function useLocalStore<T>(initialValue: T) {
  const [store] = React.useState(() => new Reactive(initialValue));
  return store;
}

export function Reactify<T = any>(initialValue: T): Reactive<T> {
  const store = useLocalStore(initialValue);
  useSnapshot(store);
  return store;
}

export const ReactifyMemo = Reactify;
export const reactive = Reactify;
export const reactiveMemo = Reactify;

export function useReactive<T = any>(initialValue?: T): Reactive<T> {
  const local = useLocalStore(initialValue as T);
  const inherited = React.useContext(ReactiveCtx);
  const store = initialValue == null && inherited ? inherited : local;
  useSnapshot(store);
  return store as Reactive<T>;
}

export function useReativeContext<T = any>(context?: React.Context<ReactiveCtxModel<T> | undefined>): Reactive<T> {
  const inherited = React.useContext(context || ReactiveCtx);
  const fallback = useLocalStore<T | undefined>(undefined);
  const store = inherited ?? fallback;
  useSnapshot(store);
  return store as Reactive<T>;
}

export function useReactiveRef<T = any>(initialValue?: T): React.MutableRefObject<Reactive<T>> {
  const store = useReactive(initialValue);
  const ref = React.useRef(store);
  ref.current = store;
  return ref;
}
