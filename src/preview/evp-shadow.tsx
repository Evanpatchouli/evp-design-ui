import * as EvpShadow from "@/lib/evp-shadow";
import Md from 'react-markdown'
import shopcart from '@/assets/shopcart.svg'
import Code from "@/components/code";
import { useEffect } from "react";
import EvpButton from "@/lib/evp-button";
// import { ClassAttributes, HTMLAttributes } from "react";
// import { JSX } from "react/jsx-runtime";

// const components = {
//   em: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) => <i {...props} />
// }

const ShadowBox = (props: { children: React.ReactNode }) => <div className="ShadowBox">{props.children}</div>

const docs = [
//0
`# EvpShadow

EvpShadow is an useful tool that helps you to make smooth and beautiful shadows.

It is a retor of <https://shadows.brumm.af> so you are suggested to use EvpShadow together with this website.

Following are some examples exported from EvpShadow:
`,
//1
`
## Preserved BoxShadow

- 1. \`Common\` 2. \`Common_MiddleBlur\` 3. \`Common_HighBlur\`
`,
//2
`
- 1. \`Common_MaxBlur\` 2. \`Common_ZeroBlur\` 3. \`Re_Common_MiddleBlur_MiddleDespread\`
`,
//3
`
- 1. \`Common_MiddleBlur_PaleDespread\` 2. \`Re_Common_MiddleBlur_PaleDespread\` 3. \`Common_LightDespread\`
`,
//4
`
## Build your ownself

Besides, you can also build shadow by yousrself. The build options are these:

- \`layer?\`: number (between 1 and 10) the layers' amount of box-shadow
- \`opacity?\`: number (between 0 and 1) the alpha of rgbaColor => rgba(0, 0, 0, alpha)
- \`xOffset?\`: number (default 100)
- \`yOffset?\`: number (default 100)
- \`blur?\`: number (default 0, between 0 and 500)
- \`spread?\`: number (default 0, between 0 and -100)
- \`reverse?\`: boolean (default false) the layer alpha tendency, default is from level 1 to level N the tendency is to increase
- \`precision?\`: number (default 2) the float number calced precision

Here is an example:
`,
//5
`
You can get further customed by changing the shadow builder's properties of \`alphaEasingValue\`, \`offsetEasingValue\` and \`blurEasingValue\`.  
**Notice:** unless you have known what these properties mean, you're not suggested to change them.
`

];

const codes = [
`
import * as EvpShadow from "@/lib/evp-shadow";

<div className="card" style={{ boxShadow: EvpShadow.Common }}>
  <img style={{ width: 200 }} className="filter-shadow" alt="shopcart" src={shopcart} />
</div>
<div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur }}></div>
<div className="card" style={{ boxShadow: EvpShadow.Re_Common }}></div>
`,

`
import * as EvpShadow from "@/lib/evp-shadow";

<div className="card" style={{ boxShadow: EvpShadow.Common_MaxBlur }}></div>
<div className="card" style={{ boxShadow: EvpShadow.Common_ZeroBlur }}></div>
<div className="card" style={{ boxShadow: EvpShadow.Re_Common_MiddleBlur_MiddleDespread }}></div>
`,

`
import * as EvpShadow from "@/lib/evp-shadow";

<div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur_PaleDespread }}></div>
<div className="card" style={{ boxShadow: EvpShadow.Re_Common_MiddleBlur_PaleDespread }}></div>
<div className="card" style={{ boxShadow: EvpShadow.Common_LightDespread }}></div>
`,

`
import * as EvpShadow from "@/lib/evp-shadow";

const { EvpShadow: Shadow } = EvpShadow;

const myBoxShadow = Shadow.build({
  blur: 150,
  spread: -10,
  opacity: 0.25,
})
`
]

export default function ShadowView() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
  return(
    <div className="preview-container ShadowView">
      <Md>{docs[0]}</Md>
      <Md>{docs[1]}</Md>
      <ShadowBox>
        <div className="card" style={{ boxShadow: EvpShadow.Common }}>
          <img style={{ width: 200 }} className="filter-shadow" alt="shopcart" src={shopcart} />
        </div>
        <div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur }}></div>
        <div className="card" style={{ boxShadow: EvpShadow.Re_Common }}></div>
      </ShadowBox>
      <Code lang='typescript'>{codes[0]}</Code>
      <Md>{docs[2]}</Md>
      <ShadowBox>
        <div className="card" style={{ boxShadow: EvpShadow.Common_MaxBlur }}></div>
        <div className="card" style={{ boxShadow: EvpShadow.Common_ZeroBlur }}></div>
        <div className="card" style={{ boxShadow: EvpShadow.Re_Common_MiddleBlur_MiddleDespread }}></div>
      </ShadowBox>
      <Code lang='typescript'>{codes[1]}</Code>
      <Md>{docs[3]}</Md>
      <ShadowBox>
        <div className="card" style={{ boxShadow: EvpShadow.Common_MiddleBlur_PaleDespread }} />
        <div className="card" style={{ boxShadow: EvpShadow.Re_Common_MiddleBlur_PaleDespread }} />
        <div className="card" style={{ boxShadow: EvpShadow.Common_LightDespread }} />
      </ShadowBox>
      <Code lang='typescript'>{codes[2]}</Code>
      <Md>{docs[4]}</Md>
      <Code lang='typescript'>{codes[3]}</Code>
      <Md>{docs[5]}</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-button" text="★ Next Doc EvpButton >" />
    </div>
  )
}