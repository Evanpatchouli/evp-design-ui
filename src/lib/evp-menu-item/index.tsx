import React, { Fragment } from "react";
import EvpIcon from "../evp-icon";
import EvpRow from "../evp-row";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import EvpCol from "../evp-col";

export interface EvpMenuItemProps extends EvpBaseProps {
  children?: React.ReactNode,
  title?: string | JSX.Element,
  icon?: IconType,
  /** route-link to where */
  link?: string | { path?: string; hash?: boolean };
}

export default function EvpMenuItem(props: EvpMenuItemProps) {
  const linkTo = (path?: EvpMenuItemProps['link']) => {
    if (path) {
      if (typeof path === 'string' || !path.hash) {
        if (window.location.hash) {
          window.location.hash = path as string;
        } else {
          window.location.assign(path as string);
        }
      } else {
        path.path? window.location.hash = path.path : void 0;
      }
    }
  };

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
    <EvpCol alignItems="space-between"
    class={`evp-menu-item ${disabled} ${props.class??''}`.trim()}
    style={$props.style}
    $click={$click}
    pointer>
      <EvpRow class="evp-menu-item-title" h={50} pd={[0,8,0,8]}
      >
        {(typeof props.title !== 'object')? 
          <Fragment>
            {icon?<EvpIcon name={icon} radius={18} pd={[0,12,0,0]}></EvpIcon>:null}
            <div>{props.title??props.children}</div>
          </Fragment>
            :
          (props.title??<div>{props.children}</div>)
        }
      </EvpRow>
  </EvpCol>
  );
}
