import React, { useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import EvpIcon, { IconType } from "../evp-icon";
import { Color } from "../constant";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";

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
  return (
    <EvpCol alignItems="left"
      pointer
      pd={props.pd}
      mg={props.mg}
      w={props.w??'200px'}
      style={{
        overflow: 'hidden',
        border: props.submenu? 'unset' : `1px solid ${Color.LightGray}`,
        ...$props.style
      }}>
      <EvpRow alignItems="space-around"
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
      {props.submenu?
        expand? props.children : null
      :props.children}
    </EvpCol>
  );
}
