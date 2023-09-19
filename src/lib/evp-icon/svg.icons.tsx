import React from "react";
import { ArrayLengthed, Indexable } from "../utils";
import { EvpCursorRule, EvpWRule, EvpHRule } from "../typings";

import $User from './user';
import $TrueCircle from "./true-circle";
import $FalseCircle from "./false-circle";
import $CloseCircle from "./close-circle";
import $Close from "./close";
import $Lock from "./lock";
import $Unknown from "./unknown";
import $Exclamation from './exclamation';
import $Info from "./info";
import $All from "./all";
import $WaterfallsH from './waterfalls-h';
import $WaterfallsV from './waterfalls-v';
import $Up from './up';
import $Down from './down';
import $Left from './left';
import $Right from './right';
import $Evp from './evp';
import $UncheckedBox from "./unchecked-box";
import $CheckedBox from "./checked-box";

export type SvgIconProps = Indexable<SvgIconPropsType, any>;

type SvgIconPropsType = {
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  class?: string;
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
  border?: string,
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
export const Success = $TrueCircle;
export const FalseCircle = $FalseCircle;
export const CloseCircle = $CloseCircle;
export const Error = $CloseCircle;
export const Close = $Close;
export const Lock = $Lock;
export const Unknown = $Unknown;
export const Help = $Unknown;
export const Exclamation = $Exclamation;
export const Warn = $Exclamation;
export const Info = $Info;
export const All = $All;
export const WaterfallsH = $WaterfallsH;
export const WaterfallsV = $WaterfallsV;
export const Up = $Up;
export const Down = $Down;
export const Left = $Left;
export const Right = $Right;
export const UncheckedBox = $UncheckedBox;
export const CheckedBox = $CheckedBox;
export const Evp = $Evp;

export type SvgIconType = 
"" |
"User" |
"TrueCircle" |
"Success" |
"FalseCircle" |
"CloseCircle" |
"Error" |
"Close" |
"Lock" |
"Unknown" |
"Help" |
"Warn" |
"Info" |
"All" |
"WaterfallsH" |
"WaterfallsV" |
"Up" |
"Down" |
"Left" |
"Right" |
"UncheckedBox" |
"CheckedBox" |
"Evp";

const SvgIcons = {
  "": undefined,
  "User": User,
  "TrueCircle": TrueCircle,
  "Success": Success,
  "FalseCircle": FalseCircle,
  "CloseCircle": CloseCircle,
  "Error": Error,
  "Close": Close,
  "Lock": Lock,
  "Unknown": Unknown,
  "Help": Help,
  "Warn": Warn,
  "Info": Info,
  "All": All,
  "WaterfallsH": WaterfallsH,
  "WaterfallsV": WaterfallsV,
  "Up": Up,
  "Down": Down,
  "Left": Left,
  "Right": Right,
  "UncheckedBox": UncheckedBox,
  "CheckedBox": CheckedBox,
  "Evp": Evp
}

export default SvgIcons;