import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/anchor/example";
import Hash from "./demos/anchor/hash";
import AnchorApi from "./apis/anchor";

export default function AnchorView() {
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
# Anchor

An Anchor component is a component that allows you to create links within a React application. 
It is often used to create links to other pages, documents, or other parts of the application.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Anchor } from 'evp-design-ui'
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

### Hash

props.id should be a string that one another element to bind its id with.

Default, Anchor use dom selector to reach the target element. If you set **hash** to true, its div container will be replaced with \`<a />\` to reach the target, 
if your route is already a hash route, you'd better not to use hash Anchor, because it will change the route.

Therefore, it is suggested to use Anchor without hash.
`}
      </Md>
      <Hash />
      <Md>
        {`
## Api

★ container based on div or <a>   
★ props extends React.HTMLAttributes<HTMLDivElement> or React.HTMLAttributes<HTMLAnchorElement>

**Anchor Apis:**

`}
      </Md>
      <AnchorApi />
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-breadcrumb"
        text={`★ Next Doc Evp${"BreadCrumb"} >`}
      />
    </div>
  );
}
