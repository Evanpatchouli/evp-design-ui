import EvpBaseProps from "../props";
import React from "react";
export type EvpDropletProps = {
    /**
     * @defaultValue `61% 39% 57% 43% / 46% 67% 33% 54%;`
     */
    borderRadius?: string;
    wave?: boolean;
    lightSpot?: boolean | number;
    lightSpotSize?: number | {
        min?: number;
        max?: number;
    };
} & EvpBaseProps;
declare const EvpDroplet: React.FC<EvpDropletProps>;
export default EvpDroplet;
