import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "../demos/img/example";

const CamelCaseName = "Img";

export default function ImgView() {
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
# ${CamelCaseName}

${CamelCaseName} is a component that can show image in a container with preview.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { ${CamelCaseName} } from 'evp-design-ui'
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

Here are some examples about ${CamelCaseName}.

`}
      </Md>

      <Md>
        {`
## Api

★ based on img  
★ props extends EvpBaseProps

**${CamelCaseName} Apis:**

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
