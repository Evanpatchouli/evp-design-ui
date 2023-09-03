import { useEffect, useRef, useState } from "react";
import "./index.css";
import EvpBaseProps from "../props";
import EvpDom from "../evp-dom";

export interface EvpPopoverProps extends EvpBaseProps {
  content?: React.ReactNode;
  children: JSX.Element;
  style?: React.CSSProperties;
  class?: string;
  id?: string;
  trigger?: "hover" | "click";
  hiddenOnBlur?: boolean,
  position?:
    | "top"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "left"
    | "leftTop"
    | "leftBottom"
    | "right"
    | "rightTop"
    | "rightBottom"
    | "upperLeftCorner"
    | "upperRightCorner"
    | "lowerLeftCorner"
    | "lowerRightCorner";
}

export default function EvpPopover(props: EvpPopoverProps) {
  const [show, setShow] = useState<boolean>(false);
  const [display, setDisplay] = useState<undefined | "none">("none");
  const [undisCounter, setUndisCounter] = useState<
    NodeJS.Timeout | undefined
  >();
  const $trigger = props.trigger ?? "click";

  const $hiddenOnBlur = props.hiddenOnBlur ?? true;

  const childRef = useRef<HTMLDivElement>(null);

  const left = () => {
    if (["topLeft", "bottomLeft"].includes(props.position ?? "top")) {
      return (childRef.current?.clientWidth ?? 0) * 0.2;
    } else if (
      [
        "left",
        "leftTop",
        "leftBottom",
        "upperLeftCorner",
        "lowerLeftCorner",
      ].includes(props.position ?? "top")
    ) {
      return 0;
    } else if (["topRight", "bottomRight"].includes(props.position ?? "top")) {
      return (childRef.current?.clientWidth ?? 0) * 0.8;
    } else if (
      [
        "right",
        "rightTop",
        "rightBottom",
        "upperRightCorner",
        "lowerRightCorner",
      ].includes(props.position ?? "top")
    ) {
      return childRef.current?.clientWidth ?? 0;
    } else if (["top", "bottom"].includes(props.position ?? "top")) {
      return (childRef.current?.clientWidth ?? 0) * 0.5;
    }
  };

  const top = () => {
    if (
      [
        "top",
        "topLeft",
        "topRight",
        "upperLeftCorner",
        "upperRightCorner",
      ].includes(props.position ?? "top")
    ) {
      return 0;
    } else if (["leftTop", "rightTop"].includes(props.position ?? "top")) {
      return (childRef.current?.clientHeight ?? 0) * 0.2;
    } else if (["left", "right"].includes(props.position ?? "top")) {
      return (childRef.current?.clientHeight ?? 0) * 0.5;
    } else if (
      ["leftBottom", "rightBottom"].includes(props.position ?? "top")
    ) {
      return (childRef.current?.clientHeight ?? 0) * 0.8;
    } else if (
      [
        "bottom",
        "bottomLeft",
        "bottomRight",
        "lowerLeftCorner",
        "lowerRightCorner",
      ].includes(props.position ?? "top")
    ) {
      return childRef.current?.clientHeight ?? 0;
    }
  };

  useEffect(() => {
    if (show) {
      setDisplay(undefined);
      clearTimeout(undisCounter);
      setUndisCounter(undefined);
    } else {
      const counter = setTimeout(() => {
        setDisplay("none");
      }, 200);
      setUndisCounter(counter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <div className={`evp evp-popover-container`}>
      <div
        className={`evp-popover ${show ? "" : "evp-popover__hidden"}`.trim()}
        id={props.id}
        style={{ display, left: left(), top: top() }}
      >
        <EvpDom props={{
          props,
          class: `evp-popover-content ${props.class}`.trim()
        }}>
          {props.content}
        </EvpDom>
        <svg className="evp-popover-arrow"
        width={16}
        height={10}
        viewBox="0 0 16 10"
        >
          <polygon
            points="0,0 16,0 8,10"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div
        onClick={() => ($trigger === "click" ? setShow(!show) : void 0)}
        onMouseOver={() => ($trigger === "hover" ? setShow(true) : void 0)}
        onMouseLeave={() => ($trigger === "hover" ? setShow(false) : void 0)}
        onBlur={() => $hiddenOnBlur === true? setShow(false) : void 0}
      >
        <div ref={childRef}>{props.children}</div>
      </div>
    </div>
  );
}
