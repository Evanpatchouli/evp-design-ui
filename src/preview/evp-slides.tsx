import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/slides/example";

export default function SlidesView() {
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
# Slides

Slides is a component that can be used to display a series of items in a carousel.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Slides } from 'evp-design-ui'
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

Here are some examples about Slides.

`}
      </Md>

      <Md>
        {`
## Api

★ based on div
★ props extends Div

**Slides Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
interface BaseImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  alt: string;
  preview?: boolean;
  setPreview?: React.Dispatch<React.SetStateAction<boolean>>;
}

export type EvpImgProps = {} & BaseImgProps & EvpBaseProps;
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
