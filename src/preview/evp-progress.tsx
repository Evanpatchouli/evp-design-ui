import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/progress/example";
import Size from "./demos/progress/size";
import Color from "./demos/progress/color";

export default function ProgressView() {
  const next = { route: "evp-steps", name: "Steps" };
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
# Progress

A progress component is a software component that displays the progress of a task or a project.
 It typically includes features such as a progress bar, a percentage completion, and a status message.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Progress } from 'evp-design-ui'
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

Here are some examples about Progress.

`}
      </Md>
      <Md>
        {`
### size

You can set the size of Progress by \`size\` prop. The default size is \`100px\`.   
The available values are \`sm\` (40px) , \`md\` (100px) , \`lg\` (200px) or a valid number.
`}
      </Md>
      <Size />
      <Md>
        {`
### color

You can customize the color of blank, fill, text, textMask by setting the \`blankColor\`, \`fillColor\`, \`textColor\`, \`textBlankColor\` props.
`}
      </Md>
      <Color />
      <Md>
        {`
## Api

★ based on div  
★ props extends React.DOMAttributes<HTMLDivElement> (events: onClick ...etc)

**Progress Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type EvpProgressProps = {
  value?: number;
  onChange?: (value: number) => void;
  size?: number | "sm" | "md" | "lg";
  min?: number;
  max?: number;
  fillColor?: string;
  textColor?: string;
  blankColor?: string;
  textBlankColor?: string;
  class?: string;
  id?: string;
  style?: React.CSSProperties;
} & React.DOMAttributes<HTMLDivElement>;
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
