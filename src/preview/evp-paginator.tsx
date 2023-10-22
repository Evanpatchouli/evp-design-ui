import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/paginator/example";
import Quene from "./demos/paginator/quene";
import MyColor from "./demos/paginator/mycolor";
import PaginatorApi from "./apis/paginator.api";

export default function PaginatorView(props: { next?: { route: string; name: string } }) {
  const next = { route: props.next?.route ?? "evp-list", name: props.next?.name ?? "List" };
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
# Paginator

Paginator is a component that can be used to display a series of data in a paginated manner.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Paginator } from 'evp-design-ui'
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

Here are some examples about Paginator.

`}
      </Md>
      <Md>
        {`
### quene

You can use \`quene\` prop to set the order of the components. The default order is \`["total", "sizer", "taber", "jumper"]\`.
`}
      </Md>
      <Quene />
      <Md>
        {`
### Customize tab colors

You can use \`tabColor\`, \`tabBgColor\`, \`tabActiveColor\`, \`tabActiveBgColor\`, \`tabHoverColor\`, \`tabHoverBgColor\` to customize tab colors of tab.
`}
      </Md>
      <MyColor />
      <Md>
        {`
## Api

★ based on div  
★ props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

**Pagination Apis:**

`}
      </Md>
      <PaginatorApi />
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
