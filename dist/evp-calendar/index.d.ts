/// <reference types="react" />
import { CalendarProps as CalendarDateProps } from "react-calendar";
import EvpBaseProps from "../props";
type LooseValue = CalendarDateProps["value"];
export type EvpCalendarProps = Omit<CalendarDateProps & React.RefAttributes<unknown> & {
    class?: string;
    style?: React.CSSProperties;
    containerProps?: EvpBaseProps;
    readonly?: boolean;
    time?: any;
    timeFormat?: string;
    timeClass?: string;
    dateClass?: string;
    timeAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
    timeStyle?: React.CSSProperties;
    /**
     * @description show time in calendar
     * @defaultValue `true`
     */
    showTime?: boolean;
    /**
     * @type {Date | null}
     */
    date?: LooseValue;
    setDate?: (value: LooseValue, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}, "value" | "onChange" | "className">;
export default function Calendar(props: EvpCalendarProps): import("react/jsx-runtime").JSX.Element;
export {};
