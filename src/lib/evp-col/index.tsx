import EvpBaseProps from "../props";
import { shift } from "../utils";
import AllParser from "../utils/props.parser";

export interface EvpColProps extends EvpBaseProps {
  flexDirection?: "column" | "column-reverse";
}

export default function EvpCol(props: EvpColProps) {
  let $props = AllParser(props);
  const event = $props.event;
  let style = {
    display: "flex",
    flexDirection: props.flexDirection ?? "column",
    justifyContent: props.justifyContent ?? "flex-start",
    alignItems: props.alignItems ?? "center",
    width: props.w ?? "100%",
    height: props.h,
    ...shift($props.style),
  };
  return (
    <div
      className={`evp col ${props.class}`}
      id={props.id}
      style={style}
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
      {props.children}
    </div>
  );
}
