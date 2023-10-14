import React from "react";
export type EvpProgressProps = {
    value?: number;
    onChange?: (value: number) => void;
    size?: number | "sm" | "md" | "lg";
    min?: number;
    max?: number;
    fillColor?: string;
    textColor?: string;
    blankColor?: string;
    textBlankColor?: string;
    class?: string;
    id?: string;
    style?: React.CSSProperties;
} & React.DOMAttributes<HTMLDivElement>;
export declare const EvpProgress: React.FC<EvpProgressProps>;
export default EvpProgress;
