import React from "react";
import { Hintable } from "../utils";
import EvpBaseProps from "../props";
export type EvpFrostedGlassProps = {
    background?: string;
    filterAlpha?: number;
    filterBackGround?: string;
    filterBlur?: number;
    radius?: number;
    border?: string;
    borderWidth?: number;
    borderStyle?: Hintable<"solid" | "dashed" | "dotted" | "none">;
    borderColor?: string;
} & EvpBaseProps;
declare const EvpFrostedGlass: React.FC<EvpFrostedGlassProps>;
export default EvpFrostedGlass;
