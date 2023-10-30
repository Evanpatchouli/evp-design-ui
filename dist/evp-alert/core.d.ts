import { EvpDialogProps as DialogProps } from "../evp-dialog";
export declare const createAlert: () => void;
export type AlertOptions = DialogProps;
declare const core: {
    alert: (content?: React.ReactNode, options?: AlertOptions) => void;
};
export default core;
