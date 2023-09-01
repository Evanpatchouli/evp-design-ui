import Card from "@/components/card";
import Code from "@/components/code";
import Md from "@/components/md";
import EvpButton from "@/lib/evp-button";
import EvpFlexbar from "@/lib/evp-flexbar";
import EvpRow from "@/lib/evp-row";
import { useState } from "react";

export default function FlexbarView() {

  const [showCode, setShowCode] = useState<{[x:number]:boolean}>({
    1: false,
    2: false,
    3: false,
    4: false
  })

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  }

  return(
    <div className="preview-container">
<Md>
{`
# EvpFlexbar

A flexible bar triggered by hovering or clicking, which is often displayed at the side of a container.

## Basic Usage

**import:**
`}
</Md>
<Code lang="tsx">
{`
import { EvpFlexbar } from 'evp-design-ui';
`}
</Code>
<Md>
{`
**usage:**
`}
</Md>
<Code lang="tsx">
{`
<EvpFlexbar labelPosition="right">
  <div>This is one something.</div>
</EvpFlexbar>
`}
</Code>
<Md>
{`
## LabelPosition

The label position can be set to 'left', 'right', 'top' or 'bottom'. Exactly, it decides the direction of flexbar.
`}
</Md>
      <Card style={{
        position: 'relative',
      }}
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(1);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpFlexbar labelPosition="right" label="right">
          <div>这是往右方向的伸缩条</div>
        </EvpFlexbar>
        <EvpFlexbar labelPosition="left" label="left">
          <div>这是往左方向的伸缩条</div>
        </EvpFlexbar>
        <EvpRow style={{ position: 'relative', paddingTop: 24, paddingBottom: 20 }}>
          <EvpFlexbar labelPosition="top" label="top" style={{ position: 'absolute' }}>
            <div>这是竖向顶部的伸缩条</div>
          </EvpFlexbar>
          <EvpFlexbar labelPosition="bottom" label="bot" style={{ position: 'absolute', left: 60 }}>
            <div>这是竖向底部的伸缩条</div>
          </EvpFlexbar>
        </EvpRow>
      </Card>
{showCode[1]?
<Code lang="tsx">
{`
<EvpFlexbar labelPosition="right" label="right">
  <div>这是往右方向的伸缩条</div>
</EvpFlexbar>
<EvpFlexbar labelPosition="left" label="left">
  <div>这是往左方向的伸缩条</div>
</EvpFlexbar>
<EvpRow style={{ position: 'relative', paddingTop: 22 }}>
  <EvpFlexbar labelPosition="top" label="top" style={{ position: 'absolute' }}>
    <div>这是竖向顶部的伸缩条</div>
  </EvpFlexbar>
  <EvpFlexbar labelPosition="bottom" label="bot" style={{ position: 'absolute', left: 60 }}>
    <div>这是竖向底部的伸缩条</div>
  </EvpFlexbar>
</EvpRow>
`}</Code>
: void 0}
<Md>
{`
## Trigger

The trigger can be set to 'click' or 'hover' to expand and close the flexbar.
`}
</Md>
    <Card
    toolBar={<>
      <EvpButton theme="text" $click={() => {
        clickCode(2);
      }} size="mini" text="code" />
      <EvpButton theme="text" size="mini" text="copy" />
    </>}>
      <EvpFlexbar label="click" trigger="click">I'am triggered by clicking</EvpFlexbar>
      <EvpFlexbar label="hover" trigger="hover">I'am triggered by hovering</EvpFlexbar>
    </Card>
{showCode[2]?
  <Code lang="tsx">
{`
<EvpFlexbar label="click" trigger="click">I'am triggered by clicking</EvpFlexbar>
<EvpFlexbar label="hover" trigger="hover">I'am triggered by hovering</EvpFlexbar>
`}
</Code>
: void 0}
    </div>
  )
}