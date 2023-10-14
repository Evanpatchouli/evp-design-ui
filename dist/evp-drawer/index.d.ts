/// <reference types="react" />
import { EvpCardProps } from "../evp-card/index.v2";
import { EvpDomProps } from "../evp-dom";
export type EvpDrawerProps = {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    modal?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    position?: "left" | "right" | "top" | "bottom";
    header?: React.ReactNode;
    headerProps?: EvpDomProps;
} & EvpCardProps;
export default function EvpDrawer(props: EvpDrawerProps): import("react/jsx-runtime").JSX.Element;
