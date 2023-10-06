import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function ImgApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "src",
          type: "string",
          default: "undefined",
          desc: "The source url or path of the image",
        },
        {
          property: "alt",
          type: "string",
          default: "undefined",
          desc: "The alt text of the image",
        },
        {
          property: "preview",
          type: "boolean",
          default: "false",
          desc: "Whether to open the preview dialog of this image",
        },
        {
          property: "setPreview",
          type: "SetStateAction",
          default: "undefined",
          desc: "SetStateAction of proped `preview`",
        },
        {
          property: "downLoadTooltipText",
          type: "string",
          default: "Download",
          desc: "Tooltip text of download button",
        },
        {
          property: "copyTooltipText",
          type: "string",
          default: "Copy URL",
          desc: "Tooltip text of copy button",
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
