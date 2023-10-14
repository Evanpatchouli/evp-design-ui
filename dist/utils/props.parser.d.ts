import EvpBaseProps from "../props";
import { EvpEventMap } from "./event.parser";
import { PropsParserFunc } from "./typing";
import React from "react";
export declare const propsParser: Map<parserKey, PropsParserFunc>;
export type parserKey = "pd" | "mg" | "cursor" | (string & {});
export declare const cursorParser: PropsParserFunc;
export declare const eventParser: PropsParserFunc;
export default function AllParser(props?: EvpBaseProps): {
    style: React.CSSProperties;
    event: EvpEventMap;
    children: React.ReactNode;
    id: string | undefined;
    class: string | undefined;
    key: any;
    loading: boolean | undefined;
    hidden: boolean | undefined;
};
