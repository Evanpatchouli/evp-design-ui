import { AlertOptions } from "./alert";
export declare const createAlert: () => void;
declare const core: {
    alert: (content?: React.ReactNode, options?: AlertOptions) => void;
};
export default core;
