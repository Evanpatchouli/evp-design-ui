import React from "react";
export type EvpAlertProps = {};
export { type AlertOptions } from "./core";
export { default as Alert } from "./alert";
declare const alert: (content?: React.ReactNode, options?: import("..").EvpDialogProps | undefined) => void;
export default alert;
