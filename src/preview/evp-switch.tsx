import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, Row, EvpSwitch, EvpTag } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function SwitchView() {
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
# EvpSwitch

A switch component is a part of an electric circuit that allows 
the flow of current or power only through a specific path or route.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpSwitch } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<Card>
  <Row>
    <EvpTag plain style={{ marginRight: 12 }} text="Click Switcher" />
    <EvpSwitch defaultActive />
  </Row>
</Card>
`}
      </Tsx>
      <Card>
        <Row>
          <EvpTag plain style={{ marginRight: 12 }} text="Click Switcher" />
          <EvpSwitch label="Switcher" defaultActive required />
        </Row>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpSwitch.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              $click={() => clickCode(1)}
              theme="text"
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpSwitch label="Switcher" />
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpSwitch label="Switcher" />
`}
      </Tsx>
      <Md>
        {`
## EvpSwitch

★ container based on div  
★ props extends none

**EvpCard Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpSwitchProps = IEvpSwitchProp;
interface IEvpSwitchProp {
  class?: string;
  /** If name exists, the component will be a formItem and try to register to formContext */
  name?: string;
  active?: boolean;
  defaultActive?: boolean;
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
  required?: boolean;
  style?: React.CSSProperties;
}
`}
      </EvpCode>
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
