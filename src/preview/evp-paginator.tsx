import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/paginator/example";
import Quene from "./demos/paginator/quene";

export default function PaginatorView(props: { next?: { route: string; name: string } }) {
  const next = { route: props.next?.route ?? "", name: props.next?.name ?? "" };
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
## Api

★ based on div  
★ props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

**Pagination Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export interface EvpPaginatorProps
extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
class?: string;
id?: string;
children?: React.ReactNode;
currentPage?: number;
setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
/**
 * @defaultValue [number] \`5\`
 * @description how many tabs to show
 */
counters?: number;
pageSize?: number;
total: number;
/**
 * @defaultValue [boolean] \`true\`
 * @description whether to show total count of items
 */
showTotal?: boolean;
/**
 * @defaultValue [boolean] \`false\`
 * @description whether to show quick jumper
 */
showQuickJumper?: boolean;
/**
 * @defaultValue [boolean] \`false\`
 * @description whether to show size changer
 */
showSizeChanger?: boolean;
/**
 * @defaultValue [boolean] \`true\`
 * @description whether to show taber
 */
showTaber?: boolean;
onChange?: (page: number, pageSize: number) => void;
onShowSizeChange?: (current: number, size: number) => void;
onPageChange?: (current: number, pageSize: number) => void;
quene?: ArrayStrictLengthed<"total" | "sizer" | "taber" | "jumper", 4>;
}
`}
      </EvpCode>
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
