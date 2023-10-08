import classNames from "classnames";
import React from "react";
import valParser from "../utils/val.parser";

export type EvpTitleProps = {
  stressed?: boolean;
  stressLineColor?: string;
  fontSize?: string | number;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const EvpTitle: React.FC<EvpTitleProps> = ({ className, id, stressed, stressLineColor, fontSize, style, ...props }) => {
  const _fontSize = fontSize ?? style?.fontSize;
  return (
    <div
      className={classNames("evp", "evp-title", className)}
      id={id}
      style={{
        // @ts-ignore
        "--fontSize": valParser(_fontSize),
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
          return rest;
        })()}
        {...props}
      ></div>
    </div>
  );
};

export default EvpTitle;
