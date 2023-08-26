import React from "react";
import AllParser from "../utils/props.parser";
import EvpBaseProps from "../props";

import './index.scss';

type EvpButtonProps = EvpButtonSpecProps & EvpBaseProps;

interface EvpButtonSpecProps {
  /** The button text, it will be overrided by props.children if that exists */
  text?: string,
  /** Default type is 'button' */
  type?: 'button' | 'reset' | 'submit',
  /** Default theme is 'primary' */
  theme?: 'white' | 'primary' |'success' | 'warning' | 'danger' | 'info' | 'dark' | 'text',
  plain?: boolean,
  size?: 'mini' |'small' | 'middle' | 'large' | 'huge'
  /** default is undefined, square will has 0 border-radius */
  shape?: 'circle' | 'round' | 'square',
  /** default is true : whether to show preserved box-shadow */
  shadow?: boolean
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  // const default_clickHandler = () => undefined;
  const $props = AllParser(props);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const clickHandler = $props.event.onMouseDown;

  const theme = props.theme?? 'primary';
  const shadow = props.shadow??true? 'evp-pale-shadow' : '';
  const size = props.size?? 'middle';
  const plain = props.plain? 'plain': '';
  const shape = props.shape?? '';
  const $class = props.class ?? '';
  return (
    <button className={`evp evp-button ${theme} ${shadow} ${size} ${plain} ${shape} ${$class}`.trim()} id={$props.id}
    onClick={clickHandler}
    style={$props.style}
    type={props.type??"button"}
    >
      {props.children?? props.text?? ''}
    </button>
  )
}

export default EvpButton;
