import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/img/example";

export default function ImgView() {
  const next = { route: "evp-calendar", name: "Calendar" };
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
# EvpImg

Img is a component that can show image in a container with preview.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Img } from 'evp-design-ui'
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

Here are some examples about EvpImg.

`}
      </Md>

      <Md>
        {`
## Api

★ based on img  
★ props extends EvpBaseProps

**EvpCode Apis:**

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
