/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { BaseDomProps } from "../evp-dom";

import "./index.css";
import EvpRow from "../evp-row";
import EvpCol from "../evp-col";

export type EvpInputRule = {
  /** default color is "red" */
  color?: string
  type?: 'string' | 'number' | 'boolean',
  required?: {on: boolean, val: boolean, msg?: string},
  /**
   * When to trigger the rule, default is `onSubmit`
   */
  trigger?: 'onChange' | 'onEnter' | 'onSubmit' | 'Never',
  max?: {on: boolean, val: number , msg?: string},
  min?: {on: boolean, val: number , msg?: string},
  /** Customize the rule of validation with a function
   * @param value binded value
   */
  custom?: (value: string) => string | undefined | null | void
}

interface EvpInputProps extends BaseDomProps {
  label?: string;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  name?: string;
  placeholder?: string;
  /** defaultValue assigned to input box*/
  default?: string;
  /** Reactive value assigned to input box */
  value?: string;
  /** The rule to validate the value input */
  rule?: EvpInputRule,
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** The triggered EventHandler when the key `Enter` down */
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function EvpInput(props: EvpInputProps) {
  const [validateTrigger, setValidateTrigger] = useState(props.rule?.trigger?? 'onChange');
  const [warning_msg, setWarning_msg] = useState<string|undefined>();
  function validate() {
    const result = props.rule?.custom?.(props.value??'');
    setWarning_msg(result as string|undefined);
    if (result) {  // if invalid, switch validate trigger to 'onChange'
      setValidateTrigger('onChange');
    } else {  // if valid, reset validation trigger to props' trigger
      setValidateTrigger(props.rule?.trigger?? 'onChange')
    }
  }
  return (
    <EvpCol>
      <EvpRow>
        <div className="evp input">
          {props.label ? (
            <div className="evp input label" style={{fontSize: props.labelSize??'14px'}}>{props.label}</div>
          ) : null}
          <input
            name={props.name}
            className={`evp input input-box`}
            value={props.value}
            defaultValue={props.default}
            placeholder={props.placeholder}
            onKeyDown={(e) => {
              // onEnter
              if (e.key.toLowerCase() === "enter") {
                if (props.onEnter) {
                  props.onEnter(e);
                }
                if (validateTrigger === 'onEnter') {
                  validate();
                }
              }
            }}
            onChange={(e)=>{
              props.onChange?.(e);
              if (validateTrigger === 'onChange') {
                validate();
              }
            }}
            onSubmit={(e)=>{
              if (validateTrigger === 'onSubmit') {
                validate();
              }
            }}
          ></input>
        </div>
      </EvpRow>
      <EvpRow justifyContent='left' style={{color: props.rule?.color??'red'}}>{warning_msg}</EvpRow>
    </EvpCol>
  );
}
