/// <reference types="react" />
export type EvpRadioProps = {
    label?: React.ReactNode;
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    name?: string;
    value: string | number | undefined;
    defaultChecked?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    class?: string;
};
export default function EvpRadio(props: EvpRadioProps): import("react/jsx-runtime").JSX.Element;
