/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import { BaseDomProps } from "../evp-dom";
import Icon from '../evp-icon/index';
import EvpRow from "../evp-row";
import EvpCol from "../evp-col";
import { Color } from "../constant";

import "./index.css";


export type EvpInputRule = {
  /** default color is "red" */
  color?: string
  /** **required:** If required.on is `false`, all the rules **will not work!**. `on` means to enable this rule, `val` means whether the value input can be empty, `msg` means the warnning message */
  required?: {on: boolean, val: boolean, msg?: string},
  /** default is `string` */
  type?: { on: boolean, val: 'text' | 'number', msg?: string},
  /**
   * When to trigger the rule, default is `onEnter`
   */
  trigger?: 'onChange' | 'onEnter' | 'onSubmit' | 'Never',
  /** **Smart Trigger:** default is `true`. Initially, it will keep to be `onChange` `until the value is valid`, 
   * and then the trigger will be `temporarily` set to the `props.rule.trigger`, 
   * and `at next time` when it get invalid results under `props.rule.trigger` , 
   * it will reset the trigger to `onChange` until is valid*/
  smartTrigger?: boolean,
  /** **MinLength:** `on` means to enable this rule, `val` means the minLength number, `msg` means the warnning message */
  min?: {on: boolean, val: number , msg?: string},
  /** **MaxLength:** `on` means to enable this rule, `val` means the maxLength number, `msg` means the warnning message */
  max?: {on: boolean, val: number , msg?: string},
  /** **RegExp:** `on` means to enable this rule, `val` means the RegExp, `msg` means the warnning message */
  reg?: {on: boolean, val: RegExp , msg?: string},
  /** **mustHave:** `on` means to enable this rule, `val` means the slice, `msg` means the warnning message */
  mustHave?: Array<{ on: boolean, val: any, msg?: string }>,
  /** **cannotHave:** `on` means to enable this rule, `val` means the slice, `msg` means the warnning message */
  cannotHave?: Array<{ on: boolean, val: any, msg?: string }>,
  /** Customize the rule of validation with a function with warning message returned, if valid the message shoule be "".
   * @param value the input value
   */
  custom?: (value: string) => string | undefined | null | void
}

