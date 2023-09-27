import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import { EvpCard } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function CardView() {
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
# EvpCard

A card component is a part of a digital interface that serves as a container for displaying information or an action.

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
        w={"100%"}
        footerProps={{
          style: {
            justifyContent: "flex-end",
            padding: 0,
          },
        }}
        footer={
          <>
            <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpCard
          w={400}
          footerProps={{
            justifyContent: "flex-end",
          }}
          footer={
            <>
              <EvpButton plain size="mini" text="Hello" />
              <EvpButton plain size="mini" text="World" />
            </>
          }
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
      <EvpCard
        w={"100%"}
        contentStyle={{ display: "flex", flexDirection: "row" }}
        footer={
          <>
            <EvpButton $click={() => clickCode(2)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
        footerProps={{
          justifyContent: "flex-end",
        }}
      >
        <EvpCard mgr_30 h={120} header={<span>code</span>} toolBarPosition="top">
          <h3>header toolbar</h3>
        </EvpCard>
        <EvpCard mgr_30 h={120} footer={<span>code</span>} toolBarPosition="bottom">
          <h3>footer toolbar</h3>
        </EvpCard>
        <EvpCard mgr_30 h={120} lefter={<span>code</span>} toolBarPosition="left">
          <h3>left toolbar</h3>
        </EvpCard>
        <EvpCard mgr_30 h={120} righter={<span>code</span>} toolBarPosition="right">
          <h3>right toolbar</h3>
        </EvpCard>
      </EvpCard>
      {showCode[2] ? (
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
      ) : (
        void 0
      )}
      <Md>
        {`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpCard Apis:**

- children ? : React.ReactNode
- style ? : React.CSSProperties
- contentStyle ? : React.CSSProperties
- class ? : string
- contentClass ? : string
- lefter ? : React.ReactNode
- lefterProps ? : EvpDomProps
- righter ? : React.ReactNode
- righterProps ? : EvpDomProps
- header ? : React.ReactNode
- headerProps ? : EvpDomProps
- footer ? : React.ReactNode
- footerProps ? : EvpDomProps
- cardLoading?: Make the whole card into loading status
  + type : boolean
`}
      </Md>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-menu"
        text="★ Next Doc EvpMenu >"
      />
    </div>
  );
}
