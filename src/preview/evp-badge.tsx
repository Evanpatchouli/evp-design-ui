import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode, Row } from "@/lib";
import { EvpButton, EvpBadge, EvpIcon } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function BadgeView() {
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
# EvpBadge

A badge is a web application component that displays a small piece of information, such as a count or a status, on an item.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpBadge } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpBadge content={1} mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
`}
      </Tsx>
      <Card>
        <EvpBadge content={1} mgr_14>
          <EvpIcon name="warn" />
        </EvpBadge>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpBadge.

If the badge content is a number and greater than the **max** value, the badge content will be replaced by the (max value - 1) plus a plus sign.  
(Default max value is 100, if you do not wanna max, you can set the max value to much more great number like 9999)
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
          <EvpBadge content={1} mgr_14>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={24} mgr_18>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={1024} mgr_24>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={1024} max={1000}>
            <EvpIcon name="warn" />
          </EvpBadge>
        </Row>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpBadge content={1} mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={24} mgr_18>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={1024} mgr_24>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={1024} max={1000}>
  <EvpIcon name="warn" />
</EvpBadge>
`}
      </Tsx>
      <Md>
        {`
### show & invisble & showZero

If you wanna to not show badge dot element, you can set **show** to false to hidden it.

If you wanna to not show exactly content of badge dot, you can set **invisble** to true to make it only a small dot.

Default, when content is number 0, the badge dot will hidden, if you want to show it anyway, you can set **showZero** to true.
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
        <Row>
          <EvpBadge content={20} show={false} mgr_14>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={20} invisble mgr_14>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={0} mgr_14>
            <EvpIcon name="warn" />
          </EvpBadge>
          <EvpBadge content={0} showZero mgr_14>
            <EvpIcon name="warn" />
          </EvpBadge>
        </Row>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<EvpBadge content={20} show={false} mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={20} invisble mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={0} mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
<EvpBadge content={0} showZero mgr_14>
  <EvpIcon name="warn" />
</EvpBadge>
        `}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div  
★ props extends EvpBaseProps

**EvpBadge Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpBadgeProps extends EvpBaseProps {
  /** badge dot content should be a number or string*/
  content?: string | number;
  /** max limit of number content */
  max?: number;
  /** dot size */
  size?: "sm" | "md" | "lg" | number;
  /** whether to show badge dot */
  show?: boolean;
  /** whether to show badge dot when number content is 0, default is false */
  showZero?: boolean;
  /** whether to show exactly badge content, default is true */
  invisble?: boolean;
  children?: React.ReactNode;
  /** component className */
  class?: string;
  /** component CSS style */
  style?: React.CSSProperties;
  /** dot className */
  dotClass?: string;
  /** dot CSS style */
  dotStyle?: React.CSSProperties;
  /** wrap children with a new div? Default is true*/
  childrenContainer?: boolean;
  /** content container className */
  childrenClass?: string;
  /** content container CSS style */
  childrenStyle?: React.CSSProperties;
}
        `}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-anchor"
        text={`★ Next Doc Evp${"Anchor"} >`}
      />
    </div>
  );
}
