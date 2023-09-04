import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpHeader from "@/lib/evp-header";
import { useEffect, useState } from "react";

export default function HeaderView() {
  useEffect(()=>{
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});
  }, [])
  const [header, setHeader] = useState(false);
  return(
    <div className="preview-container HeaderView">
<Md>
{`
# EvpHeader

Header is often used as a fixed top bar of a website.

## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { EvpHeader } from 'evp-design-ui'
`}
</Tsx>
<Md>
{`
## usage
`}
</Md>
<Tsx>
{`
<EvpButton theme='dark' $click={()=> setHeader(!header)} >
  show / hidden header
</EvpButton>
{ header? <EvpHeader title="I'm a evp-header!"></EvpHeader> : void 0 }
`}
</Tsx>
      <EvpButton theme='dark' $click={()=> setHeader(!header)} >show / hidden header</EvpButton>
      { header? <EvpHeader title="I'm a evp-header!"></EvpHeader> : void 0 }
<Md>
{`
## Api

**EvpHeader Apis**

- **icon** ? : EvpIcon by the left side of title
  + default : undefined
  + type : EvpIcon
- **title** ? : title content
  + type : string
leftRate ? : Default is 40 (40%) : left width rate
  + default : 40
  + type : number
- **children** ? : React.ReactNode
- **leftContent** ? : override icon and title with customized element
  + type : React.ReactNode
- **leftOffset** ? : number
- **rightContent** ? : React.ReactNode
- **rightOffset** ? : number
- **bgColor** ? : string
- **color** ? : string
- **position** ? : string
- **zIndex** ? : number
- **height** ? : number
- **class** ? : string
- **style** ? : React.CSSProperties
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-msg" text="★ Next Doc EvpMsg >" />
    </div>
  )
}