import EvpInput from "../lib/evp-input";
import { useState } from "react";

export default function InputView() {
  const defaultVal: string = '';
  const [val, setVal] = useState(defaultVal);
  return(
    <div className="preview-container">
      <EvpInput 
      label="数值"
      labelSize="16px"
      name="val"
      value={val} 
      placeholder="Input something..."
      onChange={(e)=>{
        setVal(e.currentTarget.value);
      }}
      rule={{
        color: 'red',
        trigger: 'onEnter',
        custom: (val)=>{
          if (val.length < 6) {
            return 'value must be at least 6 characters';
          }
        },
      }}
      onEnter={()=>{
        // alert(`Current value is "${val}"`);
      }}></EvpInput>
    </div>
  )
}