
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/frosted-glass/example";
import FrostedGlassApi from "./apis/frosted-glass.api";

export default function FrostedGlassView() {
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
# FrostedGlass

FrostedGlass is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { FrostedGlass } from 'evp-design-ui'
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

Here are some examples about FrostedGlass.

`}
      </Md>
      <Md>
        {`
## Api

★ based on EvpDom  
★ props extends EvpBaseProps

**FrostedGlass Apis:**

`}
      </Md>
      <FrostedGlassApi />
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

