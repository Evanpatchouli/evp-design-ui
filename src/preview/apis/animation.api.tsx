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
        {
          property: "activeGap",
          type: "number",
          default: "50",
          desc: "The time gap before animation is set to applied (not delay! It means the behavour of setting animation to applied)",
        },
        {
          property: "onActive",
          type: "() => void",
          default: "undefined",
          desc: "Callback when animation is active",
        },
        {
          property: "onInactive",
          type: "() => void",
          default: "undefined",
          desc: "Callback when animation is inactive",
        },
        {
          property: "activeState",
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
  state?: T | undefined;
  setState?: React.Dispatch<React.SetStateAction<T | undefined>>;
  activeValue?: T | undefined;
  inactiveValue?: T | undefined;
};
        `}
                  </Code>
                }
              >
                <span style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>ActiveStateWithAnimation</span>
              </Popover>
            </>
          ),
          default: "undefined",
          desc: "You can specify a state synchronous with the status of animation",
        },
      ]}
    />
  );
}
