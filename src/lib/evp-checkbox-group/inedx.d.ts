/// <reference types="react" />
export type EvpRadioRule = {
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
export type EvpCheckBoxGroupProps = {
    label?: React.ReactNode;
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Default is false */
    labelColon?: boolean | React.ReactNode;
    /** Whether to show a required `*` character, this is `only` a character not a validation! */
    required?: boolean;
    name?: string;
    placeholder?: string;
    /** defaultValue assigned to input box*/
    default?: string | number;
    /** Reactive value assigned to input box */
    value?: string | number;
    hint?: {
        text?: string;
        color?: string;
    };
    children?: React.ReactNode;
    rule?: EvpRadioRule;
    warnReader?: {
        ref?: Readonly<string>;
        setWarn: React.Dispatch<React.SetStateAction<string>>;
    };
    resultIcon?: boolean;
    class?: string;
};
export default function EvpCheckBoxGroup(props: EvpCheckBoxGroupProps): import("react/jsx-runtime").JSX.Element;
