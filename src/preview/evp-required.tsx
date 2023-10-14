import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/required/example";
import Layout from "./demos/required/layout";
import RequiredApi from "./apis/required";

export default function RequiredView(props: {
  next?: {
    route?: string;
    name?: string;
  };
}) {
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
# Required

A Required component is a component that make a required tag.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Required } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Example />
      <Md>
        {`
## Examples

Here are some examples about Anchor.

### layout

Default, Required is a inline-block element. If you use it before a common text, it will be a little bit higher than the text. 
You can put them into flexed-row.
`}
      </Md>
      <Layout />
      <Md>
        {`
## Api

★ container based on div or <a>   
★ props extends React.HTMLAttributes<HTMLDivElement> or React.HTMLAttributes<HTMLAnchorElement>

**Anchor Apis:**

`}
      </Md>
      <RequiredApi />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link={`/${props.next?.route ? "components/" + props.next?.route : "components/evp-waterfalls"}`}
        text={`★ Next Doc Evp${props.next?.name ?? "Waterfalls"} >`}
      />
    </div>
  );
}
