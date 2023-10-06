import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode } from "@/lib";
import { EvpButton } from "evp-design-ui";
import { useEffect } from "react";
import Example from "./demos/steps/example";
import Hide from "./demos/steps/hide";
import Scale from "./demos/steps/scale";
import Controll from "./demos/steps/controll";
import Header from "./demos/steps/header";

export default function StepView() {
  const next = { route: "evp-required", name: "Required" };
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
# Steps

Steps is a component that can divide something into steps.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { Steps } from 'evp-design-ui'
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

Here are some examples about Steps.

### Scale

Default: h = 100%, windowWidth = 400px, windowHeight = 100%  
(h is height of component container, windowWidth is width of window, windowHeight is height of window)
`}
      </Md>
      <Scale />
      <Md>
        {`

### hideLastAtStepOne & hideNextAtLastStep

Default: hideLastAtStepOne = false, hideNextAtLastStep = true
`}
      </Md>
      <Hide />
      <Md>
        {`
### Controll the step

Default step is 1, you can set default step by defaultStep props.

And you can controll step by step props and setStep props, meanwhile, the defaultStep will not work. If you do not set the setStep, the btns will not work.
`}
      </Md>
      <Controll />
      <Md>
        {`
### Customize Header

You can set header to customize header render.
`}
      </Md>
      <Header />
      <Md>
        {`
## Api

★ based on div  
★ props extends EvpBaseProps

**EvpCode Apis:**

`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
        {`
export type Step = {
  key?: number;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  content?: React.ReactNode;
};

export type EvpStepsProps = {
  /** Customize the header render */
  header?: (step?: Pretify<Step>, index?: number, steps?: Pretify<Step>[]) => React.ReactNode;
  defaultStep?: number;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  /**
   * @description on step change event handler
   */
  onChange?: (step: number) => void;
  /**
   * @description The height of the step window.
   * @defaultValue 400px
   */
  windowWidth?: number | string;
  /**
   * @description The width of the step window.
   * @defaultValue 100%
   */
  windowHeight?: number | string;
  style?: React.CSSProperties;
  windowProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * @defaultValue false
   */
  hideLastAtStepOne?: boolean;
  /**
   * @defaultValue true
   */
  hideNextAtLastStep?: boolean;
  lastProps?: EvpButtonProps;
  nextProps?: EvpButtonProps;
  confirmProps?: EvpButtonProps;
  onLast?: () => void;
  onNext?: () => void;
  onConfirm?: () => void;
} & EvpBaseProps;
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
