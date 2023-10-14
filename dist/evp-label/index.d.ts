/// <reference types="react" />
export type EvpLabelProps = {
    /** label should be a string or EvpIcon */
    label?: string | JSX.Element;
    /** **Label font-Size:** default value is 14px */
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    labelPosition?: "top" | "left";
    /** Default is false */
    labelColon?: boolean | React.ReactNode;
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    children?: React.ReactNode;
    containerClass?: string;
    containerStyle?: React.CSSProperties;
    class?: string;
    style?: React.CSSProperties;
};
export default function EvpLabel(props: EvpLabelProps): import("react/jsx-runtime").JSX.Element;
