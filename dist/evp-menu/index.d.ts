import React from "react";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import { EvpWRule, EvpHRule } from "../typings";
import { type MenuCtx as IMenuCtx } from "./context";
export interface EvpMenuProps extends EvpBaseProps {
    /** The following contents of this menu, usually to be of `EvpMenuItem` */
    children?: React.ReactNode;
    /** Title text could be a string or JSX.Element */
    title?: React.ReactNode;
    submenu?: boolean;
    itemIndent?: boolean | number | string;
    /** Default width is 260px */
    w?: EvpWRule;
    /** Default height is `100%`, the unit is number when assigned with a number*/
    h?: EvpHRule;
    /** The EvpIcon by the left side with default redius 18 rather than the default 24 redius of EvpIcon */
    icon?: IconType;
    /** route-link to where */
    link?: string | {
        path?: string;
        hash?: boolean;
    };
    hash?: boolean;
    /** Unique key of menu */
    keyId?: any;
    multiSelected?: boolean;
    multiOpened?: boolean;
    menuRef?: React.MutableRefObject<IMenuCtx>;
    itemColor?: {
        unselected?: {
            bg?: string;
            text?: string;
        };
        selected?: {
            bg?: string;
            text?: string;
        };
        hover?: {
            bg?: string;
            text?: string;
        };
        selectedHover?: {
            bg?: string;
            text?: string;
        };
        click?: {
            bg?: string;
            text?: string;
        };
    };
    /** Dependent extra onOpenHandler */
    onOpen?: <R = any>(key: string) => R;
    /** Dependent extra onCloseHandler */
    onClose?: <R = any>(key: string) => R;
    globalOnOpen?: <R = any>(keys: string[]) => R;
    globalOnClose?: <R = any>(keys: string[]) => R;
    globalOnSelect?: <R = any>(keys: string[]) => R;
    globalOnUnselect?: <R = any>(keys: string[]) => R;
}
export default function EvpMenu(props: EvpMenuProps): import("react/jsx-runtime").JSX.Element;
