import classNames from "classnames";
import { useState } from "react";
import { useRecordKey, useRecordPage, type RecordKey } from "../evp-paginator/useRecords";
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
  render?: (value: T[keyof T], row: T, records: T[]) => React.ReactNode;
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
  rowKey?: RecordKey<RecordType>;
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
  rowKey,
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
  const { records, ...page } = useRecordPage(data, pagination, paginator);
  const recordKey = useRecordKey(rowKey);
  const [selectedKeys, setSelectedKeys] = useState(() => new Set<string>());
  const columns: TableItemSchema[] = schema?.filter((column) => !column.hidden) ??
    Object.keys(data?.[0] ?? {}).map((prop) => ({ prop, label: prop }));
  const columnKey = (column: TableItemSchema, index: number) => String(column.key ?? column.prop ?? index);

  function toggleRecord(key: string) {
    setSelectedKeys((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div style={{ width: "fit-content" }}>
      <table id={id} className={classNames("evp", "evp-table", className)}
        cellSpacing={0} cellPadding={12} {...events} style={style}>
        <caption>{caption}</caption>
        <thead>
          <Tr.Header>
            {selection && <Cell.Th align="center" />}
            {index && <Cell.Th align={indexLabelAlign ?? align} {...(indexLabelProps ?? labelProps)}>Index</Cell.Th>}
            {columns.map((column, idx) => (
              <Cell.Th key={columnKey(column, idx)} align={column.labelAlign ?? labelAlign ?? align}
                {...(column.labelProps ?? labelProps)}>{column.label}</Cell.Th>
            ))}
          </Tr.Header>
        </thead>
        <tbody className={zebra ? "zebra" : ""}>
          {records.map((row, idx) => {
            const key = recordKey(row);
            return (
              <Tr.Record key={key}>
                {selection && <Cell.Td align="center" className="checkbox">
                  <input type="checkbox" style={{ cursor: "pointer" }} checked={selectedKeys.has(key)}
                    aria-label={`Select row ${(page.currentPage - 1) * page.pageSize + idx + 1}`} onChange={() => toggleRecord(key)} />
                </Cell.Td>}
                {index && <Cell.Td align={indexAlign ?? align} {...(indexProps ?? cellProps)}
                  className="evp-table-column-idx">{idx + 1}</Cell.Td>}
                {columns.map((column, colIndex) => {
                  const value = column.prop === undefined ? undefined : row[column.prop];
                  return (
                    <Cell.Td key={columnKey(column, colIndex)} align={column.align ?? align}
                      {...(column.cellProps ?? cellProps)}>
                      {column.render ? column.render(value, row, records) : value}
                    </Cell.Td>
                  );
                })}
              </Tr.Record>
            );
          })}
        </tbody>
        <tfoot />
      </table>
      {paginator && (
        <EvpRow w="100%" justifyContent="flex-end">
          <Paginator {...pagination} {...page} />
        </EvpRow>
      )}
      {children}
    </div>
  );
}
