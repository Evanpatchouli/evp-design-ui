/// <reference types="react" />
import { ArrayLengthed } from "../utils";
export type EvpSliderProps = {
    name: string;
    class?: string;
    label?: string | JSX.Element;
    /** **Label font-Size:** default value is 14px */
    labelSize?: string;
    labelWidth?: number | string;
    labelAlign?: "left" | "center" | "right";
    /** Default is false */
    labelColon?: boolean | React.ReactNode;
    /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
    required?: boolean;
    value?: number;
    /** default is 0 */
    defaultValue?: number;
    /** start (default 0) to end (default 100) */
    range?: ArrayLengthed<number | undefined, 2>;
    /** min limit, default is 0 */
    min?: number;
    /** max limit, default is max */
    max?: number;
    /** value precision, default is 0 */
    precision?: number;
    /** max width (px) or slider bar */
    width?: number;
    /** whether to show etc, default is true */
    showEtc?: boolean;
    style?: React.CSSProperties;
    /**
     * @Todo unstart now
     * @Exterminal unsupport now */
    step?: number;
};
export default function EvpSlider(props: EvpSliderProps): import("react/jsx-runtime").JSX.Element;
