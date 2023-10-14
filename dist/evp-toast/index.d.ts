/// <reference types="react" />
export interface EvpToastAdd {
    (text?: string, keep?: number, delay?: number): void;
}
/**
 * Render a global info toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export declare const toastInfo: EvpToastAdd;
/**
 * Render a global warn toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export declare const toastWarn: EvpToastAdd;
/**
 * Render a global error message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export declare const toastError: EvpToastAdd;
/**
 * Render a global success message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export declare const toastSuccess: EvpToastAdd;
declare function setReverse(reverse?: "true" | "false" | true | false): void;
/** @todo */
export declare const context: () => readonly (JSX.Element | React.ReactNode)[];
declare const EvpToast: {
    info: EvpToastAdd;
    warn: EvpToastAdd;
    error: EvpToastAdd;
    success: EvpToastAdd;
    context: () => readonly (JSX.Element | React.ReactNode)[];
    /** setReverse : set the toasts sequence direction reversely, default is true */
    setReverse: typeof setReverse;
};
export default EvpToast;
