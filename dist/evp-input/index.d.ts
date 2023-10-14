import React from "react";
import { BaseDomProps } from "../evp-dom";
export type EvpInputRule = {
    /** default color is "red" */
    color?: string;
    /** **required:** If required.on is `false`, all the rules **will not work!**. `on` means to enable this rule, `val` means whether the value input can be empty, `msg` means the warnning message */
    required?: {
        on: boolean;
        val: boolean;
        msg?: string;
    };
    /** default is `string` */
    type?: {
        on: boolean;
        val: "text" | "number";
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
    /** **MinLength:** `on` means to enable this rule, `val` means the minLength number, `msg` means the warnning message */
    min?: {
        on: boolean;
        val: number;
        msg?: string;
    };
    /** **MaxLength:** `on` means to enable this rule, `val` means the maxLength number, `msg` means the warnning message */
    max?: {
        on: boolean;
        val: number;
        msg?: string;
    };
    /** **RegExp:** `on` means to enable this rule, `val` means the RegExp, `msg` means the warnning message */
    reg?: {
        on: boolean;
        val: RegExp;
        msg?: string;
    };
    /** **mustHave:** `on` means to enable this rule, `val` means the slice, `msg` means the warnning message */
    mustHave?: Array<{
        on: boolean;
        val: any;
        msg?: string;
    }>;
    /** **cannotHave:** `on` means to enable this rule, `val` means the slice, `msg` means the warnning message */
    cannotHave?: Array<{
        on: boolean;
        val: any;
        msg?: string;
    }>;
    /** Customize the rule of validation with a function with warning message returned, if valid the message shoule be "".
     * @param value the input value
     */
    custom?: (value: string) => string | undefined | null | void;
};
export interface EvpInputProps extends BaseDomProps {
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
    type?: "text";
    /** defaultValue assigned to input box*/
    default?: string;
    /** Reactive value assigned to input box */
    value?: string;
    /** The rule to validate the value input */
    rule?: EvpInputRule;
    /** wDefault is false, hether to show the validate result icon on right of the input box */
    resultIcon?: boolean;
    /** Default Hint message */
    hint?: {
        text?: string;
        color?: string;
    };
    warnReader?: {
        ref?: Readonly<string>;
        setWarn: React.Dispatch<React.SetStateAction<string>>;
    };
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** The triggered EventHandler when the key `Enter` down */
    onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}
export default function EvpInput(props: EvpInputProps): import("react/jsx-runtime").JSX.Element;
