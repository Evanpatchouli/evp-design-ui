/// <reference types="react" />
import { ArrayLengthed, Hintable } from "../utils";
import { EvpCursorRule, EvpWRule, EvpHRule } from "../typings";
export type IconType = "user" | "true_circle" | "success" | "false_circle" | "close_circle" | "error" | "close" | "lock" | "unknown" | "help" | "warn" | "info" | "user" | "all" | "waterfalls_h" | "waterfalls_v" | "down" | "left" | "unchecked_box" | "checked_box" | "evp";
export type EvpIconProps = EvpIconPropsType & {
    [x: string]: any;
};
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
    down?: boolean;
    left?: boolean;
    unchecked_box?: boolean;
    checked_box?: boolean;
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
/** EvpIcon: not raw SVG but with a `<div><div/>` wrapper, key's value is props.name or the unique icon key
 * @param props.name this can override the icon key
 * @param props`[key]` should be valid incon keys like "true_circle", "false_circle ...
 */
declare const EvpIcon: (props: EvpIconProps) => import("react/jsx-runtime").JSX.Element;
export default EvpIcon;
