import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const All: SvgIcon = (props: SvgIconProps) => {
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
        <path
          d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"
          strokeLinejoin="round"
        />
        <path
          d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"
          strokeLinejoin="round"
        />
        <path
          d="M40 6H30C28.8954 6 28 6.89543 28 8V18C28 19.1046 28.8954 20 30 20H40C41.1046 20 42 19.1046 42 18V8C42 6.89543 41.1046 6 40 6Z"
          strokeLinejoin="round"
        />
        <path
          d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default All;
