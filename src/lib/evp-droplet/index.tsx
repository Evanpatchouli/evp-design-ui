import { range } from "../utils/num.util";
import Dom from "../evp-dom";
import EvpBaseProps from "../props";
import React from "react";

export type EvpDropletProps = {
  /**
   * @defaultValue `61% 39% 57% 43% / 46% 67% 33% 54%;`
   */
  borderRadius?: string;
  wave?: boolean;
  lightSpot?: boolean | number;
  lightSpotSize?:
    | number
    | {
        min?: number;
        max?: number;
      };
} & EvpBaseProps;

const EvpDroplet: React.FC<EvpDropletProps> = ({
  class: className,
  borderRadius,
  wave,
  lightSpot,
  lightSpotSize,
  style,
  children,
  ...props
}) => {
  const [ran1, ran2] = [Math.random() * 10, Math.random() * 10];
  const min = Math.min(Math.floor(ran1), Math.floor(ran2));
  const max = Math.max(Math.floor(ran1), Math.floor(ran2));
  const spotSetting = typeof lightSpotSize === "number" ? { min: lightSpotSize, max: lightSpotSize } : lightSpotSize;
  return (
    <Dom
      class={`evp-droplet ${className ?? ""}`.trim()}
      style={{
        borderRadius: borderRadius ?? "61% 39% 57% 43% / 46% 67% 33% 54%",
        // @ts-ignore
        "--border-radius": borderRadius ?? "61% 39% 57% 43% / 46% 67% 33% 54%",
        animationName: wave === true ? void 0 : "none",
        ...style,
      }}
      {...props}
    >
      {children}
      {lightSpot !== false &&
        (typeof lightSpot === "number" ? range(1, lightSpot) : range(min, max)).map(() => {
          return (
            <div
              className="light-spot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 12}px`,
                animationDuration: `${(Math.random() || (spotSetting?.min ?? 4) / 10) * (spotSetting?.max ?? 12)}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          );
        })}
    </Dom>
  );
};

export default EvpDroplet;
