import AllParser from "../utils/props.parser";
import EvpBaseProps from "../props";
import { shift } from "../utils";
import valParser from "../utils/val.parser";

export interface EvpRowProps extends EvpBaseProps {
  flexDirection?: "row" | "row-reverse";
  gap?: number | string;
}

export default function EvpRow(props: EvpRowProps) {
  let $props = AllParser(props);
  const event = $props.event;
  const style = {
    display: props.hidden ? "none" : "flex",
    flexDirection: props.flexDirection ?? "row",
    justifyContent: props.justifyContent ?? "flex-start",
    alignItems: props.alignItems ?? "center",
    width: props.w ?? "100%",
    height: props.h ?? "100%",
    ...shift($props.style),
  };
  return (
    <div
      className={`evp evp-row ${props.class ?? ""}`.trim()}
      id={props.id}
      style={{
        // @ts-ignore
        "gap": valParser(props.gap) ?? "6px",
        ...style,
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
      {props.children}
    </div>
  );
}
