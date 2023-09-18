import classNames from "classnames";
import { useRef, useState } from "react";
import { type EvpCursorRule, type EvpDisplayRule } from "../typings";

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
};

export default function EvpToolTip(props: EvpToolTipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const calcCtnLeft = () => ((ref.current?.clientWidth ?? 0) - (contentRef.current?.clientWidth ?? 0)) / 2;
  const triggers: "hover" | "click" | Array<"hover" | "click"> = props.trigger
    ? typeof props.trigger === "string"
      ? [props.trigger]
      : props.trigger
    : ["hover"];
  return (
    <div
      className="evp evp-tooltip-container"
      ref={ref}
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
          left: calcCtnLeft(),
        }}
      >
        <div
          ref={contentRef}
          className={classNames("evp-tooltip-content", props.class)}
          style={{
            padding: "4px 12px 4px 12px",
            color: props.plain ? "#000" : props.color,
            backgroundColor: props.plain ? "#fff" : props.bgColor,
            border: props.border ?? `1px ${props.bgColor ?? "rgba(60, 60, 60, 1) solid"}`,
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
