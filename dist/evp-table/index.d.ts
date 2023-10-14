/// <reference types="react" />
import { ThProps } from "./th";
import { TdProps } from "./td";
import { ArrayStrictLengthed } from "../utils";
export type TableItemSchema<T extends Object = any> = {
    hidden?: boolean;
    label?: any;
    labelAlign?: "left" | "center" | "right" | "char" | "justify";
    labelProps?: ThProps;
    prop?: string;
    key?: keyof T | (string & {});
    cellProps?: TdProps;
    align?: "left" | "center" | "right" | "char" | "justify";
    render?: (value: T[keyof T | (string & {})], row: T, records: T[]) => React.ReactNode;
};
export interface EvpTableProps<RecordType extends Object = any> extends React.DOMAttributes<HTMLTableElement> {
    class?: string;
    id?: string;
    children?: React.ReactNode;
    schema?: Array<TableItemSchema<RecordType>>;
    labelAlign?: "left" | "center" | "right" | "char" | "justify";
    labelProps?: ThProps;
    align?: "left" | "center" | "right" | "char" | "justify";
    cellProps?: TdProps;
    indexLabelAlign?: "left" | "center" | "right" | "char" | "justify";
    indexLabelProps?: ThProps;
    indexAlign?: "left" | "center" | "right" | "char" | "justify";
    indexProps?: TdProps;
    data?: RecordType[];
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
    caption?: React.ReactNode;
    selection?: boolean;
    index?: boolean;
    style?: React.CSSProperties;
}
export default function EvpTable({ class: className, id, children, style, schema, labelAlign, labelProps, indexLabelAlign, indexLabelProps, indexAlign, indexProps, data, align, cellProps, pagination, paginator, zebra, caption, selection, index, ...events }: EvpTableProps): import("react/jsx-runtime").JSX.Element;
