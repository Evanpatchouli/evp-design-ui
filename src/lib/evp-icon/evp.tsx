import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const Lock: SvgIcon = (props: SvgIconProps) => {
  return (
    <div
      className={`evp icon ${props.class ?? ""}`.trim()}
      onClick={props.onClick}
      style={{
        visibility: props.$visibleSync ?? true ? "visible" : "hidden",
        display: props.$displaySync ?? true ? "flex" : "none",
        strokeWidth: props.strokeWidth ?? 4,
        stroke: props.color ?? "#333",
        fill: props.fill ?? "#008BFF",
        cursor: props.cursor ?? (props.pointer ? "pointer" : "unset"),
        width: props.w,
        height: props.h,
        padding: propsParser.get("pd")?.(props.pd),
        margin: propsParser.get("mg")?.(props.mg),
        ...props.style,
      }}
    >
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={props.radius ?? 24}
        height={props.radius ?? 24}
      >
        <path
          d="M143.36 817.152a948.48 948.48 0 0 1 126.976-29.696v-424.96A948.48 948.48 0 0 1 143.36 332.8V173.056c62.08 18.432 122.368 31.744 180.736 39.936 58.368 8.192 120.32 12.288 185.856 12.288 69.632 0 135.36-4.608 197.12-13.824a1225.728 1225.728 0 0 0 192-45.568v159.744c-23.232 7.488-46.272 14.144-69.12 19.968-22.848 5.76-46.272 11.072-70.144 15.872v427.008c23.872 4.8 47.296 10.048 70.144 15.872 22.848 5.76 45.888 12.48 69.12 19.968v159.744a1225.728 1225.728 0 0 0-192-45.568 1336.768 1336.768 0 0 0-197.12-13.824c-65.536 0-127.488 4.096-185.856 12.288-58.368 8.192-118.592 21.504-180.736 39.936v-159.744z m366.592-50.176c8.896 0 20.48 0.192 34.816 0.512 14.336 0.32 25.6 0.512 33.792 0.512V381.952h-128V768c7.488 0 17.6-0.192 30.208-0.512 12.608-0.32 22.4-0.512 29.184-0.512z"
          fill="#008BFF"
          p-id="4227"
        ></path>
      </svg>
    </div>
  );
};

export default Lock;
