import { useState } from "react";
import './index.css';

export interface EvpPopoverProps {
  content?: React.ReactNode,
  children: React.ReactNode,
  style?: React.CSSProperties,
  class?: string,
  id?: string
}

export default function EvpPopover(props: EvpPopoverProps){
  const [show, setShow] = useState<boolean>(false);
  return(
    <div className="evp-popover-container">
      <div className={`evp-popover ${show? '' : 'evp-popover__hidden'} ${props.class}`.trim()} id={props.id}>
        {props.content}
      </div>
      <div onClick={()=>setShow(!show)}>{props.children}</div>
    </div>
  )
}