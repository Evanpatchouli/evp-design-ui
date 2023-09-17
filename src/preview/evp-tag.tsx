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
      behavior: 'smooth'
    });
  }, [])
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  })

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  }
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

Here are some examples about EvpCard.
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
        <Row>
          <EvpTag text="Tag 1" theme="white" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="primary" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="success" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="warning" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="danger" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="info" style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="dark" style={{ marginRight: 12 }} />
        </Row>

        <Row mgt_20>
          <EvpTag
            text="Tag 1"
            theme="white"
            light
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="primary"
            light
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="success"
            light
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="warning"
            light
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="danger"
            light
            style={{ marginRight: 12 }}
          />
          <EvpTag text="Tag 1" theme="info" light style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="dark" light style={{ marginRight: 12 }} />
        </Row>

        <Row mgt_20>
          <EvpTag
            text="Tag 1"
            theme="white"
            plain
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="primary"
            plain
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="success"
            plain
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="warning"
            plain
            style={{ marginRight: 12 }}
          />
          <EvpTag
            text="Tag 1"
            theme="danger"
            plain
            style={{ marginRight: 12 }}
          />
          <EvpTag text="Tag 1" theme="info" plain style={{ marginRight: 12 }} />
          <EvpTag text="Tag 1" theme="dark" plain style={{ marginRight: 12 }} />
        </Row>
      </Card>
      <Tsx show={showCode[1]}>
{`
<Row>
  <EvpTag text="Tag 1" theme="white" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="primary" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="success" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="warning" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="danger" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="info" style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="dark" style={{ marginRight: 12 }} />
</Row>

<Row mgt_20>
  <EvpTag text="Tag 1" theme="white" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="primary" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="success" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="warning" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="danger" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="info" light style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="dark" light style={{ marginRight: 12 }} />
</Row>

 <Row mgt_20>
  <EvpTag text="Tag 1" theme="white" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="primary" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="success" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="warning" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="danger" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="info" plain style={{ marginRight: 12 }} />
  <EvpTag text="Tag 1" theme="dark" plain style={{ marginRight: 12 }} />
</Row>
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
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
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
