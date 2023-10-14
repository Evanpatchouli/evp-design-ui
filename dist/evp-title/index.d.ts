import React from "react";
import { Hintable } from "../utils";
export type EvpTitleProps = {
    stressed?: boolean;
    stressLineColor?: string;
    size?: Hintable<"mn" | "sm" | "md" | "lg" | "hg"> | number;
    weight?: Hintable<"smaller" | "small" | "normal" | "bold" | "bolder"> | number;
    fontSize?: string | number;
    underline?: boolean | string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const EvpTitle: React.FC<EvpTitleProps>;
export default EvpTitle;
