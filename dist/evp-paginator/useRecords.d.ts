import type { Dispatch, Key, SetStateAction } from "react";
type Paging = {
    total?: number;
    pageSize?: number;
    currentPage?: number;
    setCurrentPage?: Dispatch<SetStateAction<number>>;
};
export declare function useRecordPage<T>(data: T[] | undefined, paging: Paging | undefined, paginator?: boolean): {
    records: T[];
    currentPage: number;
    pageSize: number;
    total: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
};
export type RecordKey<T> = keyof T | ((record: T) => Key);
export declare function useRecordKey<T>(rowKey?: RecordKey<T>): (record: T) => string;
export {};
