import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const Close: SvgIcon = (props: SvgIconProps) => {
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
        <path d="M17 11L24 4L31 11L24 18L17 11Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 25L37 18L44 25L37 32L30 25Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 37L24 30L31 37L24 44L17 37Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 24L11 17L18 24L11 31L4 24Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default Close;
