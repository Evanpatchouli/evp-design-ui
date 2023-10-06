import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function AnchorApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 240,
      }}
      data={[
        {
          property: "id",
          type: "string",
          default: "undefined",
          desc: "target element's id",
          required: true,
        },
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "className of component",
        },
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The element to be wrapped",
        },
        {
          property: "hash",
          type: "boolean",
          default: "false",
          desc: "Whether to use hash to reach the target element, default use dom selector in this case Anchor is a div, if you set hash to true, it will be replaced with <a />",
        },
        {
          property: "behavior",
          type: "string",
          default: "smooth",
          options: '"smooth" | "instant" | "auto"',
          desc: "The behavior of the transition scrolling from the current element to the target element",
        },
        {
          property: "block",
          type: "string",
          default: "start",
          options: '"start" | "center" | "end" | "nearest"',
          desc: "The block of the ScrollIntoViewOptions",
        },
        {
          property: "inline",
          type: "string",
          default: "start",
          options: '"start" | "center" | "end" | "nearest"',
          desc: "The inline of the ScrollIntoViewOptions",
        },
        //         {
        //           property: "itemColor",
        //           type: (
        //             <>
        //               <EvpPopover
        //                 position="upperRightCorner"
        //                 contentStyle={{
        //                   paddingInline: '8px'
        //                 }}
        //                 content={
        //                   <EvpCode lang="ts" theme="oneLight">
        //                     {`
        // {
        //   unselected?:
        //     { bg?: string; text?: string };
        //   selected?:
        //     { bg?: string; text?: string };
        //   hover?:
        //     { bg?: string; text?: string };
        //   selectedHover?:
        //     { bg?: string; text?: string };
        //   click?:
        //     { bg?: string; text?: string };
        // }
        // `}
        //                   </EvpCode>
        //                 }
        //               >
        //                 <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>ItemColor</span>
        //               </EvpPopover>
        //             </>
        //           ),
        //           default: "undefined",
        //           desc: "Customize colors of this menu item at different states",
        //         },
      ]}
    />
  );
}
