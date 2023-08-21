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
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  // const default_clickHandler = () => undefined;
  const $props = AllParser(props);
  const clickHandler = $props.event.onMouseDown;

  const theme = props.theme?? 'primary';
  const size = props.size?? 'middle';
  const plain = props.plain? 'plain': '';
  const shape = props.shape?? '';
  const $class = props.class ?? '';
  return (
    <button className={`evp button ${theme} ${size} ${plain} ${shape} ${$class}`} id={$props.id}
    onClick={clickHandler}
    style={$props.style}
    type={props.type??"button"}
    >
      {props.children?? props.text?? ''}
    </button>
  )
}

export default EvpButton;
