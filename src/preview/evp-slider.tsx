import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import { useEffect, useState } from "react";
import { EvpCode, EvpSlider } from "evp-design-ui";

export default function SliderView() {
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
# EvpSlider

A slider component is a graphical control that allows users to select a value from a range. 
It is commonly used in applications to provide a simple way for users to input or modify a value within a specific range. 

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpSlider } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpSlider name="slider-demo" defaultValue={20} />
`}
      </Tsx>
      <Card>
        <EvpSlider name="slider-demo" defaultValue={20} />
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpSlider.

### Range

You can set range attribute to set the slider number data range by given an two-lengthed array. 
The first elem is the range start, default is 0, the second one is rhe range end, default is 100. 
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
        <EvpSlider name="slider-demo-1" range={[10, 50]} defaultValue={20} />
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpSlider name="slider-demo-1" range={[10, 50]} defaultValue={20} />
`}
      </Tsx>
      <Md>
        {`
### Min & Max

You can set the minimum and maximum limits on the slider. For example, there is a slider with its range of
[0, 100], and the minimum and maximum limits are set to 20 and 80 respectively.
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
        <EvpSlider
          name="slider-demo-2"
          range={[0, 100]}
          min={20}
          max={80}
          defaultValue={0}
        />
      </Card>
      <Tsx show={showCode[2]}>
        {`
<EvpSlider
  name="slider-demo-1"
  range={[0, 100]}
  min={20}
  max={80}
  defaultValue={0}
/>
`}
      </Tsx>
      <Md>
        {`
### Precision

Default precision is 0, you can set the precision to more to make the value as float.
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
        <EvpSlider
          name="slider-demo-3"
          range={[0, 100]}
          defaultValue={75.0}
          precision={1}
        />
      </Card>
      <Tsx show={showCode[2]}>
        {`
<EvpSlider
  name="slider-demo-3"
  range={[0, 100]}
  defaultValue={75.00}
  precision={2}
/>
`}
      </Tsx>
      <Md>
        {`
## Api 

**EvpSlider Apis:**

★ container based on EvpCol 
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpSliderProps = {
  name: string;
  class?: string;
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
  required?: boolean;
 
  value?: number;
  /** default is 0 */
  defaultValue?: number;
  /** start (default 0) to end (default 100) */
  range?: ArrayLengthed<number | undefined, 2>;
  /** min limit, default is 0 */
  min?: number;
  /** max limit, default is max */
  max?: number;
  /** value precision, default is 0 */
  precision?: number;
  /** max width (px) or slider bar */
  width?: number;
  /** whether to show etc, default is true */
  showEtc?: boolean;
  style?: React.CSSProperties;
  /**
   * @Todo unstart now
   * @Exterminal unsupport now */
  step?: number;
}
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-form"
        text="★ Next Doc EvpForm >"
      />
    </div>
  );
}
