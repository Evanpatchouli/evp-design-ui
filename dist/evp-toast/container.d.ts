import React from "react";
export type ToastPlacement = "top" | "bottom" | "leftBottom" | "rightBottom" | "leftTop" | "rightTop" | "center";
interface ToastsContainerProps {
    toasts?: (JSX.Element | React.ReactNode)[];
    key?: any;
    id?: any;
    placement?: ToastPlacement;
}
declare const ToastsContainer: React.FC<ToastsContainerProps>;
export declare function createToastsContainer(toasts: (JSX.Element | React.ReactNode)[], key?: any, placement?: ToastPlacement): import("react/jsx-runtime").JSX.Element;
export default ToastsContainer;
