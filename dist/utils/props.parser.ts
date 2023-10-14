import EvpBaseProps from "../props";

import $cursorParser from "./cursor.parser";
import $eventParser, { EvpEventMap } from "./event.parser";
import StylePropsParser from "./style.parser";
import { PropsParserFunc } from "./typing";
import { shift } from "./index";
import React from "react";
import { paddingParser } from "./padding.parser";
import { marginParser } from "./margin.parser";

export const propsParser = new Map<parserKey, PropsParserFunc>();

export type parserKey = "pd" | "mg" | "cursor" | (string & {});

export const cursorParser = $cursorParser;
propsParser.set("cursor", cursorParser);

export const eventParser = $eventParser;
propsParser.set("event", eventParser);

propsParser.set("pd", paddingParser);

propsParser.set("mg", marginParser);

// export default propsParser;

export default function AllParser(props?: EvpBaseProps) {
  const style = props ? StylePropsParser(props) : undefined;
  const event = props ? eventParser<EvpEventMap>(props) : {};
  const children = props ? props.children : undefined;
  return {
    style: shift(style) as React.CSSProperties,
    event,
    children,
    id: props?.id,
    class: props?.class,
    key: props?.key,
    loading: props?.loading,
    hidden: props?.hidden,
  };
}
