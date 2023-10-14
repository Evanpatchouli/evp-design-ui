import { Hintable } from "../utils";
import { EvpToolTipProps } from "./index";
export declare const transformMap: {
    vertical: Record<Hintable<"top" | "center" | "bottom" | number>, string>;
    horizontal: Record<Hintable<"left" | "center" | "right" | number>, string>;
};
export declare const OffsetMap: (props: EvpToolTipProps) => {
    top: {
        top: string;
        left: string;
        transform: string;
    };
    topLeft: {
        top: string;
        left: string;
        transform: string;
    };
    topLeftCorner: {
        top: string;
        left: string;
        transform: string;
    };
    topRight: {
        top: string;
        left: string;
        transform: string;
    };
    topRightCorner: {
        top: string;
        left: string;
        transform: string;
    };
    left: {
        left: string;
        top: string;
        transform: string;
    };
    leftTop: {
        left: string;
        top: string;
        transform: string;
    };
    leftBottom: {
        left: string;
        top: string;
        transform: string;
    };
    right: {
        left: string;
        top: string;
        transform: string;
    };
    rightTop: {
        left: string;
        top: string;
        transform: string;
    };
    rightBottom: {
        left: string;
        top: string;
        transform: string;
    };
    bottom: {
        top: string;
        left: string;
        transform: string;
    };
    bottomLeft: {
        top: string;
        left: string;
        transform: string;
    };
    bottomLeftCorner: {
        top: string;
        left: string;
        transform: string;
    };
    bottomRight: {
        top: string;
        left: string;
        transform: string;
    };
    bottomRightCorner: {
        top: string;
        left: string;
        transform: string;
    };
};
