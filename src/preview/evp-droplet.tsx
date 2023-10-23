import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/droplet/example";
import DropletApi from "./apis/droplet.api";
import LightSpot from "./demos/droplet/lightSpot";
import LightSpotSize from "./demos/droplet/lightSpotSize";

export default function DropletView() {
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
# Droplet

Droplet is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Droplet } from 'evp-design-ui'
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

Here are some examples about Droplet.

### display

Default, the Droplet is of flex display, and its \`justify-content\` and \`align-items\` are both \`center\`,
you can set \`display\`, \`justifyContent\` and \`alignItems\` to change it.

### lightSpot

Default, the Droplet will generate light spot of random amount, 
you can set \`lightSpot\` to \`false\` to disable it, or set \`lightSpot\` to a number to set the number of light spot.
`}
      </Md>
      <LightSpot />
      <Md>
        {`
### lightSpotSize

Default, the Droplet will generate light spot of random size between 4px and 12px, 
you can set \`lightSpotSize\` to customize the size of light spot.
`}
      </Md>
      <LightSpotSize />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**Droplet Apis:**

`}
      </Md>
      <DropletApi />
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
