/// <reference types="react" />
import { type EvpCursorRule, type EvpDisplayRule } from "../typings";
import { Hintable } from "../utils";
export type PositionOptions = "top" | "topLeft" | "topLeftCorner" | "topRight" | "topRightCorner" | "left" | "leftTop" | "leftBottom" | "right" | "rightTop" | "rightBottom" | "bottom" | "bottomLeft" | "bottomRight" | "bottomLeftCorner" | "bottomRightCorner";
export type EvpToolTipProps = {
    /** The element to trigger tooltip */
    children?: React.ReactNode;
    /** tooltip content */
    content?: React.ReactNode;
    /** tooltip content className */
    class?: string;
    /** manage hidden customly */
    hidden?: boolean;
    /** tooltip content font color */
    color?: string;
    /** tooltip content background color */
    bgColor?: string;
    /** tooltip content border */
    border?: string;
    /** whether to make tooltip plain, default is false */
    plain?: boolean;
    /** tooltip content style */
    style?: React.CSSProperties;
    /** Default is hover */
    trigger?: "hover" | "click" | Array<"hover" | "click">;
    /** cursor type while hovering trigger, default is only when trigger is "click" to be "pointer" */
    cursor?: EvpCursorRule;
    /** the display of trigger tooltip container */
    display?: EvpDisplayRule;
    position?: PositionOptions | {
        top?: string | number;
        left?: string | number;
    };
    transform?: {
        vertical?: Hintable<"top" | "center" | "bottom" | number>;
        horizontal?: Hintable<"left" | "center" | "right" | number>;
    };
};
export default function EvpToolTip(props: EvpToolTipProps): import("react/jsx-runtime").JSX.Element;
