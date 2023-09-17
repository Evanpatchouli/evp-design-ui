/// <reference types="react" />
import EvpBaseProps from "../props";
export interface EvpPopoverProps extends EvpBaseProps {
    content?: React.ReactNode;
    children: JSX.Element;
    style?: React.CSSProperties;
    class?: string;
    id?: string;
    trigger?: "hover" | "click";
    hiddenOnBlur?: boolean;
    position?: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight" | "left" | "leftTop" | "leftBottom" | "right" | "rightTop" | "rightBottom" | "upperLeftCorner" | "upperRightCorner" | "lowerLeftCorner" | "lowerRightCorner";
}
export default function EvpPopover(props: EvpPopoverProps): import("react/jsx-runtime").JSX.Element;
