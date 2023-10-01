import SvgIcons, { SvgIcon, SvgIconType } from "./svg.icons";
import { ArrayLengthed, Hintable, IndexableFuzzy } from "../utils";
import { propsParser } from "../utils/props.parser";
import { EvpCursorRule, EvpWRule, EvpHRule } from "../typings";

export type IconType =
  | "user"
  | "true_circle"
  | "success"
  | "false_circle"
  | "close_circle"
  | "error"
  | "close"
  | "lock"
  | "unknown"
  | "help"
  | "warn"
  | "info"
  | "user"
  | "all"
  | "waterfalls_h"
  | "waterfalls_v"
  | "up"
  | "down"
  | "left"
  | "right"
  | "unchecked_box"
  | "checked_box"
  | "male"
  | "female"
  | "evp";

export type EvpIconProps = EvpIconPropsType & { [x: string]: any };

export interface EvpIconPropsType {
  /** this can override the icon key */
  name?: Hintable<IconType>;
  true_circle?: boolean;
  success?: boolean;
  false_circle?: boolean;
  close_circle?: boolean;
  error?: boolean;
  warn?: boolean;
  info?: boolean;
  close?: boolean;
  unknown?: boolean;
  help?: boolean;
  user?: boolean;
  lock?: boolean;
  all?: boolean;
  waterfalls_h?: boolean;
  waterfalls_v?: boolean;
  up?: boolean;
  down?: boolean;
  left?: boolean;
  right?: boolean;
  unchecked_box?: boolean;
  checked_box?: boolean;
  male?: boolean;
  female?: boolean;
  evp?: boolean;
  passwords?: boolean;
  $click?: React.MouseEventHandler<HTMLDivElement>;
  class?: string;
  style?: React.CSSProperties;
  /** Is icon visible. This is only hidden it, but still keeps the icon in dom trees */
  $visibleSync?: boolean;
  /** Is icon displayed. This will remove the icon from dom trees */
  $displaySync?: boolean;
  /** Stroke line width */
  strokeWidth?: number;
  /** Stroke line color, default is #333 */
  color?: any;
  /** fill the blank with certain color */
  fill?: string;
  /** Default radius is `24`, and unit is `px` */
  radius?: number;
  /** Cursor pointer, this will be overrided by props.cursor if that exists */
  pointer?: boolean;
  /** Cursor type, this will override props.pointer */
  cursor?: EvpCursorRule;
  w?: EvpWRule;
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule;
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string | number | undefined | null, 4> | number;
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string | number | undefined | null, 4> | number;
}

const IconMap: IndexableFuzzy<SvgIconType> = {
  "": "",
  TRUE_CIRCLE: "TrueCircle",
  SUCCESS: "Success",
  FALSE_CIRCLE: "FalseCircle",
  CLOSE_CIRCLE: "CloseCircle",
  ERROR: "Error",
  UNKNOWN: "Unknown",
  CLOSE: "Close",
  HELP: "Help",
  WARN: "Warn",
  INFO: "Info",
  USER: "User",
  LOCK: "Lock",
  PASSWORDS: "Lock",
  ALL: "All",
  WATERFALLS_H: "WaterfallsH",
  WATERFALLS_V: "WaterfallsV",
  UP: "Up",
  DOWN: "Down",
  LEFT: "Left",
  RIGHT: "Right",
  UNCHECKEDBOX: "UncheckedBox",
  CHECKEDBOX: "CheckedBox",
  MALE: "Male",
  FEMALE: "Female",
  EVP: "Evp",
};

/** EvpIcon: not raw SVG but with a `<div><div/>` wrapper, key's value is props.name or the unique icon key
 * @param props.name this can override the icon key
 * @param props`[key]` should be valid incon keys like "true_circle", "false_circle ...
 */
const EvpIcon = (props: EvpIconProps) => {
  // let _props: {[x:string]:string} = props as {[x:string]:string};
  let key = "";
  const keyFilter = [
    "$click",
    "style",
    "strokeWidth",
    "color",
    "fill",
    "radius",
    "pointer",
    "cursor",
    "w",
    "h",
    "pd",
    "mg",
  ];
  if (props.name) {
    key = props.name.toUpperCase();
  } else {
    let keys = Object.keys(props).filter(
      (k) => props[k] && !keyFilter.includes(k)
    );
    if (keys.length === 0) {
      throw new Error(
        "EvpIcon should have name attribute or one valid icon key!"
      );
    } else if (keys.length > 1) {
      throw new Error("EvpIcon should have only one valid icon key!");
    } else {
      key = keys[0].toUpperCase();
    }
  }

  // console.log('key:', IconMap[key])
  const svgType = IconMap[key] as SvgIconType;
  const Icon: SvgIcon | undefined = SvgIcons[svgType];
  if (!Icon) {
    throw new Error("SvgIcon is undefined");
  }
  return (
    <Icon
      onClick={props.$click}
      class={`evp icon ${props.class ?? ""}`.trim()}
      $visibleSync={props.$visibleSync}
      $displaySync={props.$displaySync}
      strokeWidth={props.strokeWidth}
      color={props.color}
      fill={props.fill}
      radius={props.radius}
      pointer={props.pointer}
      cursor={props.cursor}
      style={{
        width: props.w,
        height: props.h,
        padding: propsParser.get("pd")?.(props.pd),
        margin: propsParser.get("mg")?.(props.mg),
        ...props.style,
      }}
    ></Icon>
  );
};

export default EvpIcon;
