import React from "react";
import valParser from "../utils/val.parser";
import NumUtils from "../utils/num.util";

export type EvpCircleProps<T = any> = {
  class?: string;
  children?: React.ReactNode;
  items?: T[];
  schema?: {
    render?: (item: T, idx: number, items: T[]) => React.ReactNode;
    $hover?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    $leave?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    $in?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onMouseOver` Event */
    $on?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onFocus` Event */
    $focus?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onMouseDown` Event */
    $click?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onDoubleClick` Event */
    $doubleClick?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onContextMenu` Event */
    $context?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onMouseUp` Event */
    $loose?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onMouseMove` Event */
    $move?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onScroll` Event */
    $scroll?: boolean | React.UIEventHandler;
    /** Applied to `onMouseOut` Event */
    $off?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onMouseLeave` Event */
    $out?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;

    /** Applied to `onKeyDown` `Esc` and `BackSpace` Event */
    $esc?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onKeyDown` `Del` and `BackSpace` Event */
    $del?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onKeyDown` `Enter` Event */
    $enter?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    /** Applied to `onKeyDown` `Space` Event */
    $space?: (e: React.MouseEvent<HTMLDivElement>, item: T, idx: number, items: T[]) => void;
    class?: string;
    style?: React.CSSProperties;
    id?: string;
  };
  width?: number | string;
  itemSize?: number | string;
  style?: React.CSSProperties;
  mainProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

function calculateRadius(d: number, x: number): number {
  const r = (d / 2) * (1 - Math.cos((2 * Math.PI) / x));
  return r;
}

const EvpCircle: React.FC<EvpCircleProps> = (props) => {
  const items = props.items ?? [].map((i, idx) => props.schema?.render?.(i, idx, props.items ?? []));
  const mainProps = (() => {
    const { className, ...rest } =
      props.mainProps || ({} as React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>);
    return {
      class: props.mainProps?.className,
      rest: rest,
    };
  })();
  return (
    <div
      className="evp-circle"
      style={{
        // @ts-ignore
        "--evp-circle-width": valParser(props.width),
        "--_angle": `${360 / items.length}deg`,
        "--_length": `${items.length}`,
        "--evp-circle-item-size": `${
          props.itemSize
            ? valParser(props.itemSize)
            : `${
                calculateRadius(NumUtils.pickNum(props.width).value, items.length) + NumUtils.pickNum(props.width).unit
              })`
        }`,
      }}
    >
      {items.map((i, idx) => (
        <div
          key={i}
          className={`evp-circle__item ${props.schema?.class ? props.schema?.class + " " : ""}evp-circle__item--${i}`}
          style={{
            // @ts-ignore
            "--i": idx,
            ...props.schema?.style,
          }}
        >
          {props.schema?.render ? props.schema?.render?.(i, idx, props.items ?? []) : i}
          {/* <div className="evp-circle__item__inner">{i}</div> */}
        </div>
      ))}
      {
        <div className={`evp-circle__main ${mainProps.class ?? ""}`} {...mainProps.rest}>
          {props.children}
        </div>
      }
    </div>
  );
};

export default EvpCircle;
