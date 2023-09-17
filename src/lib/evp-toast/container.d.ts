import React from "react";
interface ToastsContainerProps {
    toasts?: (JSX.Element | React.ReactNode)[];
}
declare const ToastsContainer: React.FC<ToastsContainerProps>;
export declare function createToastsContainer(toasts: (JSX.Element | React.ReactNode)[]): import("react/jsx-runtime").JSX.Element;
export default ToastsContainer;
