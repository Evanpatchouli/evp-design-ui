import classNames from "classnames";

export type TableItemSchema<T extends Object = any> = {
  label?: any;
  prop?: string;
  key?: keyof T | (string & {});
  hidden?: boolean;
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
          {props.schema
            ? props.schema?.filter((item) => !item.hidden).map((item) => <th>{item.label}</th>)
            : props.data?.[0]
            ? Object.keys(props.data?.[0]).map((key) => <th>{key}</th>)
            : void 0}
        </tr>
      </thead>
      <tbody className={props.zebra ? "zebra" : ""}>
        {props.data?.map((row, idx, records) => (
          <tr className={classNames("evp-table-column-record-row")}>
            <td hidden={!props.selection} className={classNames("evp-table-td", "checkbox")}>
              <input type="checkbox" style={{ cursor: "pointer" }} />
            </td>
            <td className={classNames("evp-table-td", "evp-table-column-idx")}>{++idx} </td>
            {props.schema
              ? props.schema?.map((col) => (
                  <td>{col.render ? col.render(row[col.prop as string], row, records) : row[col.prop as string]}</td>
                ))
              : props.data?.[0]
              ? Object.values(row).map((val: any) => <td>{val}</td>)
              : void 0}
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}
