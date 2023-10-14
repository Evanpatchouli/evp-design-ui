/// <reference types="react" />
declare const store: {
    state: {
        toasts: {
            id: any;
            dom: JSX.Element | React.ReactNode;
        }[];
        context: string[];
        config: {
            reverse: boolean;
        };
        toastor: JSX.Element | import("react").ReactNode;
    };
    toasts: {
        id: any;
        dom: JSX.Element | React.ReactNode;
    }[];
    context: string[];
    config: {
        reverse: boolean;
    };
    toastor: JSX.Element | import("react").ReactNode;
};
export default store;
