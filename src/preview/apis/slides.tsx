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
          property: "items",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The content items of this slides, will be parsed to an array",
        },
        {
          property: "children",
          type: "React.ReactNode",
          default: "undefined",
          desc: "The content items of this slides, will be parsed to an array, priority is higher than items",
        },
        {
          property: "onClickLeft",
          type: "(e: Event) => void",
          default: "undefined",
          desc: "The callback function when clicking the left button",
        },
        {
          property: "onClickRight",
          type: "(e: Event) => void",
          default: "undefined",
          desc: "The callback function when clicking the right button",
        },
        {
          property: "onClickItem",
          type: "(item: any, index: number) => void",
          default: "undefined",
          desc: "The callback function when clicking an item",
        },
        {
          property: "showBtns",
          type: "boolean",
          default: "true",
          desc: "Whether to show the left / right buttons by both sides of slides container",
        },
        {
          property: "showScroll",
          type: "boolean",
          default: "false",
          desc: "Whether to show the scroll bar at bottom of slides container",
        },
        {
          property: "showTabSpots",
          type: "boolean",
          default: "true",
          desc: "Whether to show the tab spots at bottom of slides container",
        },
        {
          property: "adjacentTabScaled",
          type: "boolean",
          default: "false",
          desc: "Whether to scale the adjacent tab spots to the active current tab spot",
        },
        {
          property: "tabSpotColor",
          type: (
            <>
              <Popover
                position="upperRightCorner"
                contentStyle={{
                  paddingInline: "8px",
                }}
                content={
                  <Code lang="ts" theme="oneLight">
                    {`
{                      
  default?: string;
  hover?: string;
  click?: string;
  active?: string;
};
`}
                  </Code>
                }
              >
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>TabSpotColor</span>
              </Popover>
            </>
          ),
          default: "undefined",
          desc: "Tab spot color settings",
        },
      ]}
    />
  );
}
