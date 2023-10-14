/// <reference types="react" />
import EvpBaseProps from "../props";
export interface EvpBreadCrumbProps extends EvpBaseProps {
    routes?: {
        title: string;
        path?: string | {
            path?: string;
            hash?: boolean;
        };
        hash?: boolean;
        meta?: any;
    }[];
    itemClick?: <T extends Record<string, unknown>>(e?: React.MouseEvent<HTMLSpanElement, MouseEvent>, route?: {
        title: string;
        path?: string | {
            path?: string;
            hash?: boolean;
        };
        hash?: boolean;
        meta?: T;
    }) => void;
    fontSize?: string;
    class?: string;
    style?: React.CSSProperties;
}
declare const EvpBreadCrumb: React.FC<EvpBreadCrumbProps>;
export default EvpBreadCrumb;
