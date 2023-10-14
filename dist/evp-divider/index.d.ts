/// <reference types="react" />
export type EvpDividerProps = {
    type?: 'solid' | 'dashed' | 'dotted';
    color?: string;
    lineWidth?: string | number;
    width?: string | number;
    radius?: 'default' | 'round' | 'none' | number;
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    style?: React.CSSProperties;
    class?: string;
    children?: React.ReactNode;
    contentStyle?: React.CSSProperties;
    contentClass?: string;
    gap?: number | string;
    contentGap?: number;
    contentItemGap?: number | string;
    fontSize?: number | string;
    fontColor?: string;
};
export default function EvpDivider(props: EvpDividerProps): import("react/jsx-runtime").JSX.Element;
