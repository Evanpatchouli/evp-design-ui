import React from "react";
export type EvpCircleProps<T = any> = {
    class?: string;
    children?: React.ReactNode;
    items?: T[];
    schema?: {
        render?: (item: T, idx: number, items: T[]) => React.ReactNode;
        $hover?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        $leave?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        $in?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onMouseOver` Event */
        $on?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onFocus` Event */
        $focus?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onMouseDown` Event */
        $click?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onDoubleClick` Event */
        $doubleClick?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onContextMenu` Event */
        $context?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onMouseUp` Event */
        $loose?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onMouseMove` Event */
        $move?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onScroll` Event */
        $scroll?: boolean | React.UIEventHandler;
        /** Applied to `onMouseOut` Event */
        $off?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onMouseLeave` Event */
        $out?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onKeyDown` `Esc` and `BackSpace` Event */
        $esc?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onKeyDown` `Del` and `BackSpace` Event */
        $del?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onKeyDown` `Enter` Event */
        $enter?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        /** Applied to `onKeyDown` `Space` Event */
        $space?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
        class?: string;
        style?: React.CSSProperties;
        id?: string;
    };
    size?: number | string;
    itemSize?: number | string;
    style?: React.CSSProperties;
    mainProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const EvpCircle: React.FC<EvpCircleProps>;
export default EvpCircle;
