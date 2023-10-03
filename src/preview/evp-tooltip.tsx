import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton, EvpCode, EvpTag, EvpToolTip } from "evp-design-ui";
import { useEffect, useState } from "react";

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
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpToolTip Apis:**
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpToolTipProps = {
  /** The element to trigger tooltip */
  children?: React.ReactNode;
  /** tooltip content */
  content?: React.ReactNode;
  /** tooltip content className */
  class?: string;
  /** manage hidden customly */
  hidden?: boolean;
  /** tooltip content font color */
  color?: string;
  /** tooltip content background color */
  bgColor?: string;
  /** tooltip content border */
  border?: string;
  /** whether to make tooltip plain, default is false */
  plain?: boolean;
  /** tooltip content style */
  style?: React.CSSProperties;
  /** Default is hover */
  trigger?: "hover" | "click" | Array<"hover" | "click">;
  /** cursor type while hovering trigger, default is only when trigger is "click" to be "pointer" */
  cursor?: EvpCursorRule;
  /** the display of trigger tooltip container */
  display?: EvpDisplayRule;
  position?: "top" | "bottom" | "left" | "right"
};
`}
      </EvpCode>
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
