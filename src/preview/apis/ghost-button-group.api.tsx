import Api from "@/components/api";
import { Code, Popover } from "@/lib";

export default function GhostButtonGroupApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 200,
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
          desc: "The children of Button",
        },
        {
          property: "items",
          type: "Array<EvpButtonProps>",
          default: "[]",
          desc: "The props list of expanded buttons",
        },
        {
          property: "direction",
          type: "string",
          options: '"up" | "down" | "left" | "right"',
          default: "down",
          desc: "The direction of expanded buttons",
        },
        {
          property: "gap",
          type: "string | number",
          default: "12px",
          desc: "The gap between every expanded buttons",
        },
        {
          property: "reverse",
          type: "boolean",
          default: "false",
          desc: "Wheather to reverse the quene of the buttons",
        },
        {
          property: "open",
          type: "boolean",
          default: "undefined",
          desc: "Controll the open state of the buttons group, if you want to get controlled, you'better not to set a state maybe undefined, parse undefined to false please.",
        },
        {
          property: "setOpen",
          type: "Function",
          default: "undefined",
          desc: "Dispatch<setState<boolean>> of open state proped",
        },
        {
          property: "groupRotate",
          type: "string | number",
          default: "false",
          desc: "(@experimental unrecommended) Only rotate the buttons group expaned. String should format `{number}deg`.If you really want to only rotate the buttons group, you can first rotate the whole component, then rotate the content back.",
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
