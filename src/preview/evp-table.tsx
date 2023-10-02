import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect, useState } from "react";
import Example from "./demos/table/example";
import Render from "./demos/table/render";
import WithoutSchema from "./demos/table/without-schema";
import Zebra from "./demos/table/zebra";
import Pagination from "./demos/table/pagination";

export default function TableView() {
  const next = { route: "evp-paginator", name: "Paginator" };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };

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
      <Example />
      <Md>
        {`
## Examples

Here are some examples about EvpTable.

EvpTable recieve a schema to know which columns in table are needed to show, and recieve a data to show the records.
`}
      </Md>
      <Render />
      <Md>
        {`
### without schema

If you want to use record feild key as col title, you can use Table directly without schema.
`}
      </Md>
      <WithoutSchema />
      <Md>
        {`
### zebra

You can set \`zebra\` to show zebra-striped table.
`}
      </Md>
      <Zebra />
      <Md>
        {`
### pagination

You can set \`pagination\` to control pagination of table records.  
If you want to show the provided paginator in Table, just set \`paginator\` to \`true\`.
`}
      </Md>
      <Pagination />
      <Md>
        {`
## Api

★ container based on <table>  
★ row based on <tr>  
★ cell based on <td>

**Table Apis:**

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
