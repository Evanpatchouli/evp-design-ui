import { Nullable } from "../utils";
export type EvpToastType = "info" | "warn" | "error" | "success";
export interface ToastProps {
    text?: string;
    keep?: Nullable<number>;
    delay?: Nullable<number>;
    type?: EvpToastType;
    key: any;
    id: any;
    firstRendered?: boolean;
    lastRendered?: boolean;
}
declare function Toast(props: ToastProps): import("react/jsx-runtime").JSX.Element;
export interface EvpToastCreate {
    (key: any, type?: EvpToastType, text?: string, keep?: Nullable<number>, delay?: Nullable<number>, firstRendered?: boolean, lastRendered?: boolean): JSX.Element;
}
export default Toast;
