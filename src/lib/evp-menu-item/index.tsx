import React, { Fragment } from "react";
import EvpIcon from "../evp-icon";
import EvpRow from "../evp-row";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import { useNavigate } from "react-router";
import './index.scss'

export interface EvpMenuItemProps extends EvpBaseProps {
  children?: React.ReactNode,
  title?: string | JSX.Element,
  icon?: IconType,
  /** route-link to where */
  link?: string
}

export default function EvpMenuItem(props: EvpMenuItemProps) {
  const linkTo = useNavigate();

  const { icon } = props;
  let $props = AllParser(props);
  const $event = $props.event;
  const $click = props["not-allowed"]?undefined :
  (e: React.MouseEvent) => {
    $event.onMouseDown?.(e);
    if (props.link) {
      linkTo(props.link);
    }
  }

  const disabled = props["not-allowed"]? 'evp-disabled' : '';

  return (
    <EvpRow alignItems="space-between"
    class={`evp-menu-item ${disabled} ${props.class??''}`.trim()}
    style={$props.style}
    $click={$click}
    pointer>
      <EvpRow class="evp-menu-item-title" h={50} pd={[0,8,0,8]}
      >
        {(typeof props.title !== 'object')? 
          <Fragment>
            {icon?<EvpIcon name={icon} radius={18} pd={[0,20,0,0]}></EvpIcon>:null}
            <div>{props.title??props.children}</div>
          </Fragment>
            :
          (props.title??<div>{props.children}</div>)
        }
      </EvpRow>
  </EvpRow>
  );
}
