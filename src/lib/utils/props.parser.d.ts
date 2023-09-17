import EvpBaseProps from "../props";
import { EvpEventMap } from "./event.parser";
import React from "react";
export declare const propsParser: Map<parserKey, PropsParserFunc>;
export type parserKey = 'pd' | 'mg' | 'cursor' | (string & {});
export interface PropsParserFunc {
    <R>(): R;
    <A, R>(args1: A): R;
    <A, B, R>(args1: A, args2: B): R;
    <A, B, C, R>(args1: A, args2: B, args3: C): R;
    <A, B, C, D, R>(args1: A, args: B, args2: C, args3: D): R;
    <A, B, C, D, E, R>(args1: A, args?: B, args2?: C, args3?: D, args4?: E): R;
    <R>(...args: any): R;
}
export declare const cursorParser: PropsParserFunc;
export declare const eventParser: PropsParserFunc;
/**
 * @param pd This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px`
 * @returns
 */
export declare const paddingParser: PropsParserFunc;
export declare const marginParser: PropsParserFunc;
export default function AllParser(props?: EvpBaseProps): {
    style: React.CSSProperties;
    event: EvpEventMap;
    children: React.ReactNode;
    id: string | undefined;
    class: string | undefined;
};
