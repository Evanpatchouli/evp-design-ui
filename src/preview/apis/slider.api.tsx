import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function SliderApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 180,
      }}
      data={[
        {
          property: "name",
          type: "string",
          default: "undefined",
          desc: "input field name",
          required: true,
        },
        {
          property: "class",
          type: "string",
          default: "undefined",
          desc: "className of component",
        },
        {
          property: "label",
          type: "React.ReactNode",
          default: "undefined",
          desc: "label of this input field",
        },
        {
          property: "labelSize",
          type: "string",
          default: "14px",
          options: "label font-size",
          desc: "label font-size",
        },
        {
          property: "labelWidth",
          type: "string | number",
          default: "fit-content",
          options: undefined,
          desc: "label width",
        },
        {
          property: "labelAlign",
          type: "string",
          default: "left",
          options: '"left" | "center" | "right"',
          desc: "label align",
        },
        {
          property: "required",
          type: "boolean",
          default: "false",
          desc: "Whether to show a required `*` character, this is only a character not a validation!",
        },
        {
          property: "value",
          type: "number",
          default: "undefined",
          desc: "value of this silder input field",
        },
        {
          property: "defaultValue",
          type: "number",
          default: "0",
          desc: "default value of this silder input field",
        },
        {
          property: "range",
          type: "[number,number]",
          default: "[0, 100]",
          desc: "range of this silder input field",
        },
        {
          property: "min",
          type: "number",
          default: "0",
          desc: "min limit of this silder input field",
        },
        {
          property: "max",
          type: "number",
          default: "100 / range[1]",
          desc: "max limit of this silder input field",
        },
        {
          property: "precision",
          type: "number",
          default: "0",
          desc: "value precision of this silder input field",
        },
        {
          property: "width",
          type: "number|string",
          default: "undefined",
          desc: "max width of slider bar",
        },
        {
          property: "showEtc",
          type: "boolean",
          default: "true",
          desc: "whether to show etc of slider bar",
        },
        {
          property: "style",
          type: "React.CSSProperties",
          default: "undefined",
          desc: "style of component",
        },
        {
          property: "step",
          type: "number",
          default: "1",
          desc: "step size of slider bar",
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
