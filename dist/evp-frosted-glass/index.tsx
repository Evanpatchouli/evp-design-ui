import React from "react";
import { Hintable } from "../utils";
import EvpBaseProps from "../props";
import Dom from "../evp-dom";
import classNames from "classnames";

export type EvpFrostedGlassProps = {
  background?: string;
  filterAlpha?: number;
  filterBackGround?: string;
  filterBlur?: number;
  radius?: number;
  border?: string;
  borderWidth?: number;
  borderStyle?: Hintable<"solid" | "dashed" | "dotted" | "none">;
  borderColor?: string;
} & EvpBaseProps;

const EvpFrostedGlass: React.FC<EvpFrostedGlassProps> = (props: EvpFrostedGlassProps) => {
  const {
    class: className,
    radius,
    border,
    borderWidth,
    borderStyle,
    borderColor,
    background,
    filterAlpha,
    filterBackGround,
    filterBlur,
    style,
    children,
    ...rest
  } = props;
  return (
    <Dom
      className={classNames("evp", "evp-frosted-glass__background", className)}
      style={{
        background: background,
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      {children}
      <div
        style={{
          background: filterBackGround ?? `rgba(255, 255, 255, ${filterAlpha ?? "0.1"})`,
          backdropFilter: `blur(${filterBlur ?? 10}px)`,
          WebkitBackdropFilter: `blur(${radius ?? 0}px)`,
          borderRadius: `${radius ?? 0}px`,
          border: border ?? "1px solid rgba(255, 255, 255, 0.2)",
          borderStyle: borderStyle ?? "solid",
          borderWidth: borderWidth ?? 1,
          borderColor: borderColor ?? "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
        }}
      />
    </Dom>
  );
};

export default EvpFrostedGlass;
