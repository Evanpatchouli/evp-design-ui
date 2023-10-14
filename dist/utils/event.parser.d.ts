import React from "react";
import { PropsParserFunc } from "./typing";
import { Indexable } from "../typings";
export type EventMap = {
    /** Applied to `onMouseEnter` Event */
    onMouseEnter?: React.MouseEventHandler;
    /** Applied to `onMouseOver` Event */
    onMouseOver?: React.MouseEventHandler;
    /** Applied to `onFocus` Event */
    onFocus?: React.FocusEventHandler;
    /** Applied to `onMouseDown` Event */
    onMouseDown?: React.MouseEventHandler;
    /** Applied to `onDoubleClick` Event */
    onDoubleClick?: React.MouseEventHandler;
    /** Applied to `onContextMenu` Event */
    onContextMenu?: React.MouseEventHandler;
    /** Applied to `onMouseUp` Event */
    onMouseUp?: React.MouseEventHandler;
    /** Applied to `onMouseMove` Event */
    onMouseMove?: React.MouseEventHandler;
    /** Applied to `onScroll` Event */
    onScroll?: React.UIEventHandler;
    /** Applied to `onMouseOut` Event */
    onMouseOut?: React.MouseEventHandler;
    /** Applied to `onMouseLeave` Event */
    onMouseLeave?: React.MouseEventHandler;
    /** Applied to `onKeyDown` Event */
    onKeyDown?: React.KeyboardEventHandler;
};
export type EvpEventMap = Indexable<EventMap, Function | undefined>;
declare const eventParser: PropsParserFunc;
export default eventParser;
