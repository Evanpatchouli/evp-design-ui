/// <reference types="react" />
import EvpBaseProps from "../props";
export interface EvpCounterProps extends EvpBaseProps {
    /** label should be a string or EvpIcon */
    label?: string | JSX.Element;
    /** **Label font-Size:** default value is 14px */
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Default is false */
    labelColon?: boolean | React.ReactNode;
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    name?: string;
    placeholder?: string;
    readOnly?: boolean;
    min?: number;
    max?: number;
    /** Default is 1 */
    step?: number;
    value?: number;
    defaultValue?: number;
}
declare const EvpCounter: React.FC<EvpCounterProps>;
export default EvpCounter;
