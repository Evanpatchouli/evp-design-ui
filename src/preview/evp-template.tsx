
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/template/example";
import TemplateApi from "./apis/template.api";

export default function TemplateView() {
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
# Template

Template is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Template } from 'evp-design-ui'
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

Here are some examples about Template.

`}
      </Md>
      <Example />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**Template Apis:**

`}
      </Md>
      <TemplateApi />
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

