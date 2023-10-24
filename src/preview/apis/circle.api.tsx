import Api from "@/components/api";
import { Code, Popover } from "@/lib";

export default function SlidesApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "The className of component",
        },
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The children of component",
        },
        {
          property: "items",
          type: "Array",
          default: "[]",
          desc: "The items around the circle",
        },
        {
          property: "size",
          type: "number|string",
          default: "500px",
          desc: "The size of the circle",
        },
        {
          property: "itemSize",
          type: "number|string",
          default: "computed by size to fit the circle",
          desc: "The size of the circle",
        },
        {
          property: "style",
          type: "React.CSSProperties",
          default: "undefined",
          desc: "The style of component",
        },
        {
          property: "mainProps",
          type: "ReactDivProps",
          default: "undefined",
          desc: "The props of main element",
        },
        {
          property: "schema",
          type: (
            <>
              <Popover
                position="upperRightCorner"
                contentStyle={{
                  paddingInline: "8px",
                }}
                content={
                  <Code lang="ts" theme="oneLight">
                    {`
{
  render?: (item: T, idx: number, items: T[]) => React.ReactNode;
  class?: string;
  style?: React.CSSProperties;
  id?: string;
  $*?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
};
        `}
                  </Code>
                }
              >
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>schema</span>
              </Popover>
            </>
          ),
          default: "undefined",
          desc: "schema config, $* are Mouse events similiar to EvpBaseEvents",
        },
      ]}
    />
  );
}
