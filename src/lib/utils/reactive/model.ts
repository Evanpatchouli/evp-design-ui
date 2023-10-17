import { ReactiveCtxModel } from "./context";
import * as React from "react";

export type Listener<T> = (state: T) => any;

export class Reactive<T = any> implements ReactiveCtxModel {
  private _state: T;
  private _setState: any = (newState: T) => {
    this._state = newState;
  };
  private _listeners: Listener<Readonly<T>>[] = [];

  constructor(state: T, setState?: any) {
    this._state = state;
    setState ? (this._setState = setState) : void 0;
  }

  get value(): T {
    return this._state;
  }

  set value(newState: T) {
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
