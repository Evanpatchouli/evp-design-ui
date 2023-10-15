import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/css/example";
import CssApi from "./apis/css.api";
import Many from "./demos/css/many";

export default function CssView() {
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
# Css

Css is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Css } from 'evp-design-ui'
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

Here are some examples about Css.

Every member of the Css will exports style, name or id.

`}
      </Md>
      <Many />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**Css Apis:**

`}
      </Md>
      <CssApi />
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
