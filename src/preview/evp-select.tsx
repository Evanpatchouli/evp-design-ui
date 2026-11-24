import CopyCodeButton from "@/components/copy-code-button";
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

Give each option a stable, unique key. Set an option's \`disabled\` flag to keep it visible and skip it during selection.
`}
</Md>
      <Card
      toolbarStyle={{
        justifyContent: 'flex-end'
      }}
      toolBar={
      <>
        <EvpButton $click={() => clickCode(1)} theme="text" size="mini" text="code" />
        <CopyCodeButton source={exampleSource} />
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
<Tsx show={showCode[1]}>{exampleSource}</Tsx>
<Md>
{`
## Api

- **options** accepts an array of \`{ label: string; value: any; key: React.Key; disabled?: boolean }\`.
- **value** controls the selection. Pass the new value back through this prop in **onChange**.
  For an uncontrolled Select, pass **defaultValue** to choose the initial option.
- **onChange(value, option)** receives the selected value and the complete option object. Selection
  displays its label. A named Select submits its selected value with a native form.
- **placeholder** is displayed when the value does not match an option.
- **name**, **label**, **labelSize**, **labelWidth**, **labelAlign** and **labelColon** configure the
  field and its label. **required** displays an asterisk alongside the label.
- **rows** sets the visible option count. A closed Select mounts no listbox. With more than 100 options,
  an open Select renders the visible rows, a small scroll buffer and the active option.

### Keyboard

Focus the field and press Enter, Space, Arrow Down or Arrow Up to open the list. Arrow keys move
between enabled options. Home and End move to the first or last enabled option. Enter or Space
selects the active option. Escape closes the list and preserves the previous value.
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-slider" text="★ Next Doc EvpSlider >" />
    </div>
  )
}

const exampleSource = `<EvpSelect name="demo2"
  placeholder="Select one option"
  options={[
  { label: 'Option 1', value: '1', key: '1', disabled: true },
  { label: 'Option 2', value: '2', key: '2' },
  { label: 'Option 3', value: '3', key: '3' },
]} />
`;
