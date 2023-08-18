import React from "react";

import $User from './user';
import $TrueCircle from "./true-circle";
import $FalseCircle from "./false-circle";
import $Lock from "./lock";
import $Unknown from "./unknown";
import $All from "./all";
import $WaterFallsH from './waterfalls-h';
import $WaterFallsV from './waterfalls-v';

export type SvgIconProps = {
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
  fill?: string,
  /** Default redius is 24 */
  redius?: number,
}

export type SvgIcon = React.FC<SvgIconProps>;

export const User = $User;
export const TrueCircle = $TrueCircle;
export const FalseCircle = $FalseCircle;
export const Lock = $Lock;
export const Unknown = $Unknown;
export const Help = $Unknown;
export const All = $All;
export const WaterfallsH = $WaterFallsH;
export const WaterFallsV = $WaterFallsV;

const SvgIcons = {
  User,
  TrueCircle,
  FalseCircle,
  Lock,
  Unknown,
  Help,
  All,
  WaterfallsH,
  WaterFallsV
}

export default SvgIcons;