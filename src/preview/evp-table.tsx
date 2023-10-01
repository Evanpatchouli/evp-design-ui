import { Card, Row } from "@/lib";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, Code, Table } from "evp-design-ui";
import { useEffect, useState } from "react";
import Example from "./demos/table/example";
import Render from "./demos/table/render";
import WithoutSchema from "./demos/table/without-schema";

export default function TableView() {
  const next = { route: "", name: "" };
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
# EvpCode

EvpTable is a UI component that displays data in a tabular format, typically with rows and columns. . 
It receives a schema to define the columns to display and the data to show the records.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpCode } from 'evp-design-ui'
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
## Api

★ container based on <table>  
★ row based on <tr>  
★ cell based on <td>

**EvpCode Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
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
