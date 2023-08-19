import React from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import EvpIcon from "../evp-icon";
import { Color } from "../constant";
import { ArrayLengthed, EvpDomAttributes } from "../utils";

export interface EvpMenuProps extends EvpDomAttributes<HTMLDivElement> {
  children?: React.ReactNode,
  title?: string | JSX.Element,
  submenu?: boolean
  /** Default width is 300px */
  w?: EvpWRule,
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4>,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4>,
}

export default function EvpMenu(props: EvpMenuProps) {
  return (
    <EvpCol w={props.w??'300px'} alignItems="left"
      pd={props.pd}
      mg={props.mg}
      style={{
        overflow: 'hidden',
        border: props.submenu? 'unset' : `1px solid ${Color.LightGray}` 
      }}>
      <EvpRow alignItems="space-around">
        <EvpRow h={'40px'}>
          {typeof props.title === 'string'? 
            (<div>{props.title}</div>)
              :
            (props.title)
          }
        </EvpRow>
        {props.submenu?(<EvpIcon name='left' />):null}
      </EvpRow>
      {props.children}
    </EvpCol>
  );
}
