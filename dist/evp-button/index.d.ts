import React from "react";
import EvpBaseProps from "../props";
export type EvpButtonProps = EvpButtonSpecProps & EvpBaseProps;
interface EvpButtonSpecProps {
    /** The button text, it will be overrided by props.children if that exists */
    text?: string;
    /** Default type is 'button' */
    type?: "button" | "reset" | "submit";
    /** Default theme is 'primary' */
    theme?: "white" | "primary" | "success" | "warning" | "danger" | "info" | "dark" | "text";
    plain?: boolean;
    size?: "mini" | "small" | "middle" | "large" | "huge";
    /** default is undefined, square will has 0 border-radius */
    shape?: "circle" | "round" | "square";
    /** default is false : whether to show preserved box-shadow */
    shadow?: boolean;
    link?: string | {
        path?: string;
        hash?: boolean;
    };
    hash?: boolean;
    loading?: boolean;
    fade?: boolean;
    ripple?: boolean;
}
declare const EvpButton: React.FC<EvpButtonProps>;
export default EvpButton;
