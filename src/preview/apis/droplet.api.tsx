
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

