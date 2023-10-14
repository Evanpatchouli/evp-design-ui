import classNames from "classnames";
import { useState } from "react";
import { type EvpCursorRule, type EvpDisplayRule } from "../typings";
import { OffsetMap, transformMap } from "./map";
import { Hintable } from "../utils";

export type PositionOptions =
  | "top"
  | "topLeft"
  | "topLeftCorner"
  | "topRight"
  | "topRightCorner"
  | "left"
  | "leftTop"
  | "leftBottom"
  | "right"
  | "rightTop"
  | "rightBottom"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "bottomLeftCorner"
  | "bottomRightCorner";

export type EvpToolTipProps = {
  /** The element to trigger tooltip */
  children?: React.ReactNode;
  /** tooltip content */
  content?: React.ReactNode;
  /** tooltip content className */
  class?: string;
  /** manage hidden customly */
  hidden?: boolean;
  /** tooltip content font color */
  color?: string;
  /** tooltip content background color */
  bgColor?: string;
  /** tooltip content border */
  border?: string;
  /** whether to make tooltip plain, default is false */
  plain?: boolean;
  /** tooltip content style */
  style?: React.CSSProperties;
  /** Default is hover */
  trigger?: "hover" | "click" | Array<"hover" | "click">;
  /** cursor type while hovering trigger, default is only when trigger is "click" to be "pointer" */
  cursor?: EvpCursorRule;
  /** the display of trigger tooltip container */
  display?: EvpDisplayRule;
  position?:
    | PositionOptions
    | {
        top?: string | number;
        left?: string | number;
      };
  transform?: {
    vertical?: Hintable<"top" | "center" | "bottom" | number>;
    horizontal?: Hintable<"left" | "center" | "right" | number>;
  };
};

export default function EvpToolTip(props: EvpToolTipProps) {
  const [hidden, setHidden] = useState(true);
  const triggers: "hover" | "click" | Array<"hover" | "click"> = props.trigger
    ? typeof props.trigger === "string"
      ? [props.trigger]
      : props.trigger
    : ["hover"];

  const offsetMap: Record<
    Hintable<PositionOptions>,
    {
      top: string;
      left: string;
      transform: string;
    }
  > = OffsetMap(props);

  return (
    <div
      className="evp evp-tooltip-container"
      onMouseOver={() => {
        if (triggers.includes("hover")) {
          setHidden(false);
        }
      }}
      onMouseLeave={() => {
        if (triggers.includes("hover")) {
          setHidden(true);
        }
      }}
      onClick={() => {
        if (triggers.includes("click")) {
          setHidden(!hidden);
        }
      }}
      style={{
        display: props.display,
        cursor: props.cursor ?? triggers.includes("click") ? "pointer" : void 0,
      }}
    >
      <div
        className="evp-tooltip"
        style={{
          visibility: (typeof props.hidden === "boolean" ? props.hidden : hidden) ? "hidden" : "visible",
          pointerEvents: (typeof props.hidden === "boolean" ? props.hidden : hidden) ? "none" : "auto",
          ...(typeof (props.position ?? "top") === "string"
            ? offsetMap[(props.position ?? "top") as string]
            : {
                ...(props.position as {}),
                transform: `translateX(${
                  transformMap.vertical[props.transform?.vertical ?? "center"] ?? props.transform?.vertical
                }) translateY(${
                  transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
                })`,
              }),
        }}
      >
        <div
          className={classNames("evp-tooltip-content", props.class)}
          style={{
            padding: "4px 12px 4px 12px",
            color: props.plain ? "#000" : props.color,
            backgroundColor: props.plain ? "#fff" : props.bgColor ?? "rgba(0, 0, 0, 0.75)",
            border: props.border ?? `1px ${props.bgColor ?? "rgba(60, 60, 60, 1)"} solid`,
            ...props.style,
          }}
        >
          {props.content}
        </div>
      </div>
      {props.children}
    </div>
  );
}
