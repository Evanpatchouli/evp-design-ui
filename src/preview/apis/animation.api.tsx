import Api from "@/components/api";
import { Code, Popover } from "@/lib";

export default function AnimationApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "className",
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
          property: "duration",
          type: "number",
          default: "500",
          desc: "The duration of animation, unit is ms, default is 500ms",
        },
        {
          property: "delay",
          type: "number",
          default: "0",
          desc: "The delay of animation, unit is ms, default is 0ms",
        },
        {
          property: "timingFunction",
          type: "number",
          default: "0",
          desc: "The delay of animation, unit is ms, default is 0ms",
        },
        {
          property: "fillMode",
          type: "string",
          default: "none",
          desc: "The fillMode of animation",
        },
        {
          property: "direction",
          type: "boolean",
          default: "noraml",
          desc: "The direction of animation",
        },
        {
          property: "iterationCount",
          type: "number",
          default: "1",
          desc: "The iterationCount of animation",
        },
        {
          property: "cancelOnLeave",
          type: "boolean",
          default: "false",
          desc: "When mouse leaves element, cancel animation right now or not",
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
