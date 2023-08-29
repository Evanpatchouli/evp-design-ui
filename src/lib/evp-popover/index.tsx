import { useState } from "react";
import './index.css';

export interface EvpPopoverProps {
  content?: React.ReactNode,
  children: React.ReactNode,
  style?: React.CSSProperties,
  class?: string,
  id?: string,
  trigger?: 'hover' | 'click'
}

export default function EvpPopover(props: EvpPopoverProps){
  const [show, setShow] = useState<boolean>(false);
  const $trigger = props.trigger?? 'click';
  return(
    <div className={`evp evp-popover-container`}>
      <div className={`evp-popover ${show? '' : 'evp-popover__hidden'}`.trim()} id={props.id}>
        <div className={`evp-popover-content ${props.class}`.trim()}>{props.content}</div>
        <div className="evp-popover-arrow" />
      </div>
      <div
      onClick={()=>$trigger==='click'?setShow(!show):void 0}
      onMouseOver={()=>$trigger==='hover'?setShow(!show):void 0}
      >{props.children}</div>
    </div>
  )
}