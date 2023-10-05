import Api from "@/components/api";

export default function PaginatorApi() {
  return (
    <Api
      widths={{
        type: 200,
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "Component className",
        },
        {
          property: "id",
          type: "string",
          default: "undefined",
          desc: "Component id",
        },
        {
          property: "currentPage",
          type: "number",
          default: "1",
          desc: "Current page",
        },
        {
          property: "setCurrentPage",
          type: "Function",
          default: "undefined",
          desc: "Set current page function",
        },
        {
          property: "counters",
          type: "number",
          default: "5",
          desc: "How many tabs to show",
        },
        {
          property: "pageSize",
          type: "number",
          default: "10",
          desc: "Page size",
        },
        {
          property: "total",
          type: "number",
          default: "0",
          desc: "Total count of items",
        },
        {
          property: "showTotal",
          type: "boolean",
          default: "false",
          desc: "Whether to show total",
        },
        // {
        //   property: "pageSizeOptions",
        //   type: "Array<number | string>",
        //   default: "[10, 20, 30, 40]",
        //   desc: "Page size options",
        // },
        {
          property: "showQucikJumper",
          type: "boolean",
          default: "false",
          desc: "Whether to show quick jumper",
        },
        {
          property: "showSizeChanger",
          type: "boolean",
          default: "false",
          desc: "Whether to show page size changer",
        },
        {
          property: "showTaber",
          type: "boolean",
          default: "true",
          desc: "Whether to show taber",
        },
        {
          property: "onChange",
          type: "(page: number, pageSize: number) => void",
          default: "undefined",
          desc: "Callback when page changed",
        },
        {
          property: "onShowSizeChange",
          type: "(current: number, size: number) => void",
          default: "undefined",
          desc: "Callback when page size changed",
        },
        {
          property: "onPageChange",
          type: "(current: number, pageSize: number) => void",
          default: "undefined",
          desc: "Callback when page changed",
        },
        {
          property: "quene",
          type: "ArrayStrictLengthed<'total' | 'sizer' | 'taber' | 'jumper', 4>",
          default: "['total', 'sizer', 'taber', 'jumper']",
          desc: "The quene of paginator",
        },
        {
          property: "tabColor",
          type: "string",
          default: "var(--tabColor) = Color.Black",
          desc: "Tab text color",
        },
        {
          property: "tabBgColor",
          type: "string",
          default: "var(--tabBgColor) = Color.White",
          desc: "Tab background color",
        },
        {
          property: "tabActiveColor",
          type: "string",
          default: "var(--tabActiveColor) = Color.White",
          desc: "Tab text color when active",
        },
        {
          property: "tabActiveBgColor",
          type: "string",
          default: "var(--tabActiveBgColor) = Color.Blue",
          desc: "Tab background color when active",
        },
        {
          property: "tabHoverColor",
          type: "string",
          default: "var(--tabHoverColor) = var(--tabColor) = Color.Black",
          desc: "Tab text color when hover",
        },
        {
          property: "tabHoverBgColor",
          type: "string",
          default: "var(--tabHoverBgColor) = var(--tabActiveBgColor) + '11' = Color.Blue11",
          desc: "Tab background color when hover (when 6 bit hex color, will be add '11' as alpha) ",
        },
      ]}
    />
  );
}
