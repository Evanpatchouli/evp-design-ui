
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/circle/example";
import CircleApi from "./apis/circle.api";

export default function CircleView() {
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
# Circle

Circle is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Circle } from 'evp-design-ui'
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

Here are some examples about Circle.

`}
      </Md>
      <Example />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**Circle Apis:**

`}
      </Md>
      <CircleApi />
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

