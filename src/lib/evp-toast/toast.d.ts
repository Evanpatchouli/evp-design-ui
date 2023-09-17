export type EvpToastType = 'info' | 'warn' | 'error' | 'success';
export interface ToastProps {
    text?: string;
    keep?: number;
    delay?: number;
    type?: EvpToastType;
}
declare function Toast(props: ToastProps): import("react/jsx-runtime").JSX.Element;
export interface EvpToastCreate {
    (type?: EvpToastType, text?: string, keep?: number, delay?: number): JSX.Element;
}
export default Toast;
