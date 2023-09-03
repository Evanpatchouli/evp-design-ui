import Card from "@/components/card";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpCol from "@/lib/evp-col";
import { useEffect, useState } from "react";
import Md from 'react-markdown';

export default function ColView() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
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
# EvpCol

A layout component that can be used to arrange child-elements in a column.

## Basic Usage

import: 
`}
      </Md>
      <Tsx>
{`
import { EvpCol } from 'evp-design-ui';
`}
      </Tsx>
      <Md>
{`
usage:
`}
      </Md>
      <Card>
        <EvpCol>
          <span>Hello,</span>
          <span>World!</span>
        </EvpCol>
      </Card>
      <Tsx>
{`
<EvpCol>
  <span>Hello,</span>
  <span>World!</span>
</EvpCol>
`}
      </Tsx>
      <Md>
{`
## Notice

- EvpCol's default alignItems is "center".

You need to set alignItems to "flex-start" if you want to align the child-elements to the left.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(1);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpCol alignItems="flex-start" border='1px solid black'>
          <span>Hello,</span>
          <span>World!</span>
        </EvpCol>
      </Card>
{showCode[1]?
<Tsx>
{`
<EvpCol alignItems="flex-start" border='1px solid black'>
  <span>Hello,</span>
  <span>World!</span>
</EvpCol>
`}
</Tsx>
: void 0}
      <Md>
{`
- EvpCol's default justifyContent is "center".

You need to set justifyContent to "flex-start" if you want to justify the child-elements to the top.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(2);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpCol justifyContent="flex-start" border='1px solid black' h={100}>
          <span>Hello,</span>
          <span>World!</span>
        </EvpCol>
      </Card>
{showCode[2]?
<Tsx>
{`
<EvpCol justifyContent="flex-start" border='1px solid black' h={100}>
  <span>Hello,</span>
  <span>World!</span>
</EvpCol>
`}
</Tsx>
: void 0}
      <Md>
{`
## Api

**EvpCol Apis:**

Please refer to EvpBaseProps in docs of EvpDom.
`}
      </Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-row" text="★ Next Doc EvpRow >" />
    </div>
  )
}