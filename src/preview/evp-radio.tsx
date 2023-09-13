import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "@/lib";
import EvpRadio from "@/lib/evp-radio";
import EvpRadioGroup from "@/lib/evp-radio-group/inedx";
import { useEffect, useState } from "react";

export default function RadioView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };

  return (
    <div className="preview-container">
      <Md>
        {`
# EvpRadioGroup

RadioGroup is a series of radio buttons, which is used to select one of the options.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpRadioGroup, EvpRadio } from "evp-design-ui";
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpRadioGroup required label="Sex" name="sex" >
  <EvpRadio label="Male" value="male" />
  <EvpRadio label="Female" value="female" />
</EvpRadioGroup>
`}
      </Tsx>
      <Card>
        <EvpRadioGroup required label="Sex" name="sex">
          <EvpRadio label="Male" value="male" />
          <EvpRadio label="Female" value="female" />
        </EvpRadioGroup>
      </Card>
      <Md>
        {`
## Examples

Here are some examples of how to use radio buttons.

### EvpRadio

A single radio is made up of a label and a radio circle. The label is optional, it will be first read from label attribute, if label is not set, it will be read from children.

If you need to group up several radios without EvpRadioGroup, you should use the same \`name\` attribute to group them up.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(1);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpRadio name="radio" label="Radio" />
        <EvpRadio name="radio">Radio</EvpRadio>
      </Card>
{showCode[1]?
<Tsx>
{`
<EvpRadio name="radio" label="Radio" />
<EvpRadio name="radio">Radio</EvpRadio>
`}
</Tsx>
: void 0}
      <Md>
        {`
### DefaultChecked

If you want to set a radio as default checked, you can set \`defaultChecked\` attribute to \`true\`.
`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(2);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpRadio name="radio2" label="Default Checked" defaultChecked />
        <EvpRadio name="radio2" label="Option 2" />
      </Card>
      {showCode[2]?
<Tsx>
{`
<EvpRadio name="radio2" label="Default Checked" defaultChecked />
<EvpRadio name="radio2" label="Option 2" />
`}
</Tsx>
: void 0}
      <Md>
        {`
### EvpRadioGroup

Usually, we use radio buttons in groups, which is a series of radio buttons. The radio buttons in the group are mutually exclusive, and only one of them can be selected.

In this case, you needn't to set the \`name\` attribute, it will be set automatically by EvpRadioGroup with its \`name\` attribute. If you set a name to certain radio, it will override the name set by EvpRadioGroup.

If you want to ban a radio, just set the \`disabled\` attribute to \`true\`.

`}
      </Md>
      <Card
      toolBar={<>
        <EvpButton theme="text" $click={() => {
          clickCode(3);
        }} size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpRadioGroup required label="Am I handsome?" name="handsome">
          <EvpRadio label="Yes" name="handsome" value="yes" />
          <EvpRadio label="No" value="no" disabled />
          <EvpRadio label="Secret" value="secret" />
          <EvpRadio
            label="Other Group's Radio"
            labelWidth={180}
            defaultChecked
            name="other"
            value="other"
          />
        </EvpRadioGroup>
      </Card>
      {showCode[3]?
<Tsx>
{`
<EvpRadioGroup required label="Am I handsome?" name="handsome">
  <EvpRadio label="Yes" name="handsome" value="yes" />
  <EvpRadio label="No" value="no" disabled />
  <EvpRadio label="Secret" value="secret" />
  <EvpRadio
    label="Other Group's Radio"
    labelWidth={180}
    defaultChecked
    name="other"
    value="other"
  />
</EvpRadioGroup>
`}
</Tsx>
: void 0}
      <Md>
{`
## Api

### EvpRadio Apis

- **label** ? : React.ReactNode
- **labelSize** ? : string
- **labelWidth** ? : number | string
- **labelAlign** ? : "left" | "center" | "right"
- **required**  ? : Whether to show a required * character, this is only a character not a validation!
  + type: boolean
- **name** ? : string
- **value** ? : (string & ('true' | 'false')) | number
- **defaultChecked** ? : Is this radio default checked?
  + boolean
- **children** ? : If label is undefined, children will be treated as label.
  + type : React.ReactNode
- **disabled** ? : Is this radio disabled?
  + type : boolean

### EvpRadioGroup Apis

- **label** ? : React.ReactNode
- **labelSize** ? : string
- **labelWidth** ? : number | string
- **labelAlign** ? : "left" | "center" | "right"
- **required** ? : Whether to show a required * character, this is only a character not a validation!
  + type : boolean
- **name** ? : string
- **default** ? : defaultValue assigned to radio group
- **value** ? : Reactive value assigned to radio group
  + type : string | number
- **hint** ? : 
  + type :
    - text ? : string
    - color ? : string
- **children** ? : React.ReactNode
- **rule** ? : EvpRadioRule
- **warnReader** ? : 
  + type :
    - ref ? : Readonly<string>
    - setWarn: React.Dispatch<React.SetStateAction<string>>
- **resultIcon** ? : boolean
- **class** ? : string
`}
      </Md>
    </div>
  );
}
