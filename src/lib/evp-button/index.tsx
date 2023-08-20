import React from "react";
import './index.css';
import  { BaseDomProps }from '../evp-dom/index'
import { ArrayLengthed } from "../utils";
import { propsParser } from "../utils/props.parser";

interface EvpButtonProps extends BaseDomProps {
  /** The button text, it will be overrided by props.children if that exists */
  text?: string,
  /** Default type is 'button' */
  type?: 'button' | 'reset' | 'submit',
  /** Default theme is 'primary' */
  theme?: 'white' | 'primary' |'success' | 'warning' | 'danger' | 'info' | 'dark' | 'text',
  plain?: boolean,
  size?: 'mini' |'small' | 'middle' | 'large' | 'huge'
  /** default is square */
  shape?: 'circle' | 'round' | 'square',
  /** Default width is `100%`, the unit is number when assigned with a number*/
  w?: EvpWRule;
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule;
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4>,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4>,
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  const default_clickHandler = () => undefined;
  const clickHandler = props.onClick?? default_clickHandler;

  const theme = props.theme?? 'primary';
  const size = props.size?? 'middle';
  const plain = props.plain? 'plain': '';
  const shape = props.shape?? 'square';
  return (
    <button className={`evp button ${theme} ${size} ${plain} ${shape}`}
    onClick={(e)=>clickHandler(e)}
    style={{
      width: props.w,
      height: props.h,
      padding: propsParser.get('pd')?.(props.pd),
      margin: propsParser.get('mg')?.(props.mg),
      ...props.style
    }}
    type={props.type??"button"}
    >
      {props.children?? props.text?? ''}
    </button>
  )
}

export default EvpButton;
