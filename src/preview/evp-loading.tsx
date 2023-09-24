import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { Button, EvpCode, Row } from "@/lib";
import { EvpButton, Loading, Label } from "evp-design-ui";
import { useEffect, useState } from "react";

export default function LoadingView() {
  const next = { route: "evp-label", name: "Label" };
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

  const [btnLoading, setBtnLoading] = useState(true);

  return (
    <div className="preview-container">
      <Md>
        {`
# EvpLoading

Loading is an element that shows the loading status of a component or page.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Card, Loading } from 'evp-design-ui'
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
  <Loading.Spin />
</Card>
`}
      </Tsx>
      <Card>
        <Loading.Spin />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpLoading.

We provides total 8 types of loading. The last one **Text** is a little special, as you can see,
it's smaller than others, its size make it easy to be placed in a text.
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
          <Label labelWidth={80} label={"Wave"}>
            <Loading.Wave style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"BreatheSpin"}>
            <Loading.BreatheSpin style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"Grid"}>
            <Loading.Grid style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"Spin"}>
            <Loading.Spin style={{ marginRight: 48 }} />
          </Label>
        </Row>
        <Row>
          <Label labelWidth={80} label={"Spin2"}>
            <Loading.Spin2 style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"SpinDot"}>
            <Loading.SpinDot style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"Chase"}>
            <Loading.Chase style={{ marginRight: 48 }} />
          </Label>
          <Label labelWidth={80} label={"Text"}>
            <Loading.Text style={{ marginRight: 48 }} />
          </Label>
        </Row>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<Card>
  <Label labelWidth={80} label={"Wave"}>
    <Loading.Wave style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"BreatheSpin"}>
    <Loading.BreatheSpin style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"Grid"}>
    <Loading.Grid style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"Spin"}>
    <Loading.Spin style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"Spin2"}>
    <Loading.Spin2 style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"SpinDot"}>
    <Loading.SpinDot style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"Chase"}>
    <Loading.Chase style={{ marginRight: 48 }} />
  </Label>
  <Label labelWidth={80} label={"Text"}>
    <Loading.Text style={{ marginRight: 48 }} />
  </Label>
</Card>
`}
      </Tsx>
      <Md>
        {`
### Size

You can set props.size to change its size. (Default is 2em and desided by the parent element's font-size)
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              $click={() => clickCode(2)}
              theme="text"
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Row>
          <Label label={"Default"} containerStyle={{ marginRight: 24 }}>
            <Loading.Wave />
          </Label>
          <Label label={"Size 20"} containerStyle={{ marginRight: 24 }}>
            <Loading.Wave size={20} />
          </Label>
          <Label label={"Size 30"} containerStyle={{ marginRight: 24 }}>
            <Loading.Wave size={30} />
          </Label>
        </Row>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<Card>
  <Row>
    <Label label={"Default"} containerStyle={{ marginRight: 24 }}>
      <Loading.Wave />
    </Label>
    <Label label={"Size 20"} containerStyle={{ marginRight: 24 }}>
      <Loading.Wave size={20} />
    </Label>
    <Label label={"Size 30"} containerStyle={{ marginRight: 24 }}>
      <Loading.Wave size={30} />
    </Label>
  </Row>
</Card>
`}
      </Tsx>
      <Md>
        {`
### Color

Default loading color is a bit lighter blue, you can set props.color to customize it.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              $click={() => clickCode(3)}
              theme="text"
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Row>
          <Label label={"Default"} labelPosition="top">
            <Loading.Grid />
          </Label>
          <Label label={"Red"} labelPosition="top">
            <Loading.Grid color="red" />
          </Label>
          <Label label={"Blue"} labelPosition="top">
            <Loading.Grid color="blue" />
          </Label>
        </Row>
      </Card>
      <Tsx show={showCode[3]}>
        {`
<Card>
  <Row>
    <Label label={"Default"} labelPosition="top">
      <Loading.Grid />
    </Label>
    <Label label={"Red"} labelPosition="top">
      <Loading.Grid color="red" />
    </Label>
    <Label label={"Blue"} labelPosition="top">
      <Loading.Grid color="blue" />
    </Label>
  </Row>
</Card>
`}
      </Tsx>
      <Md>
        {`
### Component loading
You can alse make other components loadable if supported. By now, only Button is supported.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              $click={() => clickCode(4)}
              theme="text"
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <Button
          plain
          $click={() => {
            setBtnLoading(!btnLoading);
          }}
          text="Switch"
        />
        <Button
          loading={btnLoading}
          text={btnLoading ? "Loading..." : "Normal"}
          mgl_12
        />
      </Card>
      <Tsx show={showCode[4]}>
        {`
<Card>
  <Button
    plain
    $click={() => {
      setBtnLoading(!btnLoading);
    }}
    text="Switch"
  />
  <Button
    loading={btnLoading}
    text={btnLoading ? "Loading..." : "Normal"}
    mgl_12
  />
</Card>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on div  
★ props extends React.HTMLAttributes<HTMLDivElement>

**EvpCard Apis:**
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  size?: number | string;
  style?: Omit<React.CSSProperties, "fontSize">;
}`}
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
