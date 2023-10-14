/// <reference types="react" />
import type EvpBaseProps from "../props";
export interface EvpBadgeProps extends EvpBaseProps {
    /** badge dot content should be a number or string*/
    content?: string | number;
    /** max limit of number content */
    max?: number;
    /** dot size */
    size?: "sm" | "md" | "lg" | number;
    /** whether to show badge dot */
    show?: boolean;
    /** whether to show badge dot when number content is 0, default is false */
    showZero?: boolean;
    /** whether to show exactly badge content, default is true */
    invisble?: boolean;
    children?: React.ReactNode;
    /** component className */
    class?: string;
    /** component CSS style */
    style?: React.CSSProperties;
    /** dot className */
    dotClass?: string;
    /** dot CSS style */
    dotStyle?: React.CSSProperties;
    /** wrap children with a new div? Default is true*/
    childrenContainer?: boolean;
    /** content container className */
    childrenClass?: string;
    /** content container CSS style */
    childrenStyle?: React.CSSProperties;
}
declare const EvpBadge: React.FC<EvpBadgeProps>;
export default EvpBadge;
