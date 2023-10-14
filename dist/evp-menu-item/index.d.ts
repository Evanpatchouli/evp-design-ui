import React from "react";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
export interface EvpMenuItemProps extends EvpBaseProps {
    children?: React.ReactNode;
    title?: string | JSX.Element;
    icon?: IconType;
    /** route-link to where */
    link?: string | {
        path?: string;
        hash?: boolean;
    };
    hash?: boolean;
    keyId?: any;
}
export default function EvpMenuItem(props: EvpMenuItemProps): import("react/jsx-runtime").JSX.Element;
