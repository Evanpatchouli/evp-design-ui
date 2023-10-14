import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/title/example";
import Size from "./demos/title/size";
import Stress from "./demos/title/stress";
import Weight from "./demos/title/weight";
import TitleApi from "./apis/title";

export default function TitleView() {
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
# Title

Title is a component.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Title } from 'evp-design-ui'
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

Here are some examples about Title.

### Size

You can set the size of Title by setting \`size\`, \`fontSize\`, or \`style.fontSize\` prop.
`}
      </Md>
      <Size />
      <Md>
        {`
### Stress

You can set the stress line of Title by setting \`stressed\` prop. And you can set color of stress line by setting \`stressLineColor\` prop.
`}
      </Md>
      <Stress />
      <Md>
        {`
### Weight

You can set the weight of Title by setting \`weight\` prop.
`}
      </Md>
      <Weight />
      <Md>
        {`
`}
      </Md>
      <Md>
        {`
## Api

★ based on div  
★ props extends Div but not applied to component container but title content.

**Title Apis:**

`}
      </Md>
      <TitleApi />
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
