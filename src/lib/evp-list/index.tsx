import React from "react";
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
        {data
          ?.slice(
            ((pagination?.currentPage ?? 1) - 1) * (pagination?.pageSize ?? data.length),
            pagination?.currentPage && pagination?.pageSize ? pagination?.currentPage * pagination?.pageSize : void 0
          )
          .map((item, idx, items) => (
            <>
              {/* <Cell.Td align="center" hidden={!selection} className={"checkbox"}>
                <input type="checkbox" style={{ cursor: "pointer" }} />
              </Cell.Td>
              <Cell.Td
                hidden={!index}
                align={indexAlign ?? align}
                {...(indexProps ?? cellProps)}
                className={"evp-table-column-idx"}
              >
                {++idx}
              </Cell.Td> */}
              {schema ? schema.render?.(item, idx, items) : item.toString()}
            </>
          ))}
      </div>
      {paginator ? (
        <EvpRow w={"100%"} justifyContent="flex-end">
          <Paginator
            {...{
              ...pagination,
              total: pagination?.total ?? data?.length ?? 0,
            }}
          />
        </EvpRow>
      ) : (
        void 0
      )}
      {children}
    </div>
  );
};

export default EvpList;
