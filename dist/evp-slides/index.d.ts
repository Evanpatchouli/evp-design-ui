import React from "react";
export type EvpSlidesProps = {
    items?: React.ReactNode;
    children?: React.ReactNode;
    onClickLeft?: (e: Event) => void;
    onClickRight?: (e: Event) => void;
    onClickItem?: (index: number) => void;
    showBtns?: boolean;
    showScroll?: boolean;
    showTabSpots?: boolean;
    adjacentTabScaled?: boolean;
    tabSpotColor?: {
        default?: string;
        hover?: string;
        click?: string;
        active?: string;
    };
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const EvpSlides: React.FC<EvpSlidesProps>;
export default EvpSlides;
