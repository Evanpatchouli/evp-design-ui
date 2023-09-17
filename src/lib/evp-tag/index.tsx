import classNames from "classnames";
import { cloneDeep } from "lodash";

const EvpTag = (props: EvpTagProps) => {
  const { theme, plain, light, size, rounded } = props;
  const { children, text, class: className, ...rest } = props;
  const $type = light ? "light" : plain ? "plain" : "deep";
  const classes = classNames(
    "evp",
    "evp-tag",
    theme ?? "primary",
    $type,
    className
  );

  const sizer = () => {
    switch (size) {
      case "sm":
        return {
          fontSize: "10px",
          height: "22px",
          lineHeight: "22px",
        };
      case "lg":
        return {
          fontSize: "14px",
          height: "26px",
          lineHeight: "26px",
        };
      default:
        return {
          fontSize: "12px",
          height: "24px",
          lineHeight: "24px",
        };
    }
  };

  const $rest = cloneDeep(rest);
  delete $rest.style;

  return (
    <div
      className={classes}
      style={{
        width: "fit-content",
        color: $type === "deep" ? "#fff" : void 0,
        ...sizer(),
        textAlign: "center",
        verticalAlign: "middle",
        padding: "0 12px",
        borderRadius: rounded ? "100px" : "4px",
        ...rest.style,
      }}
      {...$rest}
    >
      {children ?? text}
    </div>
  );
};

export default EvpTag;

export interface EvpTagProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The tag's text.
   */
  children?: React.ReactNode;
  text?: string;
  class?: string;
  theme?:
    | "white"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "dark";
  plain?: boolean;
  deep?: boolean;
  light?: boolean;
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}
