import React, { DOMAttributes, SyntheticEvent } from "react";
import EvpEventProps from "../props/evp.event.prop";
import { PropsParserFunc } from "./typing";
import { Indexable } from "../typings";

// type preservedProp =
//   '$in' |
//   '$on'|
//   '$focus'|
//   '$click'|
//   '$doubleClick'|
//   '$context'|
//   '$loose'|
//   '$scroll'|
//   '$off'|
//   '$out'|
//   '$esc'|
//   '$del'|
//   '$enter'|
//   '$space'|
//   (string & {});

// const preservedCursors: preservedProp[] = [
//   'pointer',
//   'not-allowed',
//   'col-resize',
//   'row-resize',
//   'all-scroll',
//   'text',
//   'wait',
//   'grab',
//   'grabbing',
//   'none',
// ]

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

const eventParser: PropsParserFunc = (props?: EvpEventProps): DOMAttributes<HTMLDivElement> => {
  if (!props) {
    return {};
  }
  const onKeyDown: React.KeyboardEventHandler = (e: React.KeyboardEvent) => {
    switch (e.key.toLowerCase()) {
      case "esc": {
        if (props.$esc && typeof props.$esc === "function") {
          props.$esc(e);
        }
        break;
      }
      case "del": {
        if (props.$del && typeof props.$del === "function") {
          props.$del(e);
        }
        break;
      }
      case "backspace": {
        if (props.$del && typeof props.$del === "function") {
          props.$del(e);
        }
        break;
      }
      case "enter": {
        if (props.$enter && typeof props.$enter === "function") {
          props.$enter(e);
        }
        break;
      }
      case "space": {
        if (props.$space && typeof props.$space === "function") {
          props.$space(e);
        }
        break;
      }
      default:
        break;
    }
  };

  function convert<T extends SyntheticEvent<any, Event>>(e?: React.EventHandler<T> | boolean) {
    if (!e) {
      return undefined;
    }
    if (typeof e === "boolean") {
      return undefined;
    }
    if (typeof e === "function") {
      return e;
    }
  }

  return {
    /** Applied to `onMouseEnter` Event */
    onMouseEnter: convert(props.$in),
    /** Applied to `onMouseOver` Event */
    onMouseOver: convert(props.$on),
    /** Applied to `onFocus` Event */
    onFocus: convert(props.$focus),
    /** Applied to `onMouseDown` Event */
    onMouseDown: convert(props.$click),
    /** Applied to `onDoubleClick` Event */
    onDoubleClick: convert(props.$doubleClick),
    /** Applied to `onContextMenu` Event */
    onContextMenu: convert(props.$context),
    /** Applied to `onMouseUp` Event */
    onMouseUp: convert(props.$loose),
    /** Applied to `onMouseMove` Event */
    onMouseMove: convert(props.$move),
    /** Applied to `onScroll` Event */
    onScroll: convert(props.$scroll),
    /** Applied to `onMouseOut` Event */
    onMouseOut: convert(props.$off),
    /** Applied to `onMouseLeave` Event */
    onMouseLeave: convert(props.$out),
    /** Applied to `onKeyDown` Event */
    onKeyDown: onKeyDown,
  };
};

export default eventParser;
