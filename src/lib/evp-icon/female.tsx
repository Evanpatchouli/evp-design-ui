import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const Radio: SvgIcon = (props: SvgIconProps) => {
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
        width={props.radius ?? 24}
        height={props.radius ?? 24}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#icon-d15d880bccbbd09)">
          <path
            d="M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z"
            fill="none"
            strokeLinejoin="round"
          />
          <path d="M18.4642 29.5353L5.73633 42.2632" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.1714 41.5562L6.44346 28.8282" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="icon-d15d880bccbbd09">
            <rect width="48" height="48" fill="#333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Radio;
