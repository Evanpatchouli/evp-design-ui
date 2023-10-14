/// <reference types="react" />
import { type EvpDisplayRule } from "../typings";
declare const EvpTag: (props: EvpTagProps) => import("react/jsx-runtime").JSX.Element;
export default EvpTag;
export interface EvpTagProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The tag's text.
     */
    children?: React.ReactNode;
    text?: string;
    class?: string;
    theme?: "white" | "primary" | "success" | "warning" | "danger" | "info" | "dark";
    plain?: boolean;
    deep?: boolean;
    light?: boolean;
    /** Default is `md` */
    size?: "sm" | "md" | "lg";
    round?: boolean;
    /** the display of evp-tag */
    display?: EvpDisplayRule;
}
