import classNames from "classnames";
import React from "react";
import valParser from "../utils/val.parser";
import { Hintable } from "../utils";
import { parseSize } from "./parser";

export type EvpTitleProps = {
  stressed?: boolean;
  stressLineColor?: string;
  size?: Hintable<"mn" | "sm" | "md" | "lg" | "hg"> | number;
  weight?: string | number;
  fontSize?: string | number;
  underline?: boolean | string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const EvpTitle: React.FC<EvpTitleProps> = ({
  className,
  id,
  stressed,
  stressLineColor,
  size,
  weight,
  fontSize,
  underline,
  style,
  ...props
}) => {
  const _fontSize = style?.fontSize ?? fontSize;
  return (
    <div
      className={classNames("evp", "evp-title", className)}
      id={id}
      style={{
        // @ts-ignore
        "--fontSize": valParser<string | undefined>(_fontSize ?? parseSize(size)),
      }}
    >
      {stressed ? (
        <div
          className="evp-title__left-stresses-line"
          style={{
            // @ts-ignore
            "--bgColor": stressLineColor,
          }}
        ></div>
      ) : null}
      <div
        className="evp-title__main"
        style={(() => {
          const { fontSize, ...rest } = style ?? {};
          return {
            textDecorationLine: underline === true ? "underline" : underline || "none",
            fontWeight: weight ?? "bold",
            ...rest,
          };
        })()}
        {...props}
      ></div>
    </div>
  );
};

export default EvpTitle;
