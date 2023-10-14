import React from "react";
interface ToastsContainerProps {
    toasts?: (JSX.Element | React.ReactNode)[];
    key?: any;
    id?: any;
}
declare const ToastsContainer: React.FC<ToastsContainerProps>;
export declare function createToastsContainer(toasts: (JSX.Element | React.ReactNode)[], key?: any): import("react/jsx-runtime").JSX.Element;
export default ToastsContainer;
