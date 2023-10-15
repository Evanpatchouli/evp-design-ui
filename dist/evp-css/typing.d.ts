/// <reference types="react" />
import { Hintable } from '../utils';
export type CommonCSS = {
    style?: React.CSSProperties;
    className?: string;
    id?: string;
};
export type FrostedGlassOptions = {
    background?: string;
    filterBlur?: number;
    radius?: number;
    border?: string;
    borderWidth?: number;
    borderStyle?: Hintable<"solid" | "dashed" | "dotted" | "none">;
    borderColor?: string;
};
