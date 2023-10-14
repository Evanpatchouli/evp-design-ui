import React from "react";
export type EvpWaterfallsProps = {
    children?: React.ReactNode;
    columns?: number;
    gap?: number | string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const EvpWaterfalls: React.FC<EvpWaterfallsProps>;
export default EvpWaterfalls;
