/// <reference types="react" />
import { Color } from "../constant";
import { EvpPosition, Hintable } from "../typings";
export interface EvpHeaderProps {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    /** Default is 40 : left width rate */
    leftRate?: number;
    children?: React.ReactNode;
    leftContent?: React.ReactNode;
    leftOffset?: number;
    rightContent?: React.ReactNode;
    rightOffset?: number;
    bgColor?: Hintable<Color>;
    color?: Hintable<Color>;
    position?: EvpPosition;
    zIndex?: number;
    height?: number;
    class?: string;
    style?: React.CSSProperties;
}
export default function EvpHeader(props: EvpHeaderProps): import("react/jsx-runtime").JSX.Element;
