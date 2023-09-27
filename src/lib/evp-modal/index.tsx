import classNames from "classnames";
import Toast from "../evp-toast";
import { useCallback, useEffect, useMemo, useRef } from "react";

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
  /**
   * @defaultValue 0.5
   * @desc Modal background color opacity
   * number between 0 and 1
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
      if (`${open}` === `true`) {
        onClose?.();
      } else if (`${open}` === `false`) {
        onOpen?.();
      }
    } else {
      didMountRef.current = true;
    }
  }, [open]);
  return (
    <div
      className={classNames(`evp`, `evp-modal`)}
      hidden={!props.open}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${props.alpha ?? "0.5"})`,
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
