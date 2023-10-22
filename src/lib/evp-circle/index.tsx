import React from "react";
import valParser from "../utils/val.parser";

export type EvpCircleProps = {
  items?: any[];
  schema?: {
    render?: (item: any, idx: number, items: any[]) => React.ReactNode;
    onClick?: (item: any, idx: number, items: any[]) => void;
    onMouseEnter?: (item: any, idx: number, items: any[]) => void;
    onMouseLeave?: (item: any, idx: number, items: any[]) => void;
    onContextMenu?: (item: any, idx: number, items: any[]) => void;
    onDoubleClick?: (item: any, idx: number, items: any[]) => void;
    onKeyDown?: (item: any, idx: number, items: any[]) => void;
    onKeyUp?: (item: any, idx: number, items: any[]) => void;
    onKeyPress?: (item: any, idx: number, items: any[]) => void;
    onFocus?: (item: any, idx: number, items: any[]) => void;
    onBlur?: (item: any, idx: number, items: any[]) => void;
    onDragStart?: (item: any, idx: number, items: any[]) => void;
    onDragEnd?: (item: any, idx: number, items: any[]) => void;
    onDragEnter?: (item: any, idx: number, items: any[]) => void;
    onDragOver?: (item: any, idx: number, items: any[]) => void;
    onDragLeave?: (item: any, idx: number, items: any[]) => void;
    onDrop?: (item: any, idx: number, items: any[]) => void;
    onMouseDown?: (item: any, idx: number, items: any[]) => void;
    onMouseUp?: (item: any, idx: number, items: any[]) => void;
    onMouseMove?: (item: any, idx: number, items: any[]) => void;
    onMouseOut?: (item: any, idx: number, items: any[]) => void;
    onMouseOver?: (item: any, idx: number, items: any[]) => void;
    onPointerDown?: (item: any, idx: number, items: any[]) => void;
    onPointerUp?: (item: any, idx: number, items: any[]) => void;
    onPointerMove?: (item: any, idx: number, items: any[]) => void;
    onPointerCancel?: (item: any, idx: number, items: any[]) => void;
    onPointerEnter?: (item: any, idx: number, items: any[]) => void;
    onPointerLeave?: (item: any, idx: number, items: any[]) => void;
    onPointerOver?: (item: any, idx: number, items: any[]) => void;
    onPointerOut?: (item: any, idx: number, items: any[]) => void;
    onTouchStart?: (item: any, idx: number, items: any[]) => void;
    onTouchEnd?: (item: any, idx: number, items: any[]) => void;
    onTouchMove?: (item: any, idx: number, items: any[]) => void;
    onTouchCancel?: (item: any, idx: number, items: any[]) => void;
    onContextMenuCapture?: (item: any, idx: number, items: any[]) => void;
    onDoubleClickCapture?: (item: any, idx: number, items: any[]) => void;
    onDrag?: (item: any, idx: number, items: any[]) => void;
    onDragEndCapture?: (item: any, idx: number, items: any[]) => void;
    onDragEnterCapture?: (item: any, idx: number, items: any[]) => void;
    onDragExit?: (item: any, idx: number, items: any[]) => void;
    onDragExitCapture?: (item: any, idx: number, items: any[]) => void;
    onDragLeaveCapture?: (item: any, idx: number, items: any[]) => void;
    onDragOverCapture?: (item: any, idx: number, items: any[]) => void;
    onDragStartCapture?: (item: any, idx: number, items: any[]) => void;
    onDropCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseDownCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseEnterCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseLeaveCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseMoveCapture?: (item: any, idx: number, items: any[]) => void;

    onMouseOutCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseOverCapture?: (item: any, idx: number, items: any[]) => void;
    onMouseUpCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerDownCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerMoveCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerUpCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerCancelCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerEnterCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerLeaveCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerOverCapture?: (item: any, idx: number, items: any[]) => void;
    onPointerOutCapture?: (item: any, idx: number, items: any[]) => void;
    onTouchCancelCapture?: (item: any, idx: number, items: any[]) => void;
    onTouchEndCapture?: (item: any, idx: number, items: any[]) => void;
    onTouchMoveCapture?: (item: any, idx: number, items: any[]) => void;
    onTouchStartCapture?: (item: any, idx: number, items: any[]) => void;
    onScrollCapture?: (item: any, idx: number, items: any[]) => void;
    onWheelCapture?: (item: any, idx: number, items: any[]) => void;
    onScroll?: (item: any, idx: number, items: any[]) => void;
    onWheel?: (item: any, idx: number, items: any[]) => void;
    onCompositionEnd?: (item: any, idx: number, items: any[]) => void;
    onCompositionStart?: (item: any, idx: number, items: any[]) => void;
    onCompositionUpdate?: (item: any, idx: number, items: any[]) => void;
    onCompositionEndCapture?: (item: any, idx: number, items: any[]) => void;
    onCompositionStartCapture?: (item: any, idx: number, items: any[]) => void;
    onCompositionUpdateCapture?: (item: any, idx: number, items: any[]) => void;
    onKeyDownCapture?: (item: any, idx: number, items: any[]) => void;
    onKeyUpCapture?: (item: any, idx: number, items: any[]) => void;
    onKeyPressCapture?: (item: any, idx: number, items: any[]) => void;
    onFocusCapture?: (item: any, idx: number, items: any[]) => void;
    onBlurCapture?: (item: any, idx: number, items: any[]) => void;
    onBeforeInput?: (item: any, idx: number, items: any[]) => void;
    onInput?: (item: any, idx: number, items: any[]) => void;
    onChange?: (item: any, idx: number, items: any[]) => void;
    onClickCapture?: (item: any, idx: number, items: any[]) => void;
  };
  width?: number | string;
  itemSize?: number | string;
};

const EvpCircle: React.FC<EvpCircleProps> = (props) => {
  const items = props.items ?? [].map((i, idx) => props.schema?.render?.(i, idx, props.items ?? []));
  return (
    <div
      className="evp-circle"
      style={{
        // @ts-ignore
        "--evp-circle-width": valParser(props.width),
        "--_angle": `${360 / items.length}deg`,
        "--_length": `${items.length}`,
        "--evp-circle-item-size": `${valParser(props.itemSize ?? 200 / items.length + "%")}`,
      }}
    >
      {items.map((i, idx) => (
        <div
          key={i}
          className={`evp-circle__item evp-circle__item--${i}`}
          style={{
            // @ts-ignore
            "--i": idx,
          }}
        >
          <div className="evp-circle__item__inner">{i}</div>
        </div>
      ))}
    </div>
  );
};

export default EvpCircle;
