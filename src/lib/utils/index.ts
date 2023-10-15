/* eslint-disable @typescript-eslint/no-unused-vars */

import { AriaAttributes, DOMAttributes, CSSProperties, AriaRole } from "react";

/** This Array should have N items */
export type ArrayLengthed<T, N extends number> = T[];

/** This Array must have N items */
export type ArrayStrictLengthed<T, N extends number> = [T, ...T[]] & { length: N };

/** This func is to unassign undefined properties from an indexable object, especially invoked during parsing props */
export function shift(obj?: Indexable<{}, any>) {
  if (obj && typeof obj === "object") {
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
  }
  return obj;
}

export type Option<T extends unknown> = T | undefined;

export type Nullable<T extends unknown> = T | null | undefined;

export type Hintable<T> = T | (string & {});

export type Indexable<T, E extends unknown> = T & { [x: string]: E };

// @ts-ignore
export type IndexableVididy<T, E extends unknown> = T & { [x: Hintable<T>]: E };

/** Force to convert an object as to be indexable with string key without given hintable type */
export type IndexableFuzzy<E extends unknown> = { [x: string]: E };

export type Booleanish = boolean | "true" | "false";

export type Pretify<T> = { [P in keyof T]: T[P] } & {};

export type PartialByKeys<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Pick<T, Exclude<keyof T, K>>;

export function boolStringfy(value: boolean = false) {
  return value ? "true" : "false";
}

/**
 * Is a given value a hex color lengthed 7
 * @returns
 */
export function isSixBitHexColor(color: string) {
  const _isHexColor =
    color.startsWith("#") && // to check is it a 7 lengthed hex color
    color.length === 7;
  return _isHexColor;
}

export function hexAlpha(color: string, alpha: number | string) {
  if (isSixBitHexColor(color)) {
    return color + alpha;
  }
  return color;
}

export class Var {
  constructor(public name: string, public value: string | undefined = void 0) {}
  json() {
    return {
      [this.name]: this.value,
    };
  }
  stringify() {
    return JSON.stringify(this.json());
  }
  static fromString(str: string) {
    const [name, value] = str.split(":");
    return new Var(name.trim(), value.trim());
  }
  static fromObject(obj: { name: string; value?: string }) {
    return new Var(obj.name, obj.value);
  }
  toString() {
    return `var(${this.name})`;
  }
}

/**
 * Bing variables from `source Object` to `target Function`
 * @returns
 */
export const bindFC = <T, S>(source: Partial<S> = {}, target: T): T & {} & S => {
  Object.keys(source).forEach((key) => {
    // @ts-ignore
    target[key] = source[key];
  });
  // @ts-ignore
  return target;
};
