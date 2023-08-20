import React from "react";

import $User from './user';
import $TrueCircle from "./true-circle";
import $FalseCircle from "./false-circle";
import $Lock from "./lock";
import $Unknown from "./unknown";
import $All from "./all";
import $WaterfallsH from './waterfalls-h';
import $WaterfallsV from './waterfalls-v';
import $Down from './down';
import $Left from './left';
import { ArrayLengthed } from "../utils";

export type SvgIconProps = Indexable<SvgIconPropsType, any>;

type SvgIconPropsType = {
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  "style"?: React.CSSProperties;
  /** Is icon visible. This is only hidden it, but still keeps the icon in dom trees */
  "$visibleSync"?: boolean,
  /** Is icon displayed. This will remove the icon from dom trees */
  "$displaySync"?: boolean,
  /** Stroke line width */
  strokeWidth?: number,
  /** Stroke line color, default is #333 */
  color?: any,
  /** fill the blank with certain color */
  fill?: string,
  /** Default radius is `24`, and unit is `px` */
  radius?: number,
  /** Cursor pointer, this will be overrided by props.cursor if that exists */
  pointer?: boolean,
  /** Cursor type, this will override props.pointer */
  cursor?: EvpCursorRule,
  w?: EvpWRule;
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule;
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4> | number,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4> | number,
}

export type SvgIcon = React.FC<SvgIconProps>;

export const User = $User;
export const TrueCircle = $TrueCircle;
export const FalseCircle = $FalseCircle;
export const Lock = $Lock;
export const Unknown = $Unknown;
export const Help = $Unknown;
export const All = $All;
export const WaterfallsH = $WaterfallsH;
export const WaterfallsV = $WaterfallsV;
export const Down = $Down;
export const Left = $Left;

export type SvgIconType = 
"" |
"User" |
"TrueCircle" |
"FalseCircle" |
"Lock" |
"Unknown" |
"Help" |
"All" |
"WaterfallsH" |
"WaterfallsV" |
"Down" |
"Left";

const SvgIcons = {
  "": undefined,
  "User": User,
  "TrueCircle": TrueCircle,
  "FalseCircle": FalseCircle,
  "Lock": Lock,
  "Unknown": Unknown,
  "Help": Help,
  "All": All,
  "WaterfallsH": WaterfallsH,
  "WaterfallsV": WaterfallsV,
  "Down": Down,
  "Left": Left,
}

export default SvgIcons;