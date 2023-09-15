import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import { useEffect, useState } from "react";
import { EvpSlider } from "evp-design-ui";

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
<EvpCard w={400}
toolbarStyle={{
  justifyContent: 'flex-end'
}}
toolBar={
<>
  <EvpButton plain size="mini" text="Hello" />
  <EvpButton plain size="mini" text="World" />
</>}
>
  <p>Hello, i am EvpCard.</p>
  <p>I extends EvpBaseProps.</p>
  <p>I use EvpDom as container.</p>
  <p>That's me.</p>
  <EvpButton text="Greet" />
</EvpCard>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpCard Apis:**

- children? : card content
  + type: React.ReactNode
- contentStyle ? : css style of card content element
- toolBar ? : toolbar content
  + type: React.ReactNode
- toolBarPosition ? : where the toolbar is
  + default: 'bottom'
  + options: 'top' | 'bottom' | 'left' | 'right'
- toolbarStyle ? : css style of card toolbar element
- class ? : className of card;
- contentClass ? : className of card content element;
- toolBarClass ? : className of card toolbar element;
`}
      </Md>
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
