
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/snake/example";
import SnakeApi from "./apis/snake.api";

export default function SnakeView() {
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
# Snake

Snake is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Snake } from 'evp-design-ui'
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

Here are some examples about Snake.

`}
      </Md>
      <Example />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**Snake Apis:**

`}
      </Md>
      <SnakeApi />
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

