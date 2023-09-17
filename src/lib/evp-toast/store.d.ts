/// <reference types="react" />
declare const store: {
    state: {
        toasts: (JSX.Element | import("react").ReactNode)[];
        context: string[];
        config: {
            reverse: boolean;
        };
    };
    toasts: (JSX.Element | import("react").ReactNode)[];
    context: string[];
    config: {
        reverse: boolean;
    };
};
export default store;
