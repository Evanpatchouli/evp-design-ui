import React from "react";
import './index.css';
import  { BaseDomProps }from '../evp-dom/index'

interface EvpButtonProps extends BaseDomProps {
  /** The button text, it will be overrided by props.children if that exists */
  text?: string,
  /** Default type is 'button' */
  type?: 'button' | 'reset' | 'submit',
  /** Default theme is 'primary' */
  theme?: 'white' | 'primary' |'success' | 'warning' | 'danger' | 'info' | 'dark' | 'text',
  plain?: boolean,
  size?: 'small' | 'middle' | 'large'
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  const default_clickHandler = () => undefined;
  const clickHandler = props.onClick?? default_clickHandler;

  const theme = props.theme?? 'primary';
  const size = props.size?? 'middle';
  const plain = props.plain? 'plain': '';
  return (
    <button className={`evp button ${theme} ${size} ${plain}`}
    onClick={(e)=>clickHandler(e)}
    style={{...props.style}}
    type={props.type??"button"}
    >
      {props.children?? props.text?? ''}
    </button>
  )
}

export default EvpButton;
