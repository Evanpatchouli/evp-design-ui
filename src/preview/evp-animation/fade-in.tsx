import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "../demos/animation/fade-in/example";
import AnimationApi from "../apis/animation.api";
import Trigger from "../demos/animation/fade-in/trigger";

export default function AnimationView() {
  const next = { route: "evp-animation/ZoomIn", name: "ZoomIn" };
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
# Animation.FadeIn

FadeIn is an effect that makes a element zoom fade in.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Animation } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**example:**
`}
      </Md>
      <Example />
      <Md>
        {`
## Examples

Here are some examples about Animation.Flip

`}
      </Md>
      <Md>
        {`
### Trigger

You can choose trigger between "click" and "hover" events
`}
      </Md>
      <Trigger />
      <Md>
        {`
## Api

★ based on div  
★ props extends Div

**Animation Apis:**

`}
      </Md>
      <AnimationApi />
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
