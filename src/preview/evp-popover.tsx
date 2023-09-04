import Card from "@/components/card";
import Code from "@/components/code";
import Md from "@/components/md";
import EvpButton from "@/lib/evp-button";
import EvpPopover from "@/lib/evp-popover";
import { useEffect, useState } from "react";

export default function PopoverView() {
  useEffect(()=>{
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
  }, [])
  
  const [showCode, setShowCode] = useState({
    1: false,
    2: false
  });

  return(
    <div className="preview-container PopverView">
<Md>
{`
# EvpPopover

Click or hover on an element to show a poped card side of it.

## Basic Usage

**impoer:**
`}
</Md>
<Code lang="typescript">
{`
import { EvpPopover } from 'evp-design-ui';
`}
</Code>
<Md>
{`
**usage:**
`}
</Md>
<Code lang="tsx">
{`
<EvpPopover content={"i am a popover"} trigger='click'>
  <button>Click me</button>
</EvpPopover>
`}
</Code>
<Md>
{`
## Position

Total 16 different position provided to display the popover. Click them to have a try.
`}
</Md>
      <Card contentClass="evp-popover-view-card"
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          setShowCode({
            ...showCode,
            1: !showCode[1]
          })
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpPopover position='top' content={"i am top"} trigger='click'>
          <EvpButton plain>top</EvpButton>
        </EvpPopover>
        <EvpPopover position='topLeft' content={"i am topLeft"} trigger='click'>
          <EvpButton plain>topLeft</EvpButton>
        </EvpPopover>
        <EvpPopover position="topRight" content={"i am topRight"} trigger='click'>
          <EvpButton plain>topRight</EvpButton>
        </EvpPopover>

        <EvpPopover position='left' content={"i am left"} trigger='click'>
          <EvpButton plain>left</EvpButton>
        </EvpPopover>
        <EvpPopover position='leftTop' content={"i am leftTop"} trigger='click'>
          <EvpButton plain>leftTop</EvpButton>
        </EvpPopover>
        <EvpPopover position="leftBottom" content={"i am leftBottom"} trigger='click'>
          <EvpButton plain>leftBottom</EvpButton>
        </EvpPopover>

        <EvpPopover position='right' content={"i am right"} trigger='click'>
          <EvpButton plain>right</EvpButton>
        </EvpPopover>
        <EvpPopover position='rightTop' content={"i am rightTop"} trigger='click'>
          <EvpButton plain>rightTop</EvpButton>
        </EvpPopover>
        <EvpPopover position="rightBottom" content={"i am rightBottom"} trigger='click'>
          <EvpButton plain>rightBottom</EvpButton>
        </EvpPopover>

        <EvpPopover position='bottom' content={"i am bottom"} trigger='click'>
          <EvpButton plain>bottom</EvpButton>
        </EvpPopover>
        <EvpPopover position='bottomLeft' content={"i am bottomLeft"} trigger='click'>
          <EvpButton plain>bottomLeft</EvpButton>
        </EvpPopover>
        <EvpPopover position="bottomRight" content={"i am bottomRight"} trigger='click'>
          <EvpButton plain>bottomRight</EvpButton>
        </EvpPopover>

        <EvpPopover position='upperLeftCorner' content={"i am upperLeftCorner"} trigger='click'>
          <EvpButton plain>upperLeftCorner</EvpButton>
        </EvpPopover>
        <EvpPopover position='upperRightCorner' content={"i am upperRightCorner"} trigger='click'>
          <EvpButton plain>upperRightCorner</EvpButton>
        </EvpPopover>
        <EvpPopover position="lowerLeftCorner" content={"i am lowerLeftCorner"} trigger='click'>
          <EvpButton plain>lowerLeftCorner</EvpButton>
        </EvpPopover>
        <EvpPopover position="lowerRightCorner" content={"i am lowerRightCorner"} trigger='click'>
          <EvpButton plain>lowerRightCorner</EvpButton>
        </EvpPopover>
      </Card>
{showCode[1]?
<Code lang="tsx">
{`
<EvpPopover position='top' content={"i am top"} trigger='click'>
  <EvpButton plain>top</EvpButton>
</EvpPopover>
<EvpPopover position='topLeft' content={"i am topLeft"} trigger='click'>
  <EvpButton plain>topLeft</EvpButton>
</EvpPopover>
<EvpPopover position="topRight" content={"i am topRight"} trigger='click'>
  <EvpButton plain>topRight</EvpButton>
</EvpPopover>

<EvpPopover position='left' content={"i am left"} trigger='click'>
  <EvpButton plain>left</EvpButton>
</EvpPopover>
<EvpPopover position='leftTop' content={"i am leftTop"} trigger='click'>
  <EvpButton plain>leftTop</EvpButton>
</EvpPopover>
<EvpPopover position="leftBottom" content={"i am leftBottom"} trigger='click'>
  <EvpButton plain>leftBottom</EvpButton>
</EvpPopover>

<EvpPopover position='right' content={"i am right"} trigger='click'>
  <EvpButton plain>right</EvpButton>
</EvpPopover>
<EvpPopover position='rightTop' content={"i am rightTop"} trigger='click'>
  <EvpButton plain>rightTop</EvpButton>
</EvpPopover>
<EvpPopover position="rightBottom" content={"i am rightBottom"} trigger='click'>
  <EvpButton plain>rightBottom</EvpButton>
</EvpPopover>

<EvpPopover position='bottom' content={"i am bottom"} trigger='click'>
  <EvpButton plain>bottom</EvpButton>
</EvpPopover>
<EvpPopover position='bottomLeft' content={"i am bottomLeft"} trigger='click'>
  <EvpButton plain>bottomLeft</EvpButton>
</EvpPopover>
<EvpPopover position="bottomRight" content={"i am bottomRight"} trigger='click'>
  <EvpButton plain>bottomRight</EvpButton>
</EvpPopover>

<EvpPopover position='upperLeftCorner' content={"i am upperLeftCorner"} trigger='click'>
  <EvpButton plain>upperLeftCorner</EvpButton>
</EvpPopover>
<EvpPopover position='upperRightCorner' content={"i am upperRightCorner"} trigger='click'>
  <EvpButton plain>upperRightCorner</EvpButton>
</EvpPopover>
<EvpPopover position="lowerLeftCorner" content={"i am lowerLeftCorner"} trigger='click'>
  <EvpButton plain>lowerLeftCorner</EvpButton>
</EvpPopover>
<EvpPopover position="lowerRightCorner" content={"i am lowerRightCorner"} trigger='click'>
  <EvpButton plain>lowerRightCorner</EvpButton>
</EvpPopover>
`}
</Code>
: void 0}
<Md>
{`
## Trigger

How to tigger the popover to show / hidden? There are two trigger: "click" | "hover".
`}
</Md>
      <Card contentClass="evp-popover-view-card"
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          setShowCode({
            ...showCode,
            2: !showCode[2]
          })
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpPopover position="top" content={"i am default trigger"}>
          <EvpButton plain>default</EvpButton>
        </EvpPopover>
        <EvpPopover position="top" content={"i am click trigger"} trigger="click">
          <EvpButton plain>click</EvpButton>
        </EvpPopover>
        <EvpPopover position="top" content={"i am hover trigger"} trigger="hover">
          <EvpButton plain>hover</EvpButton>
        </EvpPopover>
      </Card>
{showCode[2]?
<Code lang="tsx">
{`
<EvpPopover position="top" content={"i am default trigger"}>
  <EvpButton plain>default</EvpButton>
</EvpPopover>
<EvpPopover position="top" content={"i am click trigger"} trigger="click">
  <EvpButton plain>click</EvpButton>
</EvpPopover>
<EvpPopover position="top" content={"i am hover trigger"} trigger="hover">
  <EvpButton plain>hover</EvpButton>
</EvpPopover>
`}
</Code>
: void 0}
<Md>
{`
## Api

**EvpPopover Apis**:

- content: the content of popover
  + type: React.ReactNode
- children: the one element you want to wrap by EvpPopover
- style?: content style;
- class?: content className;
- id?: content id;
- trigger?: how to trigger the popover
  + default: "click"
  + options: "hover" | "click"
- hiddenOnBlur?: whether to hidden popover when the element is unfocus
  + default: true
  + options: true | false
- position?: the position of the popover
  + default: "top'
  + options: "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight" | "left" | "leftTop" | "leftBottom" | "right" | "rightTop" | "rightBottom" | "upperLeftCorner" | "upperRightCorner" | "lowerLeftCorner" | "lowerRightCorner"
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-flexbar" text="★ Next Doc EvpFlexbar >" />
    </div>
  )
}