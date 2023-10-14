import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const UncheckedBox: SvgIcon = (props: SvgIconProps) => {
  return (
    <div
      className={`evp icon ${props.class ?? ""}`.trim()}
      onClick={props.onClick}
      style={{
        visibility: props.$visibleSync ?? true ? "visible" : "hidden",
        display: props.$displaySync ?? true ? "flex" : "none",
        strokeWidth: props.strokeWidth ?? 4,
        stroke: props.color ?? "#333",
        fill: props.fill ?? "none",
        cursor: props.cursor ?? (props.pointer ? "pointer" : "unset"),
        width: props.w,
        height: props.h,
        padding: propsParser.get("pd")?.(props.pd),
        margin: propsParser.get("mg")?.(props.mg),
        border: props.border,
        ...props.style,
      }}
    >
      <svg
        width={props.radius ?? 24}
        height={props.radius ?? 24}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"
          fill="none"
          stroke={props.color ?? "#333"}
          strokeWidth={props.strokeWidth ?? 4}
        />
      </svg>
    </div>
  );
};

export default UncheckedBox;
