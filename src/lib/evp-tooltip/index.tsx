import { useRef, useState } from "react";

export type EvpToolTipProps = {
  children?: React.ReactNode;
  content?: React.ReactNode;
  class?: string;
  hidden?: boolean;
};

export default function EvpToolTip(props: EvpToolTipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(true);
  const calcCtnLeft = () =>
    ((ref.current?.clientWidth ?? 0) - (contentRef.current?.clientWidth ?? 0)) /
    2;
  return (
    <div
      className="evp evp-tooltip-container"
      ref={ref}
      onMouseOver={() => {
        setHidden(false);
      }}
      onMouseLeave={() => {
        setHidden(true);
      }}
    >
      <div
        className={`evp-tooltip ${props.class ?? ""}`.trim()}
        style={{
          visibility: (
            typeof props.hidden === "boolean" ? props.hidden : hidden
          )
            ? "hidden"
            : "visible",
          pointerEvents: (
            typeof props.hidden === "boolean" ? props.hidden : hidden
          )
            ? "none"
            : "auto",
          left: calcCtnLeft(),
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: "4px 12px 4px 12px",
          }}
        >
          {props.content}
        </div>
      </div>
      {props.children}
    </div>
  );
}
