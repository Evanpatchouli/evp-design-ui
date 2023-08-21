import React, { useEffect, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import EvpIcon, { IconType } from "../evp-icon";
import { Color } from "../constant";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";


import './index.scss'

export interface EvpMenuProps extends EvpBaseProps {
  children?: React.ReactNode,
  title?: string | JSX.Element,
  submenu?: boolean
  /** Default width is 200px */
  w?: EvpWRule,
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule,
  icon?: IconType
}

export default function EvpMenu(props: EvpMenuProps) {
  const { icon } = props;
  let $props = AllParser(props);
  const [ expand, setExpand ] = useState(false);
  function deExpand() {
    setExpand(!expand);
  }

  useEffect(()=>{
    console.log('menu expanded?', expand);
    console.log('ref.current.offsetHeight', ref.current?.offsetHeight);
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

  return (
    <EvpCol alignItems="left"
      pd={props.pd}
      mg={props.mg}
      w={props.w??'200px'}
      style={{
        overflow: 'hidden',
        border: props.submenu? 'unset' : `1px solid ${Color.LightGray}`,
        ...$props.style
      }}>
      <EvpRow alignItems="space-around"
      pointer
      $click={deExpand}>
        <EvpRow h={50}>
          {typeof props.title === 'string'? 
            (
              <>
                {icon?<EvpIcon name={icon} pd={[0,14,0,0]}></EvpIcon>:null}
                <div>{props.title}</div>
              </>
            )
              :
            (props.title)
          }
        </EvpRow>
        {props.submenu?(
          <EvpIcon strokeWidth={2} name={expand?'down':'left'} />
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
