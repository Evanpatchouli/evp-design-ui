import Card from "@/components/card";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpRow from "@/lib/evp-row";
import { useState } from "react";
import Md from 'react-markdown';

export default function RowView() {
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
    <div className="preview-container ToastView">
            <Md>
{`
# EvpRow

A layout component that can be used to arrange child-elements in a row.

## Basic Usage

import: 
`}
      </Md>
      <Tsx>
{`
import { EvpRow } from 'evp-design-ui';
`}
      </Tsx>
      <Md>
{`
usage:
`}
      </Md>
      <Card>
        <EvpRow>
          <div>Hello,</div>
          <div>World!</div>
        </EvpRow>
      </Card>
      <Tsx>
{`
<EvpRow>
  <div>Hello,</div>
  <div>World!</div>
</EvpRow>
`}
      </Tsx>
      <Md>
{`
## Notice

- EvpRow's default alignItems is "flex-start".

You need to set justifyContent to "center" if you want to justify the child-elements to the center.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(1);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpRow justifyContent="center" border='1px solid black'>
          <div>Hello,</div>
          <div>World!</div>
        </EvpRow>
      </Card>
{showCode[1]?
<Tsx>
{`
<EvpRow justifyContent="center" border='1px solid black'>
  <div>Hello,</div>
  <div>World!</div>
</EvpRow>
`}
</Tsx>
: void 0}
      <Md>
{`
- EvpRow's default justifyContent is "center".

You need to set alignItems to "flex-start" if you want to align the child-elements to the top.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(2);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpRow alignItems="flex-start" border='1px solid black' h={100}>
          <div>Hello,</div>
          <div>World!</div>
        </EvpRow>
      </Card>
{showCode[2]?
<Tsx>
{`
<EvpRow justifyContent="flex-start" border='1px solid black' h={100}>
  <div>Hello,</div>
  <div>World!</div>
</EvpRow>
`}
</Tsx>
: void 0}
      <Md>
{`
## Api

**EvpRow Apis:**

Please refer to EvpBaseProps in docs of EvpDom.
`}
      </Md>
    </div>
  )
}