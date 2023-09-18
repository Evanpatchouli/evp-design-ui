import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, EvpAnchor } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function AnchorView() {
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
# EvpAnchor

Collect several infos and show in a card container.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpAnchor } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<div id="First Demo">First Demo</div>
<EvpAnchor id="First Demo">
  <EvpButton>To "First Demo"</EvpButton>
</EvpAnchor>
`}
      </Tsx>
      <Card>
        <div id="First_Demo">First_Demo</div>
        <EvpAnchor id="First_Demo">
          <EvpButton>To "First_Demo"</EvpButton>
        </EvpAnchor>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpAnchor.

### Hash

props.id should be a string that one another element to bind its id with.

Default, EvpAnchor use dom selector to reach the target element. If you set **hash** to true, its div container will be replaced with \`<a />\` to reach the target, 
if your route is already a hash route, you'd better not to use hash EvpAnchor, because it will change the route.

Therefore, it is suggested to use EvpAnchor without hash.
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
        <div id="Second_Demo">Second_Demo</div>
        <EvpAnchor id="Second_Demo">
          <EvpButton>To "Second Demo"</EvpButton>
        </EvpAnchor>
        <div id="Third_Demo">Third_Demo</div>
        <EvpAnchor id="Third_Demo" hash>
          <EvpButton>To "Third_Demo"</EvpButton>
        </EvpAnchor>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<div id="Second_Demo">Second_Demo</div>
<EvpAnchor id="Second_Demo">
  <EvpButton>To "Second Demo"</EvpButton>
</EvpAnchor>
<div id="Third_Demo">Third_Demo</div>
<EvpAnchor id="Third_Demo" hash>
  <EvpButton>To "Third_Demo"</EvpButton>
</EvpAnchor>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div or a 
★ props extends React.HTMLAttributes<HTMLDivElement> or React.HTMLAttributes<HTMLAnchorElement>

**EvpAnchor Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpAnchorProps = EvpAchorAProps | EvpAchorDivProps;

interface EvpAchorAProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** target element's id */
  id: string;
  class?: string;
  children?: React.ReactNode;
  hash: true;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

interface EvpAchorDivProps extends React.HTMLAttributes<HTMLDivElement> {
  /** target element's id */
  id: string;
  class?: string;
  children?: React.ReactNode;
  hash?: undefined | false;
  behavior?: "smooth" | "instant" | "auto";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}
        `}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-breadcrumb"
        text={`★ Next Doc Evp${"BreadCrumb"} >`}
      />
    </div>
  );
}
