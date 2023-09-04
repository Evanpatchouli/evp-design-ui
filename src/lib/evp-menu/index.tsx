import React, { useEffect, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import EvpIcon, { IconType } from "../evp-icon";
import { Color } from "../constant";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import { useNavigate } from "react-router";

import './index.scss'
import { EvpWRule, EvpHRule } from "../typings";


export interface EvpMenuProps extends EvpBaseProps {
  /** The following contents of this menu, usually to be of `EvpMenuItem` */
  children?: React.ReactNode,
  /** Title text could be a string or JSX.Element */
  title?: string | JSX.Element,
  submenu?: boolean
  /** Default width is 260px */
  w?: EvpWRule,
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule,
  /** The EvpIcon by the left side with default redius 18 rather than the default 24 redius of EvpIcon */
  icon?: IconType,
  /** route-link to where */
  link?: string
}

export default function EvpMenu(props: EvpMenuProps) {
  const linkTo = useNavigate();
  
  const { icon } = props;
  let $props = AllParser(props);
  // the cursor type on hovering the menu title, default is poniter
  $props.style.cursor = $props.style.cursor??'pointer';
  const $event = $props.event;
  const [ expand, setExpand ] = useState(false);
  function deExpand() {
    setExpand(!expand);
  }

  function $click(e: React.MouseEvent){
    if (!props["not-allowed"]) {
      deExpand();
      $event.onMouseDown?.(e);
      if (props.link) {
        linkTo(props.link);
      }
    }
  }

  useEffect(()=>{
    if (ref.current) {
      setHeight(ref.current.offsetHeight)
    }
  },[expand])

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(()=>{
    if( expand ) {
      setHeight(ref.current?.offsetHeight as number);
    } else {
      setHeight(0);
    }
  }, [expand])

  const childrenWrapperClass = props.submenu? `evp-menu-children ${expand?'':'close'}` : '';

  const disabled = props["not-allowed"]? 'evp-disabled' : '';

  return (
    <EvpCol alignItems="left"
      class={`${disabled} ${props.class??''}`.trim()}
      pd={props.pd}
      mg={props.mg}
      w={props.w??'260px'}
      style={{
        overflow: 'hidden',
        border: props.submenu? 'unset' : `1px solid ${Color.PaleGray}`,
        ...$props.style
      }}>
      <EvpRow alignItems="space-between"
      $click={$click}>
        <EvpRow h={50} pd={[0,0,0,20]}>
          {typeof props.title === 'string'? 
            (
              <>
                {icon?<EvpIcon name={icon} radius={18} pd={[0,20,0,0]}></EvpIcon>:null}
                <div>{props.title}</div>
              </>
            )
              :
            (props.title)
          }
        </EvpRow>
        {props.submenu?(
          <EvpIcon strokeWidth={2} radius={18} pd={[0,16,0,0]} name={expand?'down':'left'} />
        ):null}
      </EvpRow>
      <div className={childrenWrapperClass} ref={ref} style={{
        minHeight: height
      }}>
        {props.children}
      </div>
    </EvpCol>
  );
}
