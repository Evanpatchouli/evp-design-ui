import React from "react";
import { useRecordKey, useRecordPage } from "../evp-paginator/useRecords";
import { ArrayStrictLengthed } from "../typings";
import EvpRow from "../evp-row";
import Paginator from "../evp-paginator";

export type ListItemSchema<T extends Object = any> = {
  // prop?: string;
  key?: keyof T | (string & {});
  // @ts-ignore
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

const EvpList: React.FC<EvpListProps> = ({
  class: className,
  id,
  children,
  style,
  schema,
  data,
  pagination,
  paginator,
  zebra,
  ...props
}) => {
  const { records, ...page } = useRecordPage(data, pagination, paginator);
  const recordKey = useRecordKey<(typeof records)[number]>(schema?.key);
  return (
    <div
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <div
        className={`evp evp-list ${className ?? ""}`.trim()}
        id={id}
        style={{
          ...style,
        }}
        {...props}
      >
        {records.map((item, idx) => (
          <React.Fragment key={recordKey(item)}>
            {schema ? schema.render?.(item, idx, records) : item.toString()}
          </React.Fragment>
        ))}
      </div>
      {paginator && (
        <EvpRow w="100%" justifyContent="flex-end">
          <Paginator {...pagination} {...page} />
        </EvpRow>
      )}
      {children}
    </div>
  );
};

export default EvpList;
