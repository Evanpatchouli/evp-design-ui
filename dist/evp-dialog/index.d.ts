import React from "react";
import { EvpCardProps } from "../evp-card/index.v2";
import { EvpButtonProps } from "../evp-button";
declare const DialogCloseEventExample: Event;
type DialogCloseEvent = typeof DialogCloseEventExample;
declare const DialogOpenEventExample: Event;
type DialogOpenEvent = typeof DialogOpenEventExample;
export type EvpDialogProps = {
    children?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    onClose?: (e?: DialogCloseEvent) => void;
    onOpen?: (e?: DialogOpenEvent) => void;
    cancelProps?: EvpButtonProps;
    confirmProps?: EvpButtonProps;
    /**
     * **This is applied to content rather than the whole card**
     */
    loading?: boolean;
    blur?: boolean | number | string;
} & EvpCardProps;
export default function EvpDialog(props: EvpDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
