import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpCode from "@/components/code";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import DemoCard from "@/components/demo-card";
import Example from "./demos/table/example";
import Render from "./demos/table/render";
import WithoutSchema from "./demos/table/without-schema";
import Zebra from "./demos/table/zebra";
import Pagination from "./demos/table/pagination";
import exampleSource from "./demos/table/example.tsx?source";
import renderSource from "./demos/table/render.tsx?source";
import withoutSchemaSource from "./demos/table/without-schema.tsx?source";
import zebraSource from "./demos/table/zebra.tsx?source";
import paginationSource from "./demos/table/pagination.tsx?source";

export default function TableView() {
  const next = { route: "evp-paginator", name: "Paginator" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="preview-container">
      <Md>
        {`
# Table

Table is a UI component that displays data in a tabular format, typically with rows and columns. . 
It receives a schema to define the columns to display and the data to show the records.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Table } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <DemoCard source={exampleSource}><Example /></DemoCard>
      <Md>
        {`
## Examples

Here are some examples about EvpTable.

EvpTable recieve a schema to know which columns in table are needed to show, and recieve a data to show the records.

### render

Use a column's \`render\` function to display an icon or add action buttons.
`}
      </Md>
      <DemoCard source={renderSource}><Render /></DemoCard>
      <Md>
        {`
### without schema

If you want to use record feild key as col title, you can use Table directly without schema.
`}
      </Md>
      <DemoCard source={withoutSchemaSource}><WithoutSchema /></DemoCard>
      <Md>
        {`
### zebra

You can set \`zebra\` to show zebra-striped table.
`}
      </Md>
      <DemoCard source={zebraSource}><Zebra /></DemoCard>
      <Md>
        {`
### pagination

Set \`pagination={{ pageSize: 10 }}\` to display ten records per page. The first page is 1.
Set \`paginator\` to show the page controls. When pagination is disabled, Table displays every record.
`}
      </Md>
      <DemoCard source={paginationSource}><Pagination /></DemoCard>
      <Md>
        {`
## Api

★ container based on <table>  
★ row based on <tr>  
★ cell based on <td>

**Table Apis:**

- Use \`rowKey="id"\` or a function such as \`rowKey={row => row.email}\` to identify each record across
  sorting, pagination and replacement data. Keys must be unique. By default Table uses the record's
  \`key\`, then its \`id\`, then its object identity.
- Set a column's \`hidden\` to omit its header and cells. Table calls the column's
  \`render(value, row, records)\` only for visible columns. The third argument contains the current page.

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
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
  rowKey?: keyof RecordType | ((row: RecordType) => React.Key);
  pagination?: {
    pageSize?: number;
    pageSizes?: number[];
    currentPage?: number;
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
    /**
     * @defaultValue [number] \`5\`
     * @description how many tabs to show
     */
    counters?: number;
    total?: number;
    /**
     * @defaultValue [boolean] \`true\`
     * @description whether to show total count of items
     */
    showTotal?: boolean;
    /**
     * @defaultValue [boolean] \`false\`
     * @description whether to show quick jumper
     */
    showQuickJumper?: boolean;
    /**
     * @defaultValue [boolean] \`false\`
     * @description whether to show size changer
     */
    showSizeChanger?: boolean;
    /**
     * @defaultValue [boolean] \`true\`
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
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.route ? `components/${next.route}` : ""}`}
        text={`★ Next Doc Evp${next.name} >`}
      />
    </div>
  );
}
