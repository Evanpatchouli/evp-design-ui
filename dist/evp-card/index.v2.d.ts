/// <reference types="react" />
import { EvpDomProps } from "../evp-dom";
import EvpBaseProps from "../props";
export interface EvpCardProps extends EvpBaseProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    class?: string;
    contentClass?: string;
    lefter?: React.ReactNode;
    lefterProps?: EvpDomProps;
    righter?: React.ReactNode;
    righterProps?: EvpDomProps;
    header?: React.ReactNode;
    headerProps?: EvpDomProps;
    footer?: React.ReactNode;
    footerProps?: EvpDomProps;
    cardLoading?: boolean;
}
export default function EvpCardV2(props: EvpCardProps): import("react/jsx-runtime").JSX.Element;
