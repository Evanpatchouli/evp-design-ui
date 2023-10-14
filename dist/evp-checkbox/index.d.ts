/// <reference types="react" />
export type EvpCheckBoxRule = {
    /** default color is "red" */
    color?: string;
    /** **required:** If required.on is `false`, all the rules **will not work!**. `on` means to enable this rule, `val` means whether the value input can be empty, `msg` means the warnning message */
    required?: {
        on: boolean;
        val: boolean;
        msg?: string;
    };
    /**
     * When to trigger the rule, default is `onEnter`
     */
    trigger?: "onChange" | "onEnter" | "onSubmit" | "Never";
    /** **Smart Trigger:** default is `true`. Initially, it will keep to be `onChange` `until the value is valid`,
     * and then the trigger will be `temporarily` set to the `props.rule.trigger`,
     * and `at next time` when it get invalid results under `props.rule.trigger` ,
     * it will reset the trigger to `onChange` until is valid*/
    smartTrigger?: boolean;
    custom?: (value: string) => string | undefined | null | void;
};
export type EvpCheckBoxProps = {
    label?: React.ReactNode;
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    name?: string;
    placeholder?: string;
    defaultChecked?: boolean;
    /** Reactive value assigned to input box */
    value: string;
    hint?: {
        text?: string;
        color?: string;
    };
    children?: React.ReactNode;
    rule?: EvpCheckBoxRule;
    warnReader?: {
        ref?: Readonly<string>;
        setWarn: React.Dispatch<React.SetStateAction<string>>;
    };
    resultIcon?: boolean;
    radius?: number;
    disabled?: boolean;
};
export default function EvpCheckBox(props: EvpCheckBoxProps): import("react/jsx-runtime").JSX.Element;
