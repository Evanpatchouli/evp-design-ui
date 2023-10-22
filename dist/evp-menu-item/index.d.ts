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
    /** Default will set linkUrl as uniqueKey if exists, if not nether the keyId, will generate a nanoid */
    keyId?: any;
    unselectOnReClick?: boolean;
    /** Dependent extra onSelectHandler */
    onSelect?: <R = any>(key: string) => R;
    /** Dependent extra onUnselectHandler */
    onUnselect?: <R = any>(key: string) => R;
}
export default function EvpMenuItem(props: EvpMenuItemProps): import("react/jsx-runtime").JSX.Element;
