import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { Row, EvpTag, EvpCode } from "evp-design-ui";
import EvpButton from "@/lib/evp-button";
import { useEffect, useState } from "react";

export default function View() {
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
# EvpTag

A tag component is a reusable UI component that allows you to create a customizable input field with a single line of text.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpTag } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpTag text="Tag 1" />
`}
      </Tsx>
      <Card>
        <EvpTag text="Tag 1" />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpTag with three different types and seven different theme colors.
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
        <Row>
          <span style={{ marginRight: 12 }}>Default ( Deep )</span>
          <EvpTag text="White" theme="white" style={{ marginRight: 12 }} />
          <EvpTag text="Primary" theme="primary" style={{ marginRight: 12 }} />
          <EvpTag text="Success" theme="success" style={{ marginRight: 12 }} />
          <EvpTag text="Warning" theme="warning" style={{ marginRight: 12 }} />
          <EvpTag text="Danger" theme="danger" style={{ marginRight: 12 }} />
          <EvpTag text="Info" theme="info" style={{ marginRight: 12 }} />
          <EvpTag text="Dark" theme="dark" style={{ marginRight: 12 }} />
        </Row>

        <Row mgt_20>
          <span style={{ marginRight: 12 }}>Light</span>
          <EvpTag text="White" theme="white" light style={{ marginRight: 12 }} />
          <EvpTag text="Primary" theme="primary" light style={{ marginRight: 12 }} />
          <EvpTag text="Success" theme="success" light style={{ marginRight: 12 }} />
          <EvpTag text="Warning" theme="warning" light style={{ marginRight: 12 }} />
          <EvpTag text="Danger" theme="danger" light style={{ marginRight: 12 }} />
          <EvpTag text="Info" theme="info" light style={{ marginRight: 12 }} />
          <EvpTag text="Dark" theme="dark" light style={{ marginRight: 12 }} />
        </Row>

        <Row mgt_20>
          <span style={{ marginRight: 12 }}>Plain</span>
          <EvpTag text="White" theme="white" plain style={{ marginRight: 12 }} />
          <EvpTag text="Primary" theme="primary" plain style={{ marginRight: 12 }} />
          <EvpTag text="Success" theme="success" plain style={{ marginRight: 12 }} />
          <EvpTag text="Warning" theme="warning" plain style={{ marginRight: 12 }} />
          <EvpTag text="Danger" theme="danger" plain style={{ marginRight: 12 }} />
          <EvpTag text="Info" theme="info" plain style={{ marginRight: 12 }} />
          <EvpTag text="Dark" theme="dark" plain style={{ marginRight: 12 }} />
        </Row>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<Row>
  <span style={{ marginRight: 12 }}>Default ( Deep )</span>
  <EvpTag text="White" theme="white" style={{ marginRight: 12 }} />
  <EvpTag text="Primary" theme="primary" style={{ marginRight: 12 }} />
  <EvpTag text="Success" theme="success" style={{ marginRight: 12 }} />
  <EvpTag text="Warning" theme="warning" style={{ marginRight: 12 }} />
  <EvpTag text="Danger" theme="danger" style={{ marginRight: 12 }} />
  <EvpTag text="Info" theme="info" style={{ marginRight: 12 }} />
  <EvpTag text="Dark" theme="dark" style={{ marginRight: 12 }} />
</Row>

<Row mgt_20>
  <span style={{ marginRight: 12 }}>Light</span>
  <EvpTag text="White" theme="white" light style={{ marginRight: 12 }} />
  <EvpTag text="Primary" theme="primary" light style={{ marginRight: 12 }} />
  <EvpTag text="Success" theme="success" light style={{ marginRight: 12 }} />
  <EvpTag text="Warning" theme="warning" light style={{ marginRight: 12 }} />
  <EvpTag text="Danger" theme="danger" light style={{ marginRight: 12 }} />
  <EvpTag text="Info" theme="info" light style={{ marginRight: 12 }} />
  <EvpTag text="Dark" theme="dark" light style={{ marginRight: 12 }} />
</Row>

<Row mgt_20>
  <span style={{ marginRight: 12 }}>Plain</span>
  <EvpTag text="White" theme="white" plain style={{ marginRight: 12 }} />
  <EvpTag text="Primary" theme="primary" plain style={{ marginRight: 12 }} />
  <EvpTag text="Success" theme="success" plain style={{ marginRight: 12 }} />
  <EvpTag text="Warning" theme="warning" plain style={{ marginRight: 12 }} />
  <EvpTag text="Danger" theme="danger" plain style={{ marginRight: 12 }} />
  <EvpTag text="Info" theme="info" plain style={{ marginRight: 12 }} />
  <EvpTag text="Dark" theme="dark" plain style={{ marginRight: 12 }} />
</Row>
`}
      </Tsx>
      <Md>
        {`
### Size

We provide three different sizes for EvpTag, you can use \`size\` props to set it.
        `}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(2)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Row mgt_20>
          <EvpTag text="Default" light style={{ marginRight: 12 }} />
          <EvpTag text="Small" light size="sm" style={{ marginRight: 12 }} />
          <EvpTag text="Middle" light size="md" style={{ marginRight: 12 }} />
          <EvpTag text="Large" light size="lg" style={{ marginRight: 12 }} />
        </Row>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<Row mgt_20>
  <EvpTag text="Default" light style={{ marginRight: 12 }} />
  <EvpTag text="Small" light size="sm" style={{ marginRight: 12 }} />
  <EvpTag text="Middle" light size="md" style={{ marginRight: 12 }} />
  <EvpTag text="Large" light size="lg" style={{ marginRight: 12 }} />
</Row>
`}
      </Tsx>
      <Md>
        {`
### Rounded

You can use \`round\` props to set EvpTag's radius types.
        `}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton $click={() => clickCode(3)} theme="text" size="mini" text="code" />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Row mgt_20>
          <EvpTag text="Default" light style={{ marginRight: 12 }} />
          <EvpTag text="Round" light round style={{ marginRight: 12 }} />
        </Row>
      </Card>
      <Tsx show={showCode[3]}>
        {`
<Row mgt_20>
  <EvpTag text="Default" light style={{ marginRight: 12 }} />
  <EvpTag text="Round" light round style={{ marginRight: 12 }} />
</Row>
        `}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div  
★ props extends React.HTMLAttributes<HTMLDivElement>

**EvpTag Apis:**
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpTagProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The tag's text.
   */
  children?: React.ReactNode;
  text?: string;
  class?: string;
  theme?:
    | "white"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "dark";
  plain?: boolean;
  deep?: boolean;
  light?: boolean;
  /** Default is \`md\` */
  size?: "sm" | "md" | "lg";
  round?: boolean;
}
`}
      </EvpCode>
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
