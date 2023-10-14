import React from "react";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import Loading from "../evp-loading";

export interface BaseDomProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
  style?: React.CSSProperties;
}

export type EvpDomProps = EvpBaseProps;

export default function EvpDom($props: EvpDomProps) {
  // console.log('EvpDom.props:', $props)
  const props = AllParser($props);
  // console.log('EvpDom.props after parsed:', props);
  const event = props.event;
  return (
    <div
      id={props.id}
      className={props.class}
      hidden={props.hidden}
      style={{
        position: "relative",
        ...props.style,
      }}
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
      <div className="dom-loading__modal" hidden={!$props.loading === true}>
        <Loading.SpinDot className={"dom-loading__elem"} />
      </div>
      <div className="dom__modal" hidden={!$props.modal === true}>
        <div className={"dom__modal__content"}>{$props.modalContent}</div>
      </div>
    </div>
  );
}
