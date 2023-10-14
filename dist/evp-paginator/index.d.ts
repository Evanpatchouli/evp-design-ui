/// <reference types="react" />
import { ArrayStrictLengthed } from "../utils";
export interface EvpPaginatorProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    class?: string;
    id?: string;
    children?: React.ReactNode;
    currentPage?: number;
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
    /**
     * @defaultValue [number] `5`
     * @description how many tabs to show
     */
    counters?: number;
    pageSize?: number;
    total: number;
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
    /**
     * @defaultValue [string] `var(--tabColor) = Color.Black`
     * @description tab text color
     */
    tabColor?: string;
    /**
     * @defaultValue [string] `var(--tabBgColor) = Color.White`
     */
    tabBgColor?: string;
    /**
     * @defaultValue [string] `var(--tabActiveColor) = Color.White`
     * @description tab text color when active
     */
    tabActiveColor?: string;
    /**
     * @defaultValue [string] `var(--tabActiveBgColor) = Color.Blue`
     */
    tabActiveBgColor?: string;
    /**
     * @defaultValue [string] `var(--tabHoverColor) = var(--tabColor) = Color.Black`
     * @description tab text color when hover
     */
    tabHoverColor?: string;
    /**
     * @defaultValue [string] `var(--tabHoverBgColor) = var(--tabActiveBgColor) + "11" = Color.Blue11`
     */
    tabHoverBgColor?: string;
}
declare const EvpPaginator: React.FC<EvpPaginatorProps>;
export default EvpPaginator;
