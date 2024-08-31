import { EvpDialogProps as DialogProps } from "../evp-dialog";
import React from "react";
declare const Alert: ({ content, onClose, onOpen, class: classname, ...props }: {
    content?: React.ReactNode;
} & {
    children?: React.ReactNode;
    defaultOpen?: boolean | undefined;
    open?: boolean | undefined;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
    onClose?: ((e?: Event | undefined) => void) | undefined;
    onOpen?: ((e?: Event | undefined) => void) | undefined;
    cancelProps?: import("..").EvpButtonProps | undefined;
    confirmProps?: import("..").EvpButtonProps | undefined;
    loading?: boolean | undefined;
    blur?: string | number | boolean | undefined;
} & import("..").EvpCardProps) => import("react/jsx-runtime").JSX.Element;
export type AlertOptions = DialogProps;
export default Alert;
