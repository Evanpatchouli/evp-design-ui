import { useRef, useState } from "react";
import type { Dispatch, Key, SetStateAction } from "react";
import { pageBounds } from "./pagination";

type Paging = {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
};

export function useRecordPage<T>(data: T[] | undefined, paging: Paging | undefined, paginator?: boolean) {
  const [localPage, setLocalPage] = useState(1);
  const total = paging?.total ?? data?.length ?? 0;
  const { page, pageSize } = pageBounds(total, paging?.pageSize, paging?.currentPage ?? localPage);
  const rows = data ?? [];
  const records = paging || paginator ? rows.slice((page - 1) * pageSize, page * pageSize) : rows;
  const setPage: Dispatch<SetStateAction<number>> = (update) => {
    const next = typeof update === "function" ? update(page) : update;
    if (paging?.currentPage === undefined) setLocalPage(next);
    paging?.setCurrentPage?.(next);
  };
  return { records, currentPage: page, pageSize, total, setCurrentPage: setPage };
}

export type RecordKey<T> = keyof T | ((record: T) => Key);

export function useRecordKey<T>(rowKey?: RecordKey<T>) {
  const [identities] = useState(() => new WeakMap<object, number>());
  const sequence = useRef(0);
  return (record: T): string => {
    const fields = record as { id?: unknown; key?: unknown };
    const key = typeof rowKey === "function" ? rowKey(record) :
      rowKey !== undefined ? record[rowKey] : fields?.key ?? fields?.id;
    if (typeof key === "string" || typeof key === "number") return typeof key + ":" + key;
    if (record === null || typeof record !== "object") return typeof record + ":" + String(record);
    let id = identities.get(record);
    if (id === undefined) {
      id = sequence.current++;
      identities.set(record, id);
    }
    return "record:" + id;
  };
}
