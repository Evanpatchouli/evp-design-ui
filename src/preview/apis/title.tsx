import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function TitleApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 240,
      }}
      data={[
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "className of title text element",
        },
        {
          property: "stressed",
          type: "boolean",
          default: "false",
          desc: "Whether the title is stressed, if true will show a left vertical line",
        },
        {
          property: "stressLineColor",
          type: "string",
          default: "light blue",
          desc: "The color of the vertical line, only valid when stressed is true",
        },
        {
          property: "size",
          type: "string | number",
          default: "md",
          options: '"mn" | "sm" | "md" | "lg" | "hg" | string | number',
          desc: "Size of title",
        },
        {
          property: "weight",
          type: "string | number",
          default: "bold",
          desc: "Font weight of title",
        },
        {
          property: "fontSize",
          type: "string | number",
          default: "undefined",
          desc: "Size of title",
        },
        {
          property: "underline",
          type: "boolean | string",
          default: "false",
          desc: "Whether to underline the title, if true will underline the title",
        },
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The element to be title",
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
