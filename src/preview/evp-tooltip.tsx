import Api from "@/components/api";
import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton, EvpCode, EvpTag, EvpToolTip } from "evp-design-ui";
import { useEffect, useState } from "react";
import Position from "./demos/tooltip/position";

export default function ToolTipView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };
  return (
    <div className="preview-container">
      <Md>
        {`
# EvpToolTip

A tooltip is a web application component that provides a brief description of an item when the user hovers over it or clicks on it.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpToolTip } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpToolTip content="This is a evp-button">
  <EvpButton text="Hover" />
</EvpToolTip>
`}
      </Tsx>
      <Card>
        <EvpToolTip content="This is a evp-button">
          <EvpButton text="Hover" />
        </EvpToolTip>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpToolTip. 

You can set plain to make tooltip plain, and you can also customize tooltip content style with color, bgColor, border and style.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpToolTip content="This is a evp-tag" display="inline-block">
          <EvpTag light text="Hover Me" />
        </EvpToolTip>
        <EvpToolTip content="This is a evp-tag" display="inline-block" plain>
          <EvpTag light text="Plain Tooltip" />
        </EvpToolTip>
        <EvpToolTip content="This is a evp-tag" display="inline-block" color="white" bgColor="black">
          <EvpTag light text="Hover Me" />
        </EvpToolTip>
        <EvpToolTip content="This is a evp-tag" display="inline-block" color="white" bgColor="gray">
          <EvpTag light text="Hover Me" />
        </EvpToolTip>
        <EvpToolTip
          content="This is a evp-tag"
          display="inline-block"
          color="purple"
          bgColor="white"
          border="1px purple solid"
        >
          <EvpTag light text="Hover Me" />
        </EvpToolTip>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpToolTip content="This is a evp-tag" display="inline-block">
  <EvpTag light text="Hover Me" />
</EvpToolTip>
<EvpToolTip content="This is a evp-tag" display="inline-block" plain>
  <EvpTag light text="Plain Tooltip" />
</EvpToolTip>
<EvpToolTip content="This is a evp-tag" display="inline-block" color="white" bgColor="black">
  <EvpTag light text="Hover Me" />
</EvpToolTip>
<EvpToolTip content="This is a evp-tag" display="inline-block" color="white" bgColor="gray">
  <EvpTag light text="Hover Me" />
</EvpToolTip>
<EvpToolTip
  content="This is a evp-tag"
  display="inline-block"
  color="purple"
  bgColor="white"
  border="1px purple solid"
>
  <EvpTag light text="Hover Me" />
</EvpToolTip>
`}
      </Tsx>
      <Md>
        {`
### Trigger

You can set trigger to control tooltip trigger type, default is hover. The value could be "hover", "click" or an array includes some of them.
        `}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(2)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpToolTip content="This is a evp-tag" display="inline-block">
          <EvpTag light text="Hover Me" />
        </EvpToolTip>
        <EvpToolTip content="This is a evp-tag" display="inline-block" trigger={"click"}>
          <EvpTag plain text="Click Me" />
        </EvpToolTip>
        <EvpToolTip content="This is a evp-tag" display="inline-block" trigger={["click", "hover"]}>
          <EvpTag plain text="Hover and Click Me" />
        </EvpToolTip>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<EvpToolTip content="This is a evp-tag" display="inline-block">
  <EvpTag light text="Hover Me" />
</EvpToolTip>
<EvpToolTip content="This is a evp-tag" display="inline-block" trigger={"click"} plain>
  <EvpTag light text="Click Me" />
</EvpToolTip>
`}
      </Tsx>
      <Md>
        {`
### Position and Transform

By default, the tooltip will be positioned relative to the trigger element.
`}
      </Md>
      <Position />
      <Md>
        {`
## Api

**ToolTip Apis:**
`}
      </Md>
      <Api
        data={[
          {
            property: "children",
            type: "React.ReactNode",
            default: "undefined",
            desc: "The element to trigger tooltip",
          },
          { property: "content", type: "React.ReactNode", default: "undefined", desc: "tooltip content" },
          { property: "class", type: "string", default: "undefined", desc: "tooltip content className" },
          { property: "hidden", type: "boolean", default: "false", desc: "manage hidden customly" },
          { property: "color", type: "string", default: "white", desc: "tooltip content font color" },
          {
            property: "bgColor",
            type: "string",
            default: "rgba(0, 0, 0, 0.75)",
            desc: "tooltip content background color",
          },
          {
            property: "border",
            type: "string",
            default: "rgba(60, 60, 60, 1) / sync with bgColor",
            desc: "tooltip content border",
          },
          { property: "plain", type: "boolean", default: "false", desc: "whether to make tooltip plain" },
          { property: "style", type: "React.CSSProperties", default: "null", desc: "tooltip content style" },
          {
            property: "trigger",
            type: "elem of options",
            default: '"hover"',
            options: '"hover" | "click" | Array<"hover" | "click">',
            desc: "Default is hover",
          },
          {
            property: "cursor",
            type: "EvpCursorRule",
            default: undefined,
            desc: "cursor type while hovering trigger",
          },
          {
            property: "display",
            type: "EvpDisplayRule",
            default: undefined,
            desc: "the display of trigger tooltip container",
          },
          {
            property: "position",
            type: (
              <>
                <div>elem of options</div>
                <div>{"/ { top, left }"}</div>
              </>
            ),
            default: '"top"',
            options: `"top"
            | "topLeft"
            | "topLeftCorner"
            | "topRight"
            | "topRightCorner"
            | "left"
            | "leftTop"
            | "leftBottom"
            | "right"
            | "rightTop"
            | "rightBottom"
            | "bottom"
            | "bottomLeft"
            | "bottomRight"
            | "bottomLeftCorner"
            | "bottomRightCorner"
            | {
              top?: string | number;
              left?: string | number;
            }`,
            desc: "the position of trigger tooltip container",
          },
          { property: "transform", type: "{ vertial, horizontal }", default: undefined, desc: "tooltip offset" },
          {
            property: "transform.vertial",
            type: `string | number`,
            default: "sync with position",
            options: `"top" | "center" | "bottom" | string | number`,
            desc: "tooltip translateX",
          },
          {
            property: "transform.horizontal",
            type: `string | number`,
            default: "sync with position",
            options: `"left" | "center" | "right" | string | number`,
            desc: "tooltip translateY",
          },
        ]}
      />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-badge"
        text="★ Next Doc EvpBadge >"
      />
    </div>
  );
}
