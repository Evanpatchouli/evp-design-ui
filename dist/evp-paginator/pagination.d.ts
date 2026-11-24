export declare function positiveInteger(value: number | undefined, fallback: number): number;
export declare function pageBounds(total: number, size?: number, current?: number): {
    pageSize: number;
    pageCount: number;
    page: number;
};
export declare function visiblePages(page: number, pageCount: number, counters?: number): number[];
