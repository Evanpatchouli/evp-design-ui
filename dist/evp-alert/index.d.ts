/// <reference types="react" />
export type EvpAlertProps = {};
export { type AlertOptions } from "./alert";
export { default as Alert } from "./alert";
declare const alert: (content?: import("react").ReactNode, options?: import("..").EvpDialogProps | undefined) => void;
export default alert;
