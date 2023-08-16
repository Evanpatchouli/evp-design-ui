/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { BaseDomProps } from "../evp-dom";

import './index.css';

interface EvpInputProps extends BaseDomProps {
  label?: string;
  name?: string;
  placeholder?: string;
  default?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

export default function EvpInput(props: EvpInputProps) {
  return(
    <div className="evp input">
      <div className="evp input wrap">
        <div className="evp input label">{props.label}</div>
        <input 
          name={props.name}
          className={`evp input input-box`}
          value={props.value}
          defaultValue={props.default} 
          placeholder={props.placeholder}
          onKeyDown={(e)=>{
            e.key.toLowerCase()==='enter' && props.onEnter ? props.onEnter(e) : null;
          }}
          onChange={props.onChange}></input>
      </div>
    </div>
  )
}