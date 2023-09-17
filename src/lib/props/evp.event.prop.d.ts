import React from "react";
import { Indexable } from "../typings";
export type EvpEventProps = Indexable<EvpEvent, any>;
export default EvpEventProps;
export interface EvpEvent {
    /** Applied to `onMouseEnter` Event */
    $in?: boolean | React.MouseEventHandler;
    /** Applied to `onMouseOver` Event */
    $on?: boolean | React.MouseEventHandler;
    /** Applied to `onFocus` Event */
    $focus?: boolean | React.FocusEventHandler;
    /** Applied to `onMouseDown` Event */
    $click?: boolean | React.MouseEventHandler;
    /** Applied to `onDoubleClick` Event */
    $doubleClick?: boolean | React.MouseEventHandler;
    /** Applied to `onContextMenu` Event */
    $context?: boolean | React.MouseEventHandler;
    /** Applied to `onMouseUp` Event */
    $loose?: boolean | React.MouseEventHandler;
    /** Applied to `onMouseMove` Event */
    $move?: boolean | React.MouseEventHandler;
    /** Applied to `onScroll` Event */
    $scroll?: boolean | React.UIEventHandler;
    /** Applied to `onMouseOut` Event */
    $off?: boolean | React.MouseEventHandler;
    /** Applied to `onMouseLeave` Event */
    $out?: boolean | React.MouseEventHandler;
    /** Applied to `onKeyDown` `Esc` and `BackSpace` Event */
    $esc?: boolean | React.KeyboardEventHandler;
    /** Applied to `onKeyDown` `Del` and `BackSpace` Event */
    $del?: boolean | React.KeyboardEventHandler;
    /** Applied to `onKeyDown` `Enter` Event */
    $enter?: boolean | React.KeyboardEventHandler;
    /** Applied to `onKeyDown` `Space` Event */
    $space?: boolean | React.KeyboardEventHandler;
}
