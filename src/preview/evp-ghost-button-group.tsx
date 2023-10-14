import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/ghost-button-group/example";
import GhostButtonGroupApi from "./apis/ghost-button-group.api";
import Cosy from "./demos/ghost-button-group/cosy";
import Gap from "./demos/ghost-button-group/gap";

export default function GhostButtonGroupView() {
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
# GhostButtonGroup

GhostButtonGroup is a button component that can expand a quene of other buttons.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { GhostButtonGroup } from 'evp-design-ui'
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

Here are some examples about GhostButtonGroup.

Besides the additional props, it is nothing different from the common Button.
`}
      </Md>
      <Cosy />
      <Md>
{`
### gap

You can set gap to controll the distance between the buttons grouped.
`}
      </Md>
      <Gap />
      <Md>
        {`
## Api

★ based on Button  
★ props extends EvpButtonProps

**GhostButtonGroup Apis:**

`}
      </Md>
      <GhostButtonGroupApi />
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
