import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const UnRadio: SvgIcon = (props: SvgIconProps) => {
  return (
    <div
      className={`evp icon ${props.class ?? ""}`.trim()}
      onClick={props.onClick}
      style={{
        visibility: props.$visibleSync ?? true ? "visible" : "hidden",
        display: props.$displaySync ?? true ? "flex" : "none",
        strokeWidth: props.strokeWidth ?? 4,
        stroke: props.color ?? "#333",
        fill: props.fill ?? "#333",
        cursor: props.cursor ?? (props.pointer ? "pointer" : "unset"),
        width: props.w,
        height: props.h,
        padding: propsParser.get("pd")?.(props.pd),
        margin: propsParser.get("mg")?.(props.mg),
        ...props.style,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.radius ?? 24}
        height={props.radius ?? 24}
        viewBox="0 -960 960 960"
      >
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
        strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default UnRadio;
