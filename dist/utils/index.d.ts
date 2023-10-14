/** This Array should have N items */
export type ArrayLengthed<T, N extends number> = T[];
/** This Array must have N items */
export type ArrayStrictLengthed<T, N extends number> = [T, ...T[]] & {
    length: N;
};
/** This func is to unassign undefined properties from an indexable object, especially invoked during parsing props */
export declare function shift(obj?: Indexable<{}, any>): {
    [x: string]: any;
} | undefined;
export type Option<T extends unknown> = T | undefined;
export type Hintable<T> = T | (string & {});
export type Indexable<T, E extends unknown> = T & {
    [x: string]: E;
};
export type IndexableVididy<T, E extends unknown> = T & {
    [x: Hintable<T>]: E;
};
/** Force to convert an object as to be indexable with string key without given hintable type */
export type IndexableFuzzy<E extends unknown> = {
    [x: string]: E;
};
export type Booleanish = boolean | "true" | "false";
export type Pretify<T> = {
    [P in keyof T]: T[P];
} & {};
export type PartialByKeys<T, K extends keyof T> = {
    [P in K]?: T[P];
} & Pick<T, Exclude<keyof T, K>>;
export declare function boolStringfy(value?: boolean): "true" | "false";
/**
 * Is a given value a hex color lengthed 7
 * @returns
 */
export declare function isSixBitHexColor(color: string): boolean;
export declare function hexAlpha(color: string, alpha: number | string): string;
export declare class Var {
    name: string;
    value: string | undefined;
    constructor(name: string, value?: string | undefined);
    json(): {
        [x: string]: string | undefined;
    };
    stringify(): string;
    static fromString(str: string): Var;
    static fromObject(obj: {
        name: string;
        value?: string;
    }): Var;
    toString(): string;
}
