import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import { useEffect } from "react";
import Step from "./demos/slider/step";
import Example from "./demos/slider/example";
import Range from "./demos/slider/range";
import MinMax from "./demos/slider/min_max";
import Precision from "./demos/slider/precision";
import SliderApi from "./apis/slider.api";

export default function SliderView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="preview-container">
      <Md>
        {`
# Slider

A Slider component is a graphical control that allows users to select a value from a range. 
It is commonly used in applications to provide a simple way for users to input or modify a value within a specific range. 

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Slider } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Example />
      <Md>
        {`
## Examples

Here are some examples about Slider.

### Range

You can set range attribute to set the slider number data range by given an two-lengthed array. 
The first elem is the range start, default is 0, the second one is rhe range end, default is 100. 
`}
      </Md>
      <Range />
      <Md>
        {`
### Min & Max

You can set the minimum and maximum limits on the slider. For example, there is a slider with its range of
[0, 100], and the minimum and maximum limits are set to 20 and 80 respectively.
`}
      </Md>
      <MinMax />
      <Md>
        {`
### Step

Default step is 1, you can set the step attribute to set the step size of the slider.
`}
      </Md>
      <Step />
      <Md>
        {`
### Precision

Default precision is 0, you can set the precision to more to make the value as float.
        `}
      </Md>
      <Precision />
      <Md>
        {`
## Api 

**Slider Apis:**

★ container based on EvpCol 
`}
      </Md>
      <SliderApi />
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
