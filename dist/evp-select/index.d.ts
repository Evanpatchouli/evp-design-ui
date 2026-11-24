/// <reference types="react" />
type SelectOption = {
    label: string;
    value: any;
    key: React.Key;
    disabled?: boolean;
};
export type EvpSelectProps = {
    name?: string;
    options?: SelectOption[];
    children?: React.ReactNode;
    value?: any;
    defaultValue?: any;
    onChange?: (value: any, option: SelectOption) => void;
    placeholder?: string;
    label?: React.ReactNode;
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    labelColon?: boolean | React.ReactNode;
    required?: boolean;
    rows?: number;
};
export default function EvpSelect(props: EvpSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
