import classNames from "classnames";
import Tr from "./tr";
import Cell from "./cell";
import { ThProps } from "./th";
import { TdProps } from "./td";
import Paginator from "../evp-paginator";
import EvpRow from "../evp-row";
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
  // @ts-ignore
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

export default function EvpTable({
  class: className,
  id,
  children,
  style,
  schema,
  labelAlign,
  labelProps,
  indexLabelAlign,
  indexLabelProps,
  indexAlign,
  indexProps,
  data,
  align,
  cellProps,
  pagination,
  paginator,
  zebra,
  caption,
  selection,
  index,
  ...events
}: EvpTableProps) {
  return (
    <div style={{ width: "fit-content" }}>
      <table
        className={classNames("evp", "evp-table", className)}
        cellSpacing={0}
        cellPadding={12}
        {...events}
        style={style}
      >
        <caption>{caption}</caption>
        <thead>
          <Tr.Header>
            <Cell.Th align="center" hidden={!selection}>
              {""}
            </Cell.Th>
            <Cell.Th hidden={!index} align={indexLabelAlign ?? align} {...(indexLabelProps ?? labelProps)}>
              Index
            </Cell.Th>
            {schema
              ? schema
                  ?.filter((item) => !item.hidden)
                  .map((item) => (
                    <Cell.Th align={item.labelAlign ?? labelAlign ?? align} {...(item.labelProps ?? labelProps)}>
                      {item.label}
                    </Cell.Th>
                  ))
              : data?.[0]
              ? Object.keys(data?.[0]).map((key) => (
                  <Cell.Th align={labelAlign ?? align} {...labelProps}>
                    {key}
                  </Cell.Th>
                ))
              : void 0}
          </Tr.Header>
        </thead>
        <tbody className={zebra ? "zebra" : ""}>
          {data
            ?.slice(
              ((pagination?.currentPage ?? 1) - 1) * (pagination?.pageSize ?? data.length),
              pagination?.currentPage && pagination?.pageSize ? pagination?.currentPage * pagination?.pageSize : void 0
            )
            .map((row, idx, records) => (
              <Tr.Record>
                <Cell.Td align="center" hidden={!selection} className={"checkbox"}>
                  <input type="checkbox" style={{ cursor: "pointer" }} />
                </Cell.Td>
                <Cell.Td
                  hidden={!index}
                  align={indexAlign ?? align}
                  {...(indexProps ?? cellProps)}
                  className={"evp-table-column-idx"}
                >
                  {++idx}
                </Cell.Td>
                {schema
                  ? schema?.map((col) => (
                      <Cell.Td align={col.align ?? align} {...(col.cellProps ?? cellProps)}>
                        {col.render ? col.render(row[col.prop as string], row, records) : row[col.prop as string]}
                      </Cell.Td>
                    ))
                  : data?.[0]
                  ? Object.values(row).map((val: any) => (
                      <Cell.Td align={align} {...cellProps}>
                        {val}
                      </Cell.Td>
                    ))
                  : void 0}
              </Tr.Record>
            ))}
        </tbody>
        <tfoot></tfoot>
      </table>
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
}
