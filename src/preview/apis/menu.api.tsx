import Api from "@/components/api";
import { EvpCode, EvpPopover } from "@/lib";

export default function MenuApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 160,
        options: 80,
      }}
      data={[
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The following contents of this menu, usually to be of `EvpMenuItem`",
        },
        {
          property: "title",
          type: "React.ReactNode",
          default: "undefined",
          desc: "Menu title text could be a string or JSX.Element",
        },
        {
          property: "submenu",
          type: "boolean",
          default: "false",
          desc: "Whether this menu is a submenu",
        },
        {
          property: "itemIndent",
          type: "boolean | number | string",
          default: "false",
          desc: "Indent level of this menu item",
        },
        {
          property: "w",
          type: "number | string",
          default: "260px",
          desc: "Default menu width is 260px",
        },
        {
          property: "h",
          type: "number | string",
          default: "100%",
          desc: "Default menu height is 100%",
        },
        {
          property: "icon",
          type: "IconType",
          default: "undefined",
          desc: "Icon of this menu item",
        },
        {
          property: "link",
          type: "string | { path?: string; hash?: boolean }",
          default: "undefined",
          desc: "Route link of this menu item",
        },
        {
          property: "hash",
          type: "boolean",
          default: "false",
          desc: "Whether to use hash route",
        },
        {
          property: "keyId",
          type: "any",
          default: "undefined",
          desc: "Key of this menu item, if not set, will generate a nanoid.",
        },
        {
          property: "multiSelected",
          type: "boolean",
          default: "false",
          desc: "Whether this menu item can be selected multiple times",
        },
        {
          property: "itemColor",
          type: (
            <>
              <EvpPopover
                position="upperRightCorner"
                contentStyle={{
                  paddingInline: '8px'
                }}
                content={
                  <EvpCode lang="ts" theme="oneLight">
                    {`
{ 
  unselected?: 
    { bg?: string; text?: string }; 
  selected?: 
    { bg?: string; text?: string }; 
  hover?: 
    { bg?: string; text?: string }; 
  selectedHover?: 
    { bg?: string; text?: string }; 
  click?: 
    { bg?: string; text?: string }; 
}
`}
                  </EvpCode>
                }
              >
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>ItemColor</span>
              </EvpPopover>
            </>
          ),
          default: "undefined",
          desc: "Customize colors of this menu item at different states",
        },
      ]}
    />
  );
}
