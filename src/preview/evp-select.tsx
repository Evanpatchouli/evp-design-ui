import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import EvpButton from "@/lib/evp-button";
import EvpSelect from "@/lib/evp-select";
import { useEffect, useState } from "react";

export default function SelectView() {
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [])
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
  }
  return(
    <div className="preview-container">
<Md>
{`
# EvpSelect

A select component is a UI element used to present a list of options to the user, allowing them to choose one option. 
It is commonly used in forms to let users select from a set of predefined options or to filter a list of items.

## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { EvpSelect } from 'evp-design-ui'
`}
</Tsx>
<Md>
{`
**usage:**
`}
</Md>
<Tsx>
{`
<EvpSelect name="demo" 
  placeholder="Select one option"
  options={[
  { label: 'Option 1', value: '1', key: '1' },
  { label: 'Option 2', value: '2', key: '2' },
  { label: 'Option 3', value: '3', key: '3' },
]} />
`}
</Tsx>
      <Card>
        <EvpSelect name="demo"
          placeholder="Select one option"
          options={[
          { label: 'Option 1', value: '1', key: '1' },
          { label: 'Option 2', value: '2', key: '2' },
          { label: 'Option 3', value: '3', key: '3' },
        ]} />
      </Card>
<Md>
{`
## Examples

Here are some examples about EvpSelect.

Since now, options EvpSelect should be set from attribute and it's a array of object with label, value and **key**. The key is necessary and must be unique!
 And you'd better not to use array index as key, because it may cause some problems when you change the options array. If you have no idea about using what as key, you can use unique value as key or use [uuid](https://www.npmjs.com/package/uuid) to generate a unique key.

If you want to ban an option, you can set it to disabled
`}
</Md>
      <Card
      toolbarStyle={{
        justifyContent: 'flex-end'
      }}
      toolBar={
      <>
        <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <Card style={{
          width: 'fit-content'
        }}>
          <EvpSelect name="demo2" 
            placeholder="Select one option"
            options={[
            { label: 'Option 1', value: '1', key: '1', disabled: true },
            { label: 'Option 2', value: '2', key: '2' },
            { label: 'Option 3', value: '3', key: '3' },
          ]} />
        </Card>
      </Card>
<Tsx show={showCode[1]}>
{`
<EvpSelect name="demo2"
  placeholder="Select one option"
  options={[
  { label: 'Option 1', value: '1', key: '1', disabled: true },
  { label: 'Option 2', value: '2', key: '2' },
  { label: 'Option 3', value: '3', key: '3' },
]} />
`}
</Tsx>
<Md>
{`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpSelect Apis:**

- **name** ? : string
- **options** ? : Array<{ label: string; value: any; key: React.Key; disabled** ? : boolean }>
- **children** ? : React.ReactNode
- **value** ? : any
- **label** ? : string | JSX.Element
- **labelSize** ? : string
- **labelWidth** ? : number | string
- **labelAlign** ? : "left" | "center" | "right"
- **required** ? : Whether to show a required * character, this is only a character not a validation!
  + **type** : boolean
- **rows** ? : the rows of options visiable
  + **type** : number
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-slider" text="★ Next Doc EvpSlider >" />
    </div>
  )
}