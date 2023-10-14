import classNames from "classnames";
import { useRef } from "react";

export type EvpLabelProps = {
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  labelPosition?: "top" | "left";
  /** Default is false */
  labelColon?: boolean | React.ReactNode;
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  children?: React.ReactNode;
  containerClass?: string;
  containerStyle?: React.CSSProperties;
  class?: string;
  style?: React.CSSProperties;
};

export default function EvpLabel(props: EvpLabelProps) {
  const labelRef = useRef<HTMLDivElement>(null);
  const labelWidth = props.labelWidth ? props.labelWidth : "fit-content";
  const labelAlign = props.labelAlign ? props.labelAlign : "left";
  return (
    <div
      className={classNames("evp-label-container", props.containerClass)}
      style={{
        display: "flex",
        flexDirection: props.labelPosition === "top" ? "column" : "row",
        alignItems: props.labelPosition === "top" ? "flex-start" : "center",
        justifyContent: "left",
        width: "fit-content",
        ...props.containerStyle,
      }}
    >
      {props.label ? (
        <div
          ref={labelRef}
          className={classNames("evp", "label", props.class)}
          style={{
            fontSize: props.labelSize,
            width: labelWidth,
            justifyContent: labelAlign,
            ...props.style,
          }}
        >
          {props.required ? <div className="evp-required">*</div> : void 0}
          {props.label}
          {props.labelColon === true ? ":" : props.labelColon ?? void 0}
        </div>
      ) : null}
      {props.children}
    </div>
  );
}
