import { EvpButtonProps } from "../evp-button";
import React from "react";
export type EvpGhostButtonGroupProps = {
    items?: EvpButtonProps[];
    direction?: "up" | "down" | "left" | "right";
    gap?: number;
    /** Only rotate the buttons group expaned. String should format `${number}deg`.
     * If you really want to only rotate the buttons group, you can first rotate the whole component, then rotate the content back.
     * @experimental unrecommended
     */
    groupRotate?: string | number;
    reverse?: boolean;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & EvpButtonProps;
declare const EvpGhostButtonGroup: React.FC<EvpGhostButtonGroupProps>;
export default EvpGhostButtonGroup;
