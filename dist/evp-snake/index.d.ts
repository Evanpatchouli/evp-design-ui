import { EvpDomProps } from "../evp-dom";
import React from "react";
export type EvpSnakeProps = {
    children?: React.ReactNode;
    startFrom?: "left" | "right" | "top" | "bottom";
} & EvpDomProps;
declare const EvpSnake: React.FC<EvpSnakeProps>;
export default EvpSnake;
