/// <reference types="react" />
import EvpBaseProps from "../props";
interface IEvpSwitchProp extends EvpBaseProps {
    class?: string;
    /** If name exists, the component will be a formItem and try to register to formContext */
    name?: string;
    active?: boolean;
    defaultActive?: boolean;
    label?: React.ReactNode;
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    size?: "mini" | "small" | "middle" | "large" | "huge";
    /** default is twice (2) of height */
    widthFactor?: number;
    style?: React.CSSProperties;
}
export type EvpSwitchProps = IEvpSwitchProp;
declare const EvpSwitch: React.FC<EvpSwitchProps>;
export default EvpSwitch;
