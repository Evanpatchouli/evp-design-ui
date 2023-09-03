import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpDivider from "@/lib/evp-divider";
import SvgIcons from "@/lib/evp-icon/svg.icons";
import { useState } from "react";  

export default function DividerView() {
  const [showCode, setShowCode] = useState<{[x:number]:boolean}>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  })

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
    return void 0;
  }

  return (
    <div className="preview-container">
<Md>
{`
# EvpDivider

EvpDivider is to divide contens in website.

## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { EvpDivider } from 'evp-design-ui';
`}
</Tsx>
<Md>
{`
**usage:**
`}
</Md>
<Tsx>
{`
<EvpDivider />
`}
</Tsx>
<Md>
{`
## Type

Divider line has three type: "solid" | "dashed" | "dotted", default is "dashed"
`}
</Md>
      <EvpDivider />
      <EvpDivider type="solid" top={20} />
      <EvpDivider type="dashed" top={20} />
      <EvpDivider type="dotted" top={20} />
<Tsx>
{`
<EvpDivider />
<EvpDivider type="solid" top={20} />
<EvpDivider type="dashed" top={20} />
<EvpDivider type="dotted" top={20} />
`}
</Tsx>
<Md>
{`
## Styling

Attributes of "top", "right", "bottom", "left" mean the gap of the divider to susaround.
`}
</Md>
      top: 10px bottom: 10px
      <EvpDivider style={{ border: '1px solid gray' }} 
      top={10} bottom={10} />
      top: 10px bottom: 10px left: 10px
      <EvpDivider style={{ border: '1px solid gray' }} 
      top={10} bottom={10} left={20} />
      top: 10px bottom: 10px right: 10px
      <EvpDivider style={{ border: '1px solid gray' }} 
      top={10} bottom={10} right={20} />
      <Card toolBar={<>
        <EvpButton $click={()=>clickCode(1)} plain size="mini" text="code" />
        <EvpButton plain size="mini" text="copy" />
      </>} 
      style={{ marginTop: 20 }}
      contentStyle={{ padding: 0 }}/>
{showCode[1]?
<Tsx>
{`
top: 10px bottom: 10px
<EvpDivider style={{ border: '1px solid gray' }} 
top={10} bottom={10} />

top: 10px bottom: 10px left: 10px
<EvpDivider style={{ border: '1px solid gray' }} 
top={10} bottom={10} left={20} />

top: 10px bottom: 10px right: 10px
<EvpDivider style={{ border: '1px solid gray' }} 
top={10} bottom={10} right={20} />
`}
</Tsx>
: void 0}
<Md>
{`
Attribute of "width" means the width of the divider line, not the divider container, the with container is always fill the father element box.
`}
</Md>
      top: 10px bottom: 10px right: 20px width: 50%
      <EvpDivider style={{ border: '1px solid gray' }}
      top={10} bottom={10} right={20} width={'50%'} />
      top: 10px bottom: 10px right: 20px width: 400px
      <EvpDivider style={{ border: '1px solid gray' }}
      top={10} bottom={10} right={20} width={400} />
      <Card toolBar={<>
        <EvpButton $click={()=>clickCode(2)} plain size="mini" text="code" />
        <EvpButton plain size="mini" text="copy" />
      </>} 
      style={{ marginTop: 20 }}
      contentStyle={{ padding: 0 }}/>
{showCode[2]?
<Tsx>
{`
top: 10px bottom: 10px right: 20px width: 50%
<EvpDivider style={{ border: '1px solid gray' }}
top={10} bottom={10} right={20} width={'50%'} />

top: 10px bottom: 10px right: 20px width: 400px
<EvpDivider style={{ border: '1px solid gray' }}
top={10} bottom={10} right={20} width={400} />
`}
</Tsx>
: void 0}
<Md>
{`
Attribute of "gap" means the gap between left and right and does not override attributes of "left" and "right"
`}
</Md>
      top: 10px bottom: 10px width: 400px gap: 10px
      <EvpDivider style={{ border: '1px solid gray' }}
      top={10} bottom={10} width={400} gap={10} />
      top: 10px bottom: 10px width: 400px left: 10px gap: 10px
      <EvpDivider style={{ border: '1px solid gray' }}
      top={10} bottom={10} width={400} left={10} gap={10} />
      <Card toolBar={<>
        <EvpButton $click={()=>clickCode(3)} plain size="mini" text="code" />
        <EvpButton plain size="mini" text="copy" />
      </>} 
      style={{ marginTop: 20 }}
      contentStyle={{ padding: 0 }}/>
{showCode[3]?
<Tsx>
{`
top: 10px bottom: 10px width: 400px gap: 10px
<EvpDivider style={{ border: '1px solid gray' }}
top={10} bottom={10} width={400} gap={10} />

top: 10px bottom: 10px width: 400px left: 10px gap: 10px
<EvpDivider style={{ border: '1px solid gray' }}
top={10} bottom={10} width={400} left={10} gap={10} />
`}
</Tsx>
: void 0}
<Md>
{`
Attribute of "lineWidth" makes you to customize the width of the divider line.
`}
</Md>
      lineWidth: 10px top: 10px bottom: 10px
      <EvpDivider 
      lineWidth={10} top={10} bottom={10} />
<Md>
{`
Attribute of "radius" makes you to customize the corner radius of the divider line.
`}
</Md>
      lineWidth: 10px top: 10px bottom: 10px radius: "round" type: "solid"
      <EvpDivider 
      type="solid"
      lineWidth={10} top={10} bottom={10} radius="round" />
      <Card toolBar={<>
        <EvpButton $click={()=>clickCode(4)} plain size="mini" text="code" />
        <EvpButton plain size="mini" text="copy" />
      </>} 
      style={{ marginTop: 20 }}
      contentStyle={{ padding: 0 }}/>
{showCode[4]?
<Tsx>
{`
lineWidth: 10px top: 10px bottom: 10px
<EvpDivider 
lineWidth={10} top={10} bottom={10} />

lineWidth: 10px top: 10px bottom: 10px radius: "round" type: "solid"
<EvpDivider 
type="solid"
lineWidth={10} top={10} bottom={10} radius="round" />
`}
</Tsx>
: void 0}
<Md>
{`
## Divider with content

You can assign any elements in the center of a divider line.
`}
</Md>
      <EvpDivider
      top={10} bottom={10} gap={20}
      >
        Hello, World!
      </EvpDivider>

      <EvpDivider 
      top={10} bottom={10} gap={20} contentGap={20}
      >
        Hello, World!
      </EvpDivider>

      <EvpDivider
      top={10} bottom={10} gap={20}
      >
        Hello, World! <SvgIcons.Info color={'#CFCFCF'} />
      </EvpDivider>
      <Card toolBar={<>
        <EvpButton $click={()=>clickCode(5)} plain size="mini" text="code" />
        <EvpButton plain size="mini" text="copy" />
      </>} 
      style={{ marginTop: 20 }}
      contentStyle={{ padding: 0 }}/>
{showCode[5]?
<Tsx>
{`
<EvpDivider
top={10} bottom={10} gap={20}
>
  Hello, World!
</EvpDivider>

<EvpDivider
top={10} bottom={10} gap={20} contentGap={20}
>
  Hello, World!
</EvpDivider>

<EvpDivider
top={10} bottom={10} gap={20}
>
  Hello, World! <SvgIcons.Info color={'#CFCFCF'} />
</EvpDivider>
`}
</Tsx>
: void 0}
<Md>
{`
## Api

**EvpDivider Apis**

- **type** ? : divider line style
  + default : 'dashed'
  + options : 'solid' | 'dashed' | 'dotted'
- **color** ? : divider line color
  + default : Color.ShallowGray ( "#CFCFCF" )
  + type : string
- **lineWidth** ? : thickness of divider line
  + default : '1px'
  + type : string | number
- **width** ? : width of divider
  + default : '100%'
  + type : string | number
- **radius** ? : radius of divider line
  + default : 'round'
  + type : 'default' | 'round' | 'none' | number
- **top** ? : top gap
  + default: 0
  + type : string | number
- **bottom** ? : bottom gap
  + default: 0
  + type : string | number
- **left** ? : left gap
  + default: 0
  + type : string | number
- **right** ? : right gap
  + default: 0
  + type : string | number
- **style** ? : style of EvpDivider
  + type : React.CSSProperties
- **class** ? : className of EvpDivider,
- **children** ? : divider contents
  + type : React.ReactNode
- **contentStyle** ? : style of EvpDivider content
  + type : React.CSSProperties
- **contentClass** ? : className of EvpDivider content,
- **gap** ? : inline gap of divider line
  + default : 0
  + type : string | number
- **contentGap** ? : inline gap of divider content
  + default : 0
  + type : string | number
- **contentItemGap** ? : inline gap of divider content items
  + default : 0
  + type : string | number
- **fontSize** ? : fontSize of divider content
  + default : '14px'
  + type : string | number
- **fontColor** ? : font color of divider content
  + default : equal to props.color
  + type : string
`}
</Md>
    </div>
  ) 
}