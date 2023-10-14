import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/rate/example";
import RateApi from "./apis/rate.api";
import Controller from "./demos/rate/controll";
import StarColor from "./demos/rate/starColor";

export default function RateView() {
  const next = { route: "evp-ghost-button-group", name: "GhostButtonGroup" };
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
# Rate

Rate is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Rate } from 'evp-design-ui'
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

Here are some examples about Rate.

You can controlled the value of Rate by \`value\` props.

`}
      </Md>
      <Controller />
      <Md>
        {`
## starColor

Default the color of selected is Color.DeepYellow, and the unselected color is Color.Gray. You can
change the color by \`starColor\` props.
`}
      </Md>
      <StarColor />
      <Md>
        {`
## Api

★ based on Dom  
★ props extends EvpDomProps

**Rate Apis:**

`}
      </Md>
      <RateApi />
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
