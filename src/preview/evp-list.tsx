import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/list/example";
import ListApi from "./apis/list.api";

export default function ListView() {
  const next = { route: "evp-img", name: "Img" };
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
# List

List is a component that ...

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { List } from 'evp-design-ui'
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

Here are some examples about List.

List is simiar to Table but more flexible. Therefore it is more suitable for rendering complex data.
Nothing else needs to be said, just use it like mapped.

`}
      </Md>
      <Md>
        {`
## Api

★ based on div  
★ props extends DomAttribus<HTMLDivElement>

**List Apis:**

`}
      </Md>
      <ListApi />
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
