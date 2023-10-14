import classNames from "classnames";
import type EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";

export interface EvpBadgeProps extends EvpBaseProps {
  /** badge dot content should be a number or string*/
  content?: string | number;
  /** max limit of number content */
  max?: number;
  /** dot size */
  size?: "sm" | "md" | "lg" | number;
  /** whether to show badge dot */
  show?: boolean;
  /** whether to show badge dot when number content is 0, default is false */
  showZero?: boolean;
  /** whether to show exactly badge content, default is true */
  invisble?: boolean;
  children?: React.ReactNode;
  /** component className */
  class?: string;
  /** component CSS style */
  style?: React.CSSProperties;
  /** dot className */
  dotClass?: string;
  /** dot CSS style */
  dotStyle?: React.CSSProperties;
  /** wrap children with a new div? Default is true*/
  childrenContainer?: boolean;
  /** content container className */
  childrenClass?: string;
  /** content container CSS style */
  childrenStyle?: React.CSSProperties;
}

const EvpBadge: React.FC<EvpBadgeProps> = (props) => {
  const $props = AllParser(props);
  const sizer = () => {
    if (props.invisble) {
      return {
        width: 8,
        height: 8,
      };
    }
    switch (props.size) {
      case "sm":
        return {
          minWidth: 16,
          height: 16,
          lineHeight: "16px",
          fontSize: "8px",
        };
      case "md":
        return {
          minWidth: 20,
          height: 20,
          lineHeight: "20px",
          fontSize: "12px",
        };
      case "lg":
        return {
          minWidth: 24,
          height: 24,
          lineHeight: "24px",
          fontSize: "16px",
        };
      default:
        return {
          minWidth: props.size ?? 20,
          height: props.size ?? 20,
          lineHeight: props.size ? `${props.size}px` : "20px",
          fontSize: props.size ? `${props.size}px` : "12px",
        };
    }
  };
  return (
    <div className={classNames("evp evp-badge", props.class)} id={props.id} style={$props.style} {...$props.event}>
      <div
        className={classNames("evp-badge-dot", props.dotClass)}
        style={{
          display: (() => {
            if (props.content === 0 && props.showZero !== true) {
              return "none";
            }
            return props.show === false ? "none" : "block";
          })(),
          backgroundColor: "red",
          ...sizer(),
          color: "#fff",
          borderRadius: "100px",
          padding: (() => {
            if (props.invisble) {
              return "0px";
            }
            const len = String(props.content ?? "").length;
            switch (len) {
              case 0: {
                return "0px";
              }
              case 1: {
                return "0px";
              }
              case 2: {
                return "0px 4px";
              }
              default: {
                return "0px 8px";
              }
            }
          })(),
          ...props.dotStyle,
        }}
      >
        {(() => {
          if (props.invisble) {
            return "";
          }
          if (typeof props.content === "number" && props.content >= (props.max ?? 100)) {
            return `${(props.max ?? 100) - 1}+`;
          }
          return String(props.content);
        })()}
      </div>
      {props.contentContainer === false ? (
        props.children
      ) : (
        <div className={classNames("evp-badge-children", props.childrenClass)} style={props.childrenStyle}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default EvpBadge;
