import React from "react";
import EvpBaseProps from "../props";
export type EvpRateProps = {
    class?: string;
    /** 星星数量 */
    count?: number;
    value?: number;
    setValue?: (value: number) => void;
    defaultValue?: number;
    onStarClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, order?: number) => void;
    onChange?: (order?: number) => void;
    starColor?: {
        unselected?: string;
        unselectedOpacity?: string | number;
        selected?: string;
        selectedOpacity?: string | number;
    };
} & EvpBaseProps;
declare const EvpRate: React.FC<EvpRateProps>;
export default EvpRate;
