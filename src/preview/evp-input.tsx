import EvpInput from "../lib/evp-input";
import React, { useEffect, useState } from "react";
import Icons from '../lib/evp-icon/svg.icons';
import EvpIcon from "../lib/evp-icon";
import Md from "@/components/md";
import EvpButton from "@/lib/evp-button";
import Tsx from "@/components/tsx";
import EvpToast from "@/lib/evp-toast";
import Card from "@/components/card";

export default function InputView() {
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
    return void 0;
  }
  
  const defaultVal: string = "";
  const [user, setUser] = useState(defaultVal);
  const [pswd, setPswd] = useState(defaultVal);
  let [warn, setWarn] = useState<string>("");
  // custom: (val)=>{
  //   if (val.length < 6) {
  //     return 'value must be at least 6 characters';
  //   }
  // },
  return (
    <div className="preview-container">
<Md>
{`
# EvpInput

Input box is required commonly in websites' forms.

## Basic Usage

**import:**
`}
</Md>
<Tsx>
{`
import { EvpInput } from 'evp-design-ui'
`}
</Tsx>
<Md>{`**Usage:**`}</Md>
      <Card>
        <EvpInput
          name="username"
          label={"username"}
          labelSize="16px"
          value={user}
          placeholder="Input something..."
          onChange={(e) => {
            setUser(e.currentTarget.value);
          }}
        ></EvpInput>
      </Card>
<Tsx>
{`
<EvpInput
  name="username"
  label={"username"}
  labelSize="16px"
  value={user}
  placeholder="Input something..."
  onChange={(e) => {
    setUser(e.currentTarget.value);
  }}
></EvpInput>
`}
</Tsx>
<Md>
{`
## onChange

If you bind variable from father component to value of EvpInut, you must assign the Onchange event to EvpInput and update value in it.

## onEnter

You can assign onEnter event to EvpInput.
`}
</Md>
      <Card toolBar={<>
        <EvpButton theme="text" $click={()=>clickCode(1)} plain size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpInput
          name="account"
          label={"account"}
          labelSize="16px"
          placeholder="Input your account..."
          onEnter={(e) => {
            EvpToast.info(e.currentTarget.value);
          }}
        ></EvpInput>
      </Card>
{showCode[1]?
<Tsx>
{`
<EvpInput
  name="account"
  label={"account"}
  labelSize="16px"
  placeholder="Input your account..."
  onEnter={(e) => {
    EvpToast.info(e.currentTarget.value);
  }}
></EvpInput>
`}
</Tsx>
: void 0}
<Md>
{`
## Label

You can add a label at the left of input box by assigning a string or Element to label attribute.
`}
</Md>
      <Card toolBar={<>
        <EvpButton theme="text" $click={()=>clickCode(2)} plain size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <EvpInput
          name="account"
          label={<EvpIcon user />}
          labelSize="16px"
          value={user}
          placeholder="Input your account..."
          onChange={(e) => {
            setUser(e.currentTarget.value);
          }}
        ></EvpInput>
      </Card>
{showCode[2]?
<Tsx>
{`
<EvpInput
  name="account"
  label={<EvpIcon user />}
  labelSize="16px"
  value={user}
  placeholder="Input your account..."
  onChange={(e) => {
    setUser(e.currentTarget.value);
  }}
></EvpInput>
`}
</Tsx>
: void 0}
<Md>
{`
## Validation

You can add validation rules to EvpInput. We have provided several useful rules like **required**, **type**, **min**, **max**, **mustHave** etc.

One thing is should be noticed that is you must open **required** rule if you want to use other rules.

Here are some examples:

`}
</Md>
      <Card toolBar={<>
        <EvpButton theme="text" $click={()=>clickCode(3)} plain size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <label>Required :
          <EvpInput
            name="account"
            labelSize="16px"
            placeholder="Input your account..."
            rule={{
              trigger: 'onEnter',
              required: { on: true, val: true }
            }}
          ></EvpInput>
        </label>
        <label>Type should be number :
          <EvpInput
            name="account"
            labelSize="16px"
            placeholder="Input your account..."
            rule={{
              trigger: 'onEnter',
              required: { on: true, val: true },
              type: { on: true, val: 'number' }
            }}
          ></EvpInput>
        </label> 
        <label>Min length should be 4 character :
          <EvpInput
            name="account"
            labelSize="16px"
            placeholder="Input your account..."
            rule={{
              trigger: 'onEnter',
              required: { on: true, val: true },
              min: { on: true, val: 4 }
            }}
          ></EvpInput>
        </label>
        <label>Must have "user" slice :
          <EvpInput
            name="account"
            labelSize="16px"
            placeholder="Input your account..."
            rule={{
              trigger: 'onEnter',
              required: { on: true, val: true },
              mustHave: [
                { on: true, val: 'user' }
              ]
            }}
          ></EvpInput>
        </label>
      </Card>
{showCode[3]?
<Tsx>
{`
<label>Required :
  <EvpInput
    name="account"
    labelSize="16px"
    placeholder="Input your account..."
    rule={{
      trigger: 'onEnter',
      required: { on: true, val: true }
    }}
  ></EvpInput>
</label>

<label>Type should be number :
  <EvpInput
    name="account"
    labelSize="16px"
    placeholder="Input your account..."
    rule={{
      trigger: 'onEnter',
      required: { on: true, val: true },
      type: { on: true, val: 'number' }
    }}
  ></EvpInput>
</label> 

<label>Min length should be 4 character :
  <EvpInput
    name="account"
    labelSize="16px"
    placeholder="Input your account..."
    rule={{
      trigger: 'onEnter',
      required: { on: true, val: true },
      min: { on: true, val: 4 }
    }}
  ></EvpInput>
</label>

<label>Must have "user" slice :
  <EvpInput
    name="account"
    labelSize="16px"
    placeholder="Input your account..."
    rule={{
      trigger: 'onEnter',
      required: { on: true, val: true },
      mustHave: [
        { on: true, val: 'user' }
      ]
    }}
  ></EvpInput>
</label>
`}
</Tsx>
: void 0}
<Md>
{`
## ResultIcon

If you like to show a right icon when validation success, you can assign resultIcon attribute.
`}
</Md>
      <Card toolBar={<>
        <EvpButton theme="text" $click={()=>clickCode(4)} plain size="mini" text="code" />
        <EvpButton theme="text" size="mini" text="copy" />
      </>}>
        <div>Show result Icon by right :
            <EvpInput
              name="account"
              label={"account"}
              labelSize="16px"
              placeholder="Input your account..."
              resultIcon
              rule={{
                trigger: 'onEnter',
                required: { on: true, val: true },
              }}
            ></EvpInput>
          </div>
      </Card>
{showCode[4]?
<Tsx>
{`
<label>Show result Icon by right :
  <EvpInput
    name="account"
    labelSize="16px"
    placeholder="Input your account..."
    resultIcon
    rule={{
      trigger: 'onEnter',
      required: { on: true, val: true },
    }}
  ></EvpInput>
</label>
`}
</Tsx>
: void 0}
<Md>
{`
## Api

**EvpInput Apis**

- **label** ? : label should be a string or EvpIcon
  + type : string | JSX.Element
- **labelSize** ? : Label font-Size
  + defalut : 14px
  + type : string
- **name** ? : string
  placeholder ? : string
  type ? : 'text'
- **default** ? : defaultValue assigned to input box
  + type : string
- **value** ? : Reactive value assigned to input box
  + type : string
- **rule** ? : The rule to validate the value input, look more following.
  + type : **EvpInputRule**
- **resultIcon** ? : whether to show the validate result icon on right of the input box
  + default : false
  + type : boolean
- **hint** ? : default hint message
  + type : 
    - **text** ? : string  
    - **color** ? : string  
- **warnReader** ? : bind a variable from father to get EvpInut warn message.
  + type : 
    - **ref** ? : \`Readonly<string>\`  
    - **setWarn** : \`React.Dispatch<React.SetStateAction<string>>\`  
- **onChange** ? : when props.value is assigned, onChange is must required
  + type : \`React.ChangeEventHandler<HTMLInputElement>\`
- **onEnter** ? : The triggered EventHandler when the key \`Enter\` down
  + type : \`React.KeyboardEventHandler<HTMLInputElement>\`

**EvpInputRule**

- **color** ? : warn message color
  + default: red
  + type : string
- **required** ? : If required.on is \`false\`, all the rules **will not work!**. \`on\` means to enable this rule, \`val\` means whether the value input can be empty, \`msg\` means the warnning message
  + type : {on: boolean, val: boolean, msg?: string}
  + desc : on means to import this rule, val means to enable this rule, msg means to customize this warn message
- **type** ? : input type rule
  + type : { on: boolean, val: 'text' | 'number', msg?: string}
- **trigger** ? : When to trigger the rule
  + default : \`'onEnter'\`
  + options : 'onChange' | 'onEnter' | 'onSubmit' | 'Never',
- **smartTrigger** ? : default is \`true\`. Initially, it will keep to be \`onChange\` \`until the value is valid\`, and then the trigger will be \`temporarily\` set to the \`props.rule.trigger\`, and \`at next time\` when it get invalid results under \`props.rule.trigger\` , it will reset the trigger to \`onChange\` until is valid
  + type : boolean
- **min** ? : when type rule is number, min means min value; when type rule is text, min means min length
  + type : {on: boolean, val: number , msg?: string}
- **max** ? : when type rule is number, max means max value; when type rule is text, max means max length
  + type : {on: boolean, val: number , msg?: string}
- **reg** ? : RegExp
  + type : {on: boolean, val: RegExp , msg?: string}
- **mustHave** ? : input must have several slice string
  + type : Array<{ on: boolean, val: any, msg?: string }>
- **cannotHave** ? : input must not have several slice string
  + type : Array<{ on: boolean, val: any, msg?: string }>
- **custom** ? : Customize the rule of validation with a function with warning message returned, if valid the message shoule be ""
  + type : (value: string) => string | undefined | null | void
`}
</Md>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-color" text="★ Next Doc EvpColor >" />
    </div>
  );
}
