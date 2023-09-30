import classNames from "classnames";

export type TableItemSchema<T extends Object = any> = {
  label?: any;
  prop?: string;
  key?: keyof T | (string & {});
  // @ts-ignore
  render?: (value: T[keyof T | (string & {})], row: T, records: T[]) => React.ReactNode;
};

export type EvpTableProps<RecordType extends Object = any> = {
  children?: React.ReactNode;
  schema?: Array<TableItemSchema<RecordType>>;
  data?: RecordType[];
  pagination?: {
    pageSize?: number;
    pageSizes?: number[];
    currentPage?: number;
    total?: number;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    showQuickJumper?: boolean;
    showSizeChanger?: boolean;
    onChange?: (page: number, pageSize: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
  };
  zebra?: boolean;
  caption?: React.ReactNode;
  selection?: boolean;
};

export default function EvpTable({ pagination, ...props }: EvpTableProps) {
  return (
    <table className="evp evp-table" cellSpacing={0} cellPadding={12}>
      <caption>{props.caption}</caption>
      <thead>
        <tr className={classNames("evp-table-column-headers-row")}>
          <th hidden={!props.selection}>{""}</th>
          <th>Index</th>
          {props.schema?.map((item) => (
            <th>{item.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data?.map((row, idx, records) => (
          <tr className={classNames("evp-table-column-record-row")}>
            <td hidden={!props.selection} className={classNames("evp-table-td", "checkbox")}>
              <input type="checkbox" style={{ cursor: "pointer" }} />
            </td>
            <td className={classNames("evp-table-td", "evp-table-column-idx")}>{++idx} </td>
            {props.schema?.map((col) => (
              <td>{col.render ? col.render(row[col.prop as string], row, records) : row[col.prop as string]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
