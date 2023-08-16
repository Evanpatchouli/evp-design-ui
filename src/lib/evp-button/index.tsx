import React from "react";
import './index.css';
import  { BaseDomProps }from '../evp-dom/index'

interface EvpButtonProps extends BaseDomProps {
  text?: string,
  type?: 'primary' |'success' | 'warning' | 'danger' | 'info' | 'text',
  plain?: boolean,
  size?:'small' | 'default' | 'large'
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  const default_clickHandler = () => undefined;
  const clickHandler = props.onClick?? default_clickHandler;

  const type = props.type?? '';
  return (
    <button className={`evp button ${type}`}
    onClick={(e)=>clickHandler(e)}
    >
      {props.children?? props.text?? ''}
    </button>
  )
}

export default EvpButton;