interface EvpInputProps extends BaseDomProps {
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  name?: string;
  placeholder?: string;
  type?: 'text';
  /** defaultValue assigned to input box*/
  default?: string;
  /** Reactive value assigned to input box */
  value?: string;
  /** The rule to validate the value input */
  rule?: EvpInputRule,
  /** wDefault is false, hether to show the validate result icon on right of the input box */
  resultIcon?: boolean,
  /** Default Hint message */
  hint?: {
    text?: string;
    color?: string;
  },
  warnReader?: {
    ref?: Readonly<string>,
    setWarn: React.Dispatch<React.SetStateAction<string>>
  },
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** The triggered EventHandler when the key `Enter` down */
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function EvpInput(props: EvpInputProps) {
  const inputType = props.type?? 'text';
  const [validateTrigger, setValidateTrigger] = useState('onChange');
  const [warning_msg, setWarning_msg] = useState<string|undefined>(props.warnReader?.ref);
  const warnColor = props.rule?.color??'red';
  const hintColor = props.hint?.color??'grey';
  const [isValid, setIsValid] = useState(false);
  const smartTrigger = props.rule?.smartTrigger?? true;

  function isEmpty(str?: string): boolean {
    return str === undefined || str === null || str === '';
  }

  function isNotNumber(str: string|undefined): boolean {
    return Number.isNaN(Number(str));
  }

  function checkNumber(str: string|undefined): boolean {
    if (props.rule?.type?.val === 'number') {
      return !isNotNumber(str);
    }
    return true;
  }

  function isHave(str: string|undefined, slice: any): boolean {
    const value = str??'';
    return value.includes(slice);
  }

  function checkMin(str: string|undefined, min: number): boolean {
    if (props.rule?.type?.val !== 'number') {
      let value = '';
      if (str) {
        value = str as string;
      }
      return value.length >= min;
    } else {
      const value = Number(str);
      return value >= min;
    }
  }

  function checkMax(str: string|undefined, max: number): boolean {
    if (props.rule?.type?.val === 'text') {
      let value = '';
      if (str) {
        value = str as string;
      }
      return value.length <= max;
    } else {
      const value = Number(str);
      return value <= max;
    }
  }

  function checkReg(str: string|undefined, reg: RegExp): boolean {
    const result = str?.match(reg);
    if (typeof result === 'object' && result) {
      return result?.length === 0;
    }
    return true;
  }

  /**
   * validtate input value with rules
   * @param v should be `e.currentTarget.value` but not `props.value` because it is a step later.
   */
  function validate(v?: string) {
    let result = '';
    if (props.rule?.custom) {
      result = props.rule?.custom?.(v??'')??'';
    } else if (props.rule?.required?.on) {
      result = result? result : props.rule?.required?.on? (isEmpty(v)? (`${props.label?(typeof props.label)=='string'?props.label:props.name??'This field':props.name??'This field'} can not be empty`) : '') : '';
      result = result? result : (props.rule?.type?.on? (checkNumber(v)? '' : (props.rule.type.msg??(`${props.label?(typeof props.label)=='string'?props.label:props.name??'This field':props.name??'This field'} must be a number`))) : '');
      result = result? result : (props.rule?.min?.on? (checkMin(v, props.rule.min.val)? '' : props.rule.min.msg??`At least be ${props.rule.min.val} characters`) : '') ;
      result = result? result : (props.rule?.max?.on? (checkMax(v, props.rule.max.val)? '' : props.rule.max.msg??`At most be ${props.rule.max.val} characters`) : '');
      result = result? result : (props.rule?.reg?.on? (checkReg(v, props.rule.reg.val)? '' : props.rule.reg.msg??(`${props.label?(typeof props.label)=='string'?props.label:props.name??'This field':props.name??'This field'} has invalid characters`)) : '');
      if (props.rule?.mustHave) {
        props.rule.mustHave.map(mustHave => {
          result = mustHave.on? (isHave(v, mustHave.val)? result : `${props.label?(typeof props.label)=='string'?props.label:props.name??'This field':props.name??'This field'} must have "${mustHave.val}"`) : result;
          return result;
        })
      }
      
      if (props.rule?.cannotHave) {
        props.rule.cannotHave.map(cannotHave => {
          result = cannotHave.on? (!isHave(v, cannotHave.val)? result : `${props.label?(typeof props.label)=='string'?props.label:props.name??'This field':props.name??'This field'} should not have "${cannotHave.val}"`) : result;
          return result;
        })
      }
    }
    setWarning_msg(result);
    props.warnReader?.setWarn(result);
    if (result) {  // if invalid, switch validate trigger to 'onChange'
      if (smartTrigger) {
        setValidateTrigger('onChange');
      }
      setIsValid(false);
    } else {  // if valid, reset validation trigger to props' trigger
      if (smartTrigger) {
        setValidateTrigger(props.rule?.trigger?? 'onChange');
      }
      setIsValid(true);
    }
  }

  const [msgColor, setMsgColor] = useState(hintColor);
  React.useEffect(()=>{
    if (!isValid) {
      setMsgColor(warnColor);
      if (!warning_msg) {
        setMsgColor(hintColor);
      }
    }
  }, [isValid, warnColor, warning_msg, hintColor])

  const showRightIcon = props.resultIcon?? false;

  return (
    <EvpCol mg={[4,0,4,0]}>
      <EvpRow>
        <div className="evp input">
          {props.label ? (
            <div className="evp input label" style={{fontSize: props.labelSize}}>{props.label}</div>
          ) : null}
          <input
            name={props.name}
            className={`evp input input-box`}
            value={props.value}
            defaultValue={props.default}
            placeholder={props.placeholder}
            type={inputType}
            spellCheck={false}
            onKeyDown={(e) => {
              // onEnter
              if (e.key.toLowerCase() === "enter") {
                if (smartTrigger && props.rule?.trigger === 'onEnter') {
                  validate(e.currentTarget.value);
                }
                if (props.onEnter) {
                  props.onEnter(e);
                }
              }
            }}
            onChange={(e)=>{
              props.onChange?.(e);
              if (validateTrigger === 'onChange') {
                validate(e.currentTarget.value);
              }
            }}
            onSubmit={(e)=>{
              if (validateTrigger === 'onSubmit') {
                validate(e.currentTarget.value);
              }
            }}
          ></input>
          {showRightIcon? <div className="evp input icon"><Icon name="true_circle" color={Color.HeavyGreen} $visibleSync={isValid} /></div> : null}
        </div>
      </EvpRow>
      <EvpRow justifyContent='left' style={{color: msgColor}}>{isValid?'':(warning_msg?warning_msg:props.hint?.text)}</EvpRow>
    </EvpCol>
  );
}
