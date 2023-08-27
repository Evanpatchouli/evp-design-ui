import * as EvpShadow from "@/lib/evp-shadow";
import Md from 'react-markdown'
import shopcart from '@/assets/shopcart.svg'
// import { ClassAttributes, HTMLAttributes } from "react";
// import { JSX } from "react/jsx-runtime";

// const components = {
//   em: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <i {...props} />
// }

const ShadowBox = (props: { children: React.ReactNode }) => <div className="ShadowBox">{props.children}</div>

const docs = [
`# EvpShadow

EvpShadow is an amazing plugin that help you to make smooth and beautiful shadows.

Following are some examples exported from EvpShadow:
`,
`
## Common BoxShadow

- \`Common\`, \`Common_MiddleBlur\`, \`Common_HighBlur\`
`,
`
- \`Common_MiddleBlur_PaleDespread\`, \`Re_Common_MiddleBlur_PaleDespread\`, \`Common_LightDespread\`
`

];

console.log(EvpShadow.EvpShadow);

export default function ShadowView() {
  return(
    <div className="preview-container ShadowView">
      <Md>{docs[0]}</Md>
      <Md>{docs[1]}</Md>
      <ShadowBox>
        <div className="card" style={{ boxShadow: EvpShadow.Common }}>
          <img className="filter-shadow" alt="shopcart" src={shopcart} />
        </div>
        <div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur }}></div>
        <div className="card" style={{ boxShadow: EvpShadow.Re_Common }}></div>
      </ShadowBox>
      <Md>{docs[2]}</Md>
      <ShadowBox>
        <div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur_PaleDespread }} />
        <div className="card" style={{ boxShadow: EvpShadow.Re_Common_MiddleBlur_PaleDespread }} />
        <div className="card" style={{ boxShadow: EvpShadow.Common_LightDespread }} />
      </ShadowBox>
      <ShadowBox>
        <div className="card ce"></div>
      </ShadowBox>
    </div>
  )
}