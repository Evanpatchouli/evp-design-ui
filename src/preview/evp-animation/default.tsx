import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "../demos/animation/index/example";
import AnimationApi from "../apis/animation.api";
import Trigger from "../demos/animation/index/trigger";

export default function AnimationView() {
  const next = { route: "", name: "" };
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
# Animation

Animation allows you to inject any animation to this container.

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

Here are some examples about Animation.

Using Animation, you need to create a keyframe animation in css file and a same name class to apply it. 
And then assign the class name to Animation component's \`name\` prop.
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
