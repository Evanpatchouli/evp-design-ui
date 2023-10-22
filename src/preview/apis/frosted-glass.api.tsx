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
          property: "background",
          type: "string",
          default: "none",
          desc: "background",
        },
        {
          property: "filterAlpha",
          type: "number",
          default: "0.1",
          desc: "background alpha",
        },
        {
          property: "filterBackGround",
          type: "string",
          default: "rgba(255, 255, 255, $filterAlpha)",
          desc: "filter background",
        },
        {
          property: "filterBlur",
          type: "number",
          default: "10",
          desc: "filter blur",
        },
        {
          property: "radius",
          type: "string",
          default: "0",
          desc: "Border radius",
        },
        {
          property: "borderWidth",
          type: "number",
          default: "1",
          desc: "Border width",
        },
        {
          property: "borderStyle",
          type: "string",
          default: "solid",
          desc: "Border style",
        },
        {
          property: "borderColor",
          type: "string",
          default: "0",
          desc: "rgba(255, 255, 255, 0.2)",
        },
        //         {
        //           property: "SOME COMPLEX PROPERTY",
        //           type: (
        //             <>
        //               <Popover
        //                 position="upperRightCorner"
        //                 contentStyle={{
        //                   paddingInline: "8px",
        //                 }}
        //                 content={
        //                   <Code lang="ts" theme="oneLight">
        //                     {`
        // {
        //   default?: string;
        //   hover?: string;
        //   click?: string;
        //   active?: string;
        // };
        // `}
        //                   </Code>
        //                 }
        //               >
        //                 <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>TabSpotColor</span>
        //               </Popover>
        //             </>
        //           ),
        //           default: "undefined",
        //           desc: "Desc of this property",
        //         },
      ]}
    />
  );
}
