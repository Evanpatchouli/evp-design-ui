import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, EvpLabel } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function LabelView() {
  const next = { route: "evp-modal", name: "Modal" };
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
# LabelView

Label is a descriptor for UI elements. It can be used to tell us what an object is or to highlight the status of an object.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpLabel } from 'evp-design-ui'
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
  <EvpLabel label={"Notice"}>
    evp-design-ui is a funny ui library.
  </EvpLabel>
</Card>
`}
      </Tsx>
      <Card>
        <EvpLabel label={"Notice"}>
          evp-design-ui is a funny ui library.
        </EvpLabel>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpLabel.

Label is almost same to FormItem's label, so you can use it as a FormItem's label.
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
        <EvpLabel required label={"User"}>
          <input />
        </EvpLabel>
        <EvpLabel required label={"User"} labelPosition="top">
          <input />
        </EvpLabel>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<Card>
  <EvpLabel required label={"User"}>
    <input />
  </EvpLabel>
  <EvpLabel required label={"User"} labelPosition="top">
    <input />
  </EvpLabel>
</Card>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div  

**EvpLabel Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpLabelProps = {
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  labelPosition?: "top" | "left";
  /** Default is false */
  labelColon?: boolean | React.ReactNode;
  /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
  required?: boolean;
  children?: React.ReactNode;
  containerClass?: string;
  containerStyle?: React.CSSProperties;
  class?: string;
  style?: React.CSSProperties;
};
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${next.route ? `components/${next.route}` : ""}`}
        text={`★ Next Doc Evp${next.name} >`}
      />
    </div>
  );
}
