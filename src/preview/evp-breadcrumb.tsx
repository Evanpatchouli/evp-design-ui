import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton, EvpBreadCrumb } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function BreadCrumbView() {
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
# EvpBreadCrumb

A BreadCrumb is a web application component that displays a hierarchical navigation path, 
typically used in a web application to navigate between pages or sections of the application.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpBreadCrumb } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpBreadCrumb routes={[
  { title: 'Home', path: "/" },
  { title: 'Components', path: "/components" },
  { title: 'BreadCrumb', path: "/components/evp-breadcrumb" }
]} />
`}
      </Tsx>
      <Card>
        <EvpBreadCrumb
          routes={[
            { title: "Home", path: "/" },
            { title: "Components", path: "/components" },
            { title: "BreadCrumb", path: "/components/evp-breadcrumb" },
          ]}
        />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpBreadCrumb.

### route.path

Only when route.path exists, can the breadcrumb items be clicked.
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
        <EvpBreadCrumb routes={[{ title: "Home" }, { title: "Components" }, { title: "BreadCrumb" }]} />
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpBreadCrumb
  routes={[
    { title: "Home" },
    { title: "Components" },
    { title: "BreadCrumb" },
  ]}
/>
`}
      </Tsx>
      <Md>
        {`
### itemClick

You can customize the click event handler of routes items by set itemClick. The second param is route item.
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
        <EvpBreadCrumb
          routes={[
            { title: "Home", path: "/", meta: { desc: "home route" } },
            { title: "Components", path: "/components", meta: { desc: "components route" } },
            { title: "BreadCrumb", path: "/components/evp-breadcrumb", meta: { desc: "evp-breadcrumb route" } },
          ]}
          itemClick={(e, route) => {
            alert(route?.meta?.desc);
          }}
        />
      </Card>
      <Tsx show={showCode[2]}>
        {`
<EvpBreadCrumb
  routes={[
    { title: "Home", path: "/", meta: { desc: "home route" } },
    { title: "Components", path: "/components", meta: { desc: "components route" } },
    { title: "BreadCrumb", path: "/components/evp-breadcrumb", meta: { desc: "evp-breadcrumb route" } },
  ]}
  itemClick={(e, route) => {
    alert(route?.meta?.desc);
  }}
/>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div  
★ props extends EvpBaseProps  
★ items based on span

**EvpBreadCrumb Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpBreadCrumbProps extends EvpBaseProps {
  routes?: { title: string; path?: string | { path?: string; hash?: boolean }; hash?: boolean; meta?: any }[];
  itemClick?: <T extends Record<string, unknown>>(
    e?: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    route?: { title: string; path?: string | { path?: string; hash?: boolean }; hash?: boolean; meta?: T }
  ) => void;
  fontSize?: string;
  class?: string;
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
        link="/components/"
        text={`★ Next Doc Evp${""} >`}
      />
    </div>
  );
}
