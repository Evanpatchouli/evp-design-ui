import EvpInput from "../lib/evp-input";
import React, { useState } from "react";

export default function InputView() {
  const defaultVal: string = '';
  const [val, setVal] = useState(defaultVal);
  let [warn, setWarn] = useState<string>('');
  // custom: (val)=>{
  //   if (val.length < 6) {
  //     return 'value must be at least 6 characters';
  //   }
  // },
  return(
    <div className="preview-container">
      <EvpInput 
      name="val"
      label="数值"
      labelSize="16px"
      value={val} 
      warn={{
        ref: warn,
        setWarn: setWarn
      }}
      placeholder="Input something..."
      onChange={(e)=>{
        setVal(e.currentTarget.value);
      }}
      hint={{
        text: 'Input a number...'
      }}
      rule={{
        type: { on: true, val: 'number' },
        color: 'red',
        trigger: 'onEnter',
        required: {on: true, val: true},
        min: {on: true, val: 6},
        cannotHave: [
          { on: true, val: "666"}
        ]
      }}
      onEnter={(e)=>{
        alert(`Current value is "${val}", warn message is ${warn}`);
      }}></EvpInput>
    </div>
  )
}