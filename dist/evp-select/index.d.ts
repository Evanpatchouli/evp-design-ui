/// <reference types="react" />
export type EvpSelectProps = {
    name?: string;
    options?: Array<{
        label: string;
        value: any;
        key: React.Key;
        disabled?: boolean;
    }>;
    children?: React.ReactNode;
    value?: any;
    placeholder?: string;
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
    rows?: number;
};
export default function EvpSelect(props: EvpSelectProps): import("react/jsx-runtime").JSX.Element;
