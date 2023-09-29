import classNames from "classnames";
import { useEffect, useRef } from "react";

export type EvpModalProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  /**
   * @defaultValue 0%
   * @desc left
   * */
  x?: string;
  /**
   * @defaultValue -50%
   * @desc translateX
   * */
  translateX?: string;
  /**
   * @defaultValue 0%
   * @desc top
   * */
  y?: string;
  /**
   * @defaultValue -50%
   * @desc translateY
   * */
  translateY?: string;
  contentClass?: string;
  contentStyle?: React.CSSProperties;
  modalClass?: string;
  modalStyle?: React.CSSProperties;
  /**
   * @defaultValue 0.5
   * @type {number} between 0 and 1
   * @desc Modal background color opacity
   * */
  alpha?: number;
  scrollable?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

export default function EvpModal(props: EvpModalProps) {
  const { open, onClose, onOpen } = props;
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      if (open === true) {
        onOpen?.();
      } else {
        onClose?.();
      }
    } else {
      didMountRef.current = true;
    }
  }, [open]);
  
  return (
    <div
      className={classNames(`evp`, `evp-modal`, props.modalClass)}
      hidden={!props.open}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${props.alpha ?? "0.5"})`,
        ...props.modalStyle
      }}
      onTouchStart={(e) => {
        if (!props.scrollable) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <div
        className={classNames(`evp-modal__content`, props.contentClass)}
        style={{
          left: props.x,
          top: props.y,
          transform: `translate(${props.translateX ?? "-50%"}, ${props.translateY ?? "-50%"})`,
          ...props.contentStyle,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
