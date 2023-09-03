import Card from "@/components/card";
import Code from "@/components/code";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpDom from "@/lib/evp-dom";
import { useEffect, useState } from "react";
import Md from 'react-markdown';

export default function DomView() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])
  
  const [showCode, setShowCode] = useState<{[x:number]:boolean}>({
    1: false,
    2: false,
    3: false,
    4: false
  })

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  }
  return(
    <div className="preview-container DomView">
            <Md>
{`
# EvpDom

A wrapper component that can be easy customized.

## Basic Usage

import: 
`}
      </Md>
      <Tsx>
{`
import { EvpDom } from 'evp-design-ui';
`}
      </Tsx>
      <Md>
{`
usage:
`}
      </Md>
      <Card>
        <EvpDom
          props={{
            h: 100, w: 300,
            border: '1px dotted black'
          }}
        >
        </EvpDom>
      </Card>
      <Tsx>
{`
<EvpDom
  props={{
    h: 100, w: 300,
    border: '1px dotted black'
  }}
>
</EvpDom>
`}
      </Tsx>
      <Md>
{`
## Examples

Here are some necessary examples about how to use props extends EvpBaseProps Interface and EvpBaseProps is form of EvpStyleProps, EvpEventProps and EvpCommonProps.
`}
      </Md>
<Code lang="typescript">
{`
type EvpBaseProps = EvpStyleProps & EvpEventProps & EvpCommonProps;
`}
</Code>
      <Md>
{`
Lets start with these three Props Interface just now!

### EvpStyleProps

Provides several convenient props for styling. Here are some necessary examples:

#### cursor

There is attributes named "cursor" makes your mouse type on this element. This is nothing important, but following are some attributes about it:

- **pointer**: boolean,
- **not-allowed**: boolean,
- **col-resize**: boolean,
- **row-resize**: boolean,
- **all-scroll**: boolean,
- **wait**: boolean,
- **grab**: boolean,
- **grabbing**: boolean,
- **none**: boolean,

I beleive that you can find out the meaning of these attributes by yourself. Yes! It is just CSS cursor property. You should not assigned more than one of them.
Besides, it will be overrided by the "cursor" attributes if exists.
`}
      </Md>
<Md>
{`
#### measurement

- w : width of this element
- h : height of this element
- pd : padding of this element. This array should have 4 items, but less is also ok. If a member in this array has type of number it will be parsed to \`\${value}px\`
- mg : margin of this element. This array should have 4 items, but less is also ok. If a member in this array has type of number it will be parsed to \`\${value}px\`
- pd_* : padding of this element. This is ended with preserved number.
- pdl_* : paddingLeft of this element. This is ended with preserved number.
- pdr_* : paddingRight of this element. This is ended with preserved number.
- pdt_* : paddingTop of this element. This is ended with preserved number.
- pdb_* : paddingBottom of this element. This is ended with preserved number.

pd\`\${[l,r,t,b]}\`_* will be added up, for example: pd_20 + pdl_4 => padding: 20px 20px 20px 24px

mg\`\${[l,r,t,b]}\`_* is similar to pd.

### EvpEventProps

- $in : boolean | React.MouseEventHandler; onMouseEnter
- $on : boolean | React.MouseEventHandler; onMouseOver
- $focus : boolean | React.FocusEventHandler; onFocus
- $click : boolean | React.MouseEventHandler; onMouseDown
- $doubleClick : boolean | React.MouseEventHandler; onDoubleClick
- $context : boolean | React.MouseEventHandler; onContextMenu
- $loose : boolean | React.MouseEventHandler; onMouseUp
- $move : boolean | React.MouseEventHandler; onMouseMove
- $scroll : boolean | React.UIEventHandler; onScroll
- $off : boolean | React.MouseEventHandler; onMouseOut
- $out : boolean | React.MouseEventHandler; onMouseLeave
- $esc : boolean | React.KeyboardEventHandler; onKeyDown.esc
- $del : boolean | React.KeyboardEventHandler; onKeyDown.del onKeyDown.backspace
- $enter : boolean | React.KeyboardEventHandler; onKeyDown.enter
- $space : boolean | React.KeyboardEventHandler; onKeyDown.space

### EvpCommonProps

- children : React.ReactNode
- id : string
- class : string

`}
</Md>
      <Md>
{`
## Api

**EvpCol Apis:**

Please refer to EvpBaseProps in docs of EvpDom.
`}
      </Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-divider" text="★ Next Doc EvpDivider >" />
    </div>
  )
}