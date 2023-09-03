import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpCard from "@/lib/evp-card";
import { useEffect, useState } from "react";

export default function CardView() {
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
    <div className="preview-container">
<Md>
{`
# EvpCard

Collect several infos and show in a card container.

## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { EvpCard } from 'evp-design-ui'
`}
</Tsx>
<Md>
{`
**usage:**
`}
</Md>
<Tsx>
{`
<EvpCard w={400}>
  <p>Hello, i am EvpCard.</p>
  <p>I extends EvpBaseProps.</p>
  <p>I use EvpDom as container.</p>
  <p>That's me.</p>
  <EvpButton text="Greet" />
</EvpCard>
`}
</Tsx>
      <EvpCard w={400}>
        <p>Hello, i am EvpCard.</p>
        <p>I extends EvpBaseProps.</p>
        <p>I use EvpDom as container.</p>
        <p>That's me.</p>
        <EvpButton text="Greet" />
      </EvpCard>
<Md>
{`
## ToolBar

Default is not but EvpCard can be with a toolbar side of it.
`}
</Md>
      <EvpCard
      w={'100%'}
      toolbarStyle={{
        justifyContent: 'flex-end'
      }}
      toolBar={
      <>
        <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpCard w={400}
        toolbarStyle={{
          justifyContent: 'flex-end'
        }}
        toolBar={
        <>
          <EvpButton plain size="mini" text="Hello" />
          <EvpButton plain size="mini" text="World" />
        </>}
        >
          <p>Hello, i am EvpCard.</p>
          <p>I extends EvpBaseProps.</p>
          <p>I use EvpDom as container.</p>
          <p>That's me.</p>
          <EvpButton text="Greet" />
        </EvpCard>
      </EvpCard>
<Tsx show={showCode[1]}>
{`
<EvpCard w={400}
toolbarStyle={{
  justifyContent: 'flex-end'
}}
toolBar={
<>
  <EvpButton plain size="mini" text="Hello" />
  <EvpButton plain size="mini" text="World" />
</>}
>
  <p>Hello, i am EvpCard.</p>
  <p>I extends EvpBaseProps.</p>
  <p>I use EvpDom as container.</p>
  <p>That's me.</p>
  <EvpButton text="Greet" />
</EvpCard>
`}
</Tsx>
<Md>
{`
## ToolBarPosition

Toolbar can be displayed on its four side
`}
</Md>
      <EvpCard w={'100%'} contentStyle={{ display: 'flex', flexDirection: 'row' }}
      toolBar={
      <>
        <EvpButton $click={() => clickCode(2)} theme="text" size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}
      toolbarStyle={{
        justifyContent: 'flex-end'
      }}>
        <EvpCard
        mgr_30
        h={120}
        toolBar={
          <span>code</span>
        }
        toolBarPosition="top"
        >
          <h3>top toolbar</h3>
        </EvpCard>
        <EvpCard
        mgr_30
        h={120}
        toolBar={
          <span>code</span>
        }
        toolBarPosition="bottom"
        >
          <h3>bottom toolbar</h3>
        </EvpCard>
        <EvpCard
        mgr_30
        h={120}
        toolBar={
          <span>code</span>
        }
        toolBarPosition="left"
        >
          <h3>left toolbar</h3>
        </EvpCard>
        <EvpCard
        mgr_30
        h={120}
        toolBar={
          <span>code</span>
        }
        toolBarPosition="right"
        >
          <h3>right toolbar</h3>
        </EvpCard>
      </EvpCard>
{showCode[2]?
<Tsx>
{`
<EvpCard mgr_30 h={120}
  toolBar={
    <span>code</span>
  }
  toolBarPosition="top"
>
  <h3>top toolbar</h3>
</EvpCard>
<EvpCard mgr_30 h={120}
  toolBar={
    <span>code</span>
  }
  toolBarPosition="bottom"
>
  <h3>bottom toolbar</h3>
</EvpCard>
<EvpCard mgr_30 h={120}
  toolBar={
    <span>code</span>
  }
  toolBarPosition="left"
  >
  <h3>left toolbar</h3>
</EvpCard>
<EvpCard mgr_30 h={120}
  toolBar={
    <span>code</span>
  }
  toolBarPosition="right"
  >
  <h3>right toolbar</h3>
</EvpCard>
`}
</Tsx>
: void 0}
<Md>
{`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpCard Apis:**

- children? : card content
  + type: React.ReactNode
- contentStyle ? : css style of card content element
- toolBar ? : toolbar content
  + type: React.ReactNode
- toolBarPosition ? : where the toolbar is
  + default: 'bottom'
  + options: 'top' | 'bottom' | 'left' | 'right'
- toolbarStyle ? : css style of card toolbar element
- class ? : className of card;
- contentClass ? : className of card content element;
- toolBarClass ? : className of card toolbar element;
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-menu" text="★ Next Doc EvpMenu >" />
    </div>
  )
}