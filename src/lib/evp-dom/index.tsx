import React from 'react';
import EvpBaseProps from '../props';
import AllParser from '../utils/props.parser';

export interface BaseDomProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode,
  onChange?: React.ChangeEventHandler,
  style?: React.CSSProperties
}

export type EvpDomProps = {
  props?: EvpBaseProps,
  children?: React.ReactNode
}

export default function EvpDom($props: EvpDomProps) {
  console.log('EvpDom.props:', $props)
  const props = AllParser($props.props);
  console.log('EvpDom.props after parsed:', props);
  const event = props.event;
  return(
    <div
    id={props.id}
    className={props.class}
    style={props.style}
    onMouseEnter={event.onMouseEnter}
    onMouseOver={event.onMouseOver}
    onFocus={event.onFocus}
    onMouseDown={event.onMouseDown}
    onDoubleClick={event.onDoubleClick}
    onContextMenu={event.onContextMenu}
    onMouseUp={event.onMouseUp}
    onMouseMove={event.onMouseMove}
    onScroll={event.onScroll}
    onMouseOut={event.onMouseOut}
    onMouseLeave={event.onMouseLeave}
    onKeyDown={event.onKeyDown}
    >
      {$props.children}
    </div>
  )
}