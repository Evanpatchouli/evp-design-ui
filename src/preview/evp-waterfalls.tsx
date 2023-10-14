import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/waterfalls/example";
import WaterFallsApi from "./apis/waterfalls.api";

export default function WaterfallsView() {
  const next = { route: "evp-slides", name: "Slides" };
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
# WaterFalls

WaterFalls is a component that can show image in a container with preview.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { WaterFalls } from 'evp-design-ui'
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

Here are some examples about WaterFalls.

`}
      </Md>

      <Md>
        {`
## Api

★ based on flexed div  
★ props extends div

**WaterFalls Apis:**

`}
      </Md>
      <WaterFallsApi />
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
