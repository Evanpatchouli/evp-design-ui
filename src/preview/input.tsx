import EvpInput from "../lib/evp-input";
import { useState } from "react";

export default function InputView() {
  const defaultVal: string = '';
  const [val, setVal] = useState(defaultVal);
  return(
    <div className="preview-container">
      <EvpInput 
      label="val"
      name="val"
      value={val} 
      placeholder="Input something..."
      onChange={(e)=>{
        setVal(e.currentTarget.value);
      }}
      onEnter={()=>{
        alert(`Current value is "${val}"`);
      }}></EvpInput>
    </div>
  )
}