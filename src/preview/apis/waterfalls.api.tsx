import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function WaterFallsApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 240,
      }}
      data={[
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The item put into waterfalls",
        },
        {
          property: "columns",
          type: "number",
          default: "4",
          desc: "The number of waterfalls columns",
        },
        {
          property: "gap",
          type: "number | string",
          default: "8px",
          desc: "The gap between columns",
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
