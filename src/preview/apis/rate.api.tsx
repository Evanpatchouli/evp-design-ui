import Api from "@/components/api";
import { Code, Color, Popover } from "@/lib";

export default function SlidesApi() {
  return (
    <Api
      widths={{
        type: "100px",
        default: 100,
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
          property: "count",
          type: "number",
          default: "5",
          desc: "The max stars amount number",
        },
        {
          property: "value",
          type: "number",
          default: "0",
          desc: "The selected stars amount",
        },
        {
          property: "setValue",
          type: "function",
          default: "undefined",
          desc: "The Dispatch Function to setValue",
        },
        {
          property: "defaultValue",
          type: "number",
          default: "0",
          desc: "The default selected stars amount",
        },
        {
          property: "onStarClick",
          type: "function",
          default: "undefined",
          desc: "The callback when star clicked",
        },
        {
          property: "onChange",
          type: "function",
          default: "undefined",
          desc: "The callback when stars amount changed",
        },
        {
          property: "starColor",
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
  unselected?: string;
  unselectedOpacity?: string;
  selected?: string;
  selectedOpacity?: string;
};
`}
                  </Code>
                }
              >
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>TabSpotColor</span>
              </Popover>
            </>
          ),
          default: (
            <Popover
              position="upperRightCorner"
              contentStyle={{
                paddingInline: "8px",
              }}
              content={
                <Code lang="ts" theme="oneLight">
                  {`
{
  unselected: '${Color.Gray}',
  unselectedOpacity: 0.3,
  selected: '${Color.DeepYellow}',
  selectedOpacity: 1,
}
`}
                </Code>
              }
            >
              <span style={{ textDecoration: "underline", color: "gray", cursor: "pointer" }}>default</span>
            </Popover>
          ),
          desc: "Color settings for the stars at different status",
        },
      ]}
    />
  );
}
