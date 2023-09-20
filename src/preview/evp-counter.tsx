import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, EvpCounter } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function CounterView() {
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
# EvpCounter

A counter component is a part of a computer system or 
application that measures the frequency or count of events or data occurrences.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpCounter } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpCounter label={"Members"} min={0} max={5} required></EvpCounter>
`}
      </Tsx>
      <Card>
        <EvpCounter label={"Members"} min={0} max={5} required></EvpCounter>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpCounter.

Default the counter has no range, but you can set min and max to limit it.

Besides, you can set step to change the step of the counter ( default is 1 ).
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
        <EvpCounter
          label={"None limited"}
          labelWidth={110}
          labelAlign="right"
          required
        />
        <EvpCounter
          label={"Limited 2 Step"}
          labelWidth={110}
          labelAlign="right"
          min={0}
          max={10}
          step={2}
          required
        />
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpCounter
  label={"None limited"}
  labelWidth={110}
  labelAlign="right"
  required
/>
<EvpCounter
  label={"Limited 2 Step"}
  labelWidth={110}
  labelAlign="right"
  min={0}
  max={5}
  step={2}
  required
/>
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
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpCounterProps extends EvpBaseProps {
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Default is false */
  labelColon?: boolean | React.ReactNode;
  /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
  required?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  min?: number;
  max?: number;
  /** Default is 1 */
  step?: number;
  value?: number;
  defaultValue?: number;
}
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-switch"
        text={`★ Next Doc Evp${"Switch"} >`}
      />
    </div>
  );
}
