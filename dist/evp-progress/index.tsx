import React, { useEffect, useRef } from "react";
import classNames from "classnames";

export type EvpProgressProps = {
  value?: number;
  onChange?: (value: number) => void;
  size?: number | "sm" | "md" | "lg";
  min?: number;
  max?: number;
  fillColor?: string;
  textColor?: string;
  blankColor?: string;
  textBlankColor?: string;
  class?: string;
  id?: string;
  style?: React.CSSProperties;
} & React.DOMAttributes<HTMLDivElement>;

function pickEvents(props: any) {
  const events: any = {};
  for (const key in props) {
    if (key.startsWith("on")) {
      events[key] = props[key];
    }
  }
  return events;
}

export const EvpProgress: React.FC<EvpProgressProps> = ({ value, onChange, ...props }) => {
  const rate = () => {
    return ((value ? value - (props.min ?? 0) : 0) * 100) / (props.max ?? 100);
  };

  const didMounted = useRef(false);

  const sizeMap = {
    sm: "40px",
    md: "100px",
    lg: "200px",
  };

  useEffect(() => {
    if (didMounted.current === true) {
      onChange?.(value ?? 0);
      // if (value !== undefined) {
      //   const mask = document.querySelector(`#${props.id} .${styles["evp-progress__mask"]}`);
      //   if (mask) {
      //     mask.classList.add(styles["evp-progress__mask--active"]);
      //     setTimeout(() => {
      //       mask.classList.remove(styles["evp-progress__mask--active"]);
      //     }, 1000);
      //   }
      // }
    } else {
      didMounted.current = true;
    }
  }, [value]);

  return (
    <div
      className={classNames("evp-progress", props.class)}
      id={props.id}
      style={{
        // @ts-ignore
        "--size":
          typeof props.size === "number"
            ? `${props.size}px`
            : props.size && ["sm", "md", "lg"].includes(props.size)
            ? sizeMap[props.size]
            : props.size ?? "100px",
        "--fillColor": rate() > 50 ? props.fillColor ?? "#6ed4bf" : "transparent",
        "--textColor": props.textColor ?? props.fillColor ?? "#6ed4bf",
        "--bgColor": rate() > 50 ? props.fillColor ?? "#6ed4bf" : props.blankColor ?? "#ffffff",
        "--blankColor": props.blankColor ?? "#ffffff",
        "--fillAfterColor": rate() > 50 ? "transparent" : props.fillColor ?? "#6ed4bf",
        "--textBlankColor": props.textBlankColor ?? props.blankColor ?? "#ffffff",
        "--fillRotate": `${(360 * rate()) / 100 - 180}deg`,
        ...props.style,
      }}
      {...pickEvents(props)}
    >
      <div className={"evp-progress__extra"}></div>
      <div className={"evp-progress__fill"}></div>
      <div className={"evp-progress__mask"}>
        <span>{`${rate()}%`}</span>
      </div>
    </div>
  );
};

export default EvpProgress;
