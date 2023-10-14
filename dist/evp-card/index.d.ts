/// <reference types="react" />
import EvpBaseProps from "../props";
export interface EvpCardProps extends EvpBaseProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    toolbarStyle?: React.CSSProperties;
    toolBar?: React.ReactNode;
    toolBarPosition?: "top" | "bottom" | "left" | "right";
    class?: string;
    contentClass?: string;
    toolBarClass?: string;
    /** Make the whole card into loading status */
    cardLoading?: boolean;
}
export default function EvpCard(props: EvpCardProps): import("react/jsx-runtime").JSX.Element;
