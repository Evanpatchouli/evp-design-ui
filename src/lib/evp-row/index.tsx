import AllParser from "../utils/props.parser";
import EvpBaseProps from "../props";
import { shift } from "../utils";

export interface EvpRowProps extends EvpBaseProps {
  flexDirection?: "row" | "row-reverse";
}

export default function EvpRow(props: EvpRowProps) {
  let $props = AllParser(props);
  const event = $props.event;
  const style = {
    display: "flex",
    flexDirection: props.flexDirection ?? "row",
    justifyContent: props.justifyContent ?? "flex-start",
    alignItems: props.alignItems ?? "center",
    width: props.w ?? "100%",
    height: props.h ?? "100%",
    ...shift($props.style),
  };
  return (
    <div
      className={`evp row ${props.class??''}`.trim()}
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
