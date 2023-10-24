import React from "react";
import { ArrayStrictLengthed } from "../typings";
export type ListItemSchema<T extends Object = any> = {
    key?: keyof T | (string & {});
    render?: (item: T, index: number, lists: T[]) => React.ReactNode;
};
export type EvpListProps<ItemType extends Object = any> = {
    class?: string;
    id?: string;
    children?: React.ReactNode;
    schema?: ListItemSchema<ItemType>;
    data?: ItemType[];
    pagination?: {
        pageSize?: number;
        pageSizes?: number[];
        currentPage?: number;
        setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
        /**
         * @defaultValue [number] `5`
         * @description how many tabs to show
         */
        counters?: number;
        total?: number;
        /**
         * @defaultValue [boolean] `true`
         * @description whether to show total count of items
         */
        showTotal?: boolean;
        /**
         * @defaultValue [boolean] `false`
         * @description whether to show quick jumper
         */
        showQuickJumper?: boolean;
        /**
         * @defaultValue [boolean] `false`
         * @description whether to show size changer
         */
        showSizeChanger?: boolean;
        /**
         * @defaultValue [boolean] `true`
         * @description whether to show taber
         */
        showTaber?: boolean;
        onChange?: (page: number, pageSize: number) => void;
        onShowSizeChange?: (current: number, size: number) => void;
        onPageChange?: (current: number, pageSize: number) => void;
        quene?: ArrayStrictLengthed<"total" | "sizer" | "taber" | "jumper", 4>;
    };
    paginator?: boolean;
    zebra?: boolean;
    style?: React.CSSProperties;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
declare const EvpList: React.FC<EvpListProps>;
export default EvpList;
