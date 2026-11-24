import { ReactiveCtxModel } from "./context";

export type Listener<T> = (state: T) => any;

export class Reactive<T = any> implements ReactiveCtxModel {
  private _state: T;
  private _listeners: Listener<T>[] = [];

  constructor(state: T, private _setState?: (state: T) => void) {
    this._state = state;
  }

  get value(): T {
    return this._state;
  }

  set value(newState: T) {
    this._state = newState;
    this._setState?.(newState);
    this._listeners.forEach((listener) => listener(newState));
  }

  subscribe(listener: Listener<T>) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }

  static isReactive(obj: any) {
    return Reactive.prototype.isPrototypeOf(obj);
  }
}
