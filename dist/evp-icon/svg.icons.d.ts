import React from "react";
import { ArrayLengthed, Indexable } from "../utils";
import { EvpCursorRule, EvpWRule, EvpHRule } from "../typings";
export type SvgIconProps = Indexable<SvgIconPropsType, any>;
type SvgIconPropsType = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
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
    border?: string;
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
};
export type SvgIcon = React.FC<SvgIconProps>;
export declare const User: SvgIcon;
export declare const TrueCircle: SvgIcon;
export declare const Success: SvgIcon;
export declare const FalseCircle: SvgIcon;
export declare const CloseCircle: SvgIcon;
export declare const Error: SvgIcon;
export declare const Close: SvgIcon;
export declare const Lock: SvgIcon;
export declare const Unknown: SvgIcon;
export declare const Help: SvgIcon;
export declare const Exclamation: SvgIcon;
export declare const Warn: SvgIcon;
export declare const Info: SvgIcon;
export declare const All: SvgIcon;
export declare const WaterfallsH: SvgIcon;
export declare const WaterfallsV: SvgIcon;
export declare const Up: SvgIcon;
export declare const Down: SvgIcon;
export declare const Left: SvgIcon;
export declare const Right: SvgIcon;
export declare const UncheckedBox: SvgIcon;
export declare const CheckedBox: SvgIcon;
export declare const Male: SvgIcon;
export declare const Female: SvgIcon;
export declare const Component: SvgIcon;
export declare const Github: SvgIcon;
export declare const Gitee: SvgIcon;
export declare const Evp: SvgIcon;
export declare const Star: SvgIcon;
export type SvgIconType = "" | "User" | "TrueCircle" | "Success" | "FalseCircle" | "CloseCircle" | "Error" | "Close" | "Lock" | "Unknown" | "Help" | "Warn" | "Info" | "All" | "WaterfallsH" | "WaterfallsV" | "Up" | "Down" | "Left" | "Right" | "UncheckedBox" | "CheckedBox" | "Male" | "Female" | "Component" | "Github" | "Gitee" | "Evp" | "Star";
declare const SvgIcons: {
    "": undefined;
    User: SvgIcon;
    TrueCircle: SvgIcon;
    Success: SvgIcon;
    FalseCircle: SvgIcon;
    CloseCircle: SvgIcon;
    Error: SvgIcon;
    Close: SvgIcon;
    Lock: SvgIcon;
    Unknown: SvgIcon;
    Help: SvgIcon;
    Warn: SvgIcon;
    Info: SvgIcon;
    All: SvgIcon;
    WaterfallsH: SvgIcon;
    WaterfallsV: SvgIcon;
    Up: SvgIcon;
    Down: SvgIcon;
    Left: SvgIcon;
    Right: SvgIcon;
    UncheckedBox: SvgIcon;
    CheckedBox: SvgIcon;
    Male: SvgIcon;
    Female: SvgIcon;
    Component: SvgIcon;
    Github: SvgIcon;
    Gitee: SvgIcon;
    Evp: SvgIcon;
    Star: SvgIcon;
};
export default SvgIcons;
