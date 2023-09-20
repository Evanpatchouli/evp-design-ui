import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function View() {
  const next = { route: "", name: "" };
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
      <Card>
        <p>Hello, i am EvpCard.</p>
        <p>I extends EvpBaseProps.</p>
        <p>I use EvpDom as container.</p>
        <p>That's me.</p>
        <EvpButton text="Greet" />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpCard.
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
        <Card>
          <h3>Templates</h3>
        </Card>
      </Card>
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
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpCard Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark"></EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.name ? `component/${next.name}` : ""}`}
        text={`★ Next Doc Evp${""} >`}
      />
    </div>
  );
}
