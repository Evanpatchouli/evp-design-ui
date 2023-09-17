import React from "react";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import { EvpWRule, EvpHRule } from "../typings";
export interface EvpMenuProps extends EvpBaseProps {
    /** The following contents of this menu, usually to be of `EvpMenuItem` */
    children?: React.ReactNode;
    /** Title text could be a string or JSX.Element */
    title?: string | JSX.Element;
    submenu?: boolean;
    itemIndent?: boolean | number | string;
    /** Default width is 260px */
    w?: EvpWRule;
    /** Default height is `100%`, the unit is number when assigned with a number*/
    h?: EvpHRule;
    /** The EvpIcon by the left side with default redius 18 rather than the default 24 redius of EvpIcon */
    icon?: IconType;
    /** route-link to where */
    link?: string;
}
export default function EvpMenu(props: EvpMenuProps): import("react/jsx-runtime").JSX.Element;
