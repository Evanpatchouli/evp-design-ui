import Close from "../evp-icon/close";
import EvpCard, { EvpCardProps } from "../evp-card/index.v2";
import EvpModal from "../evp-modal";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { EvpDomProps } from "../evp-dom";

export type EvpDrawerProps = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  modal?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  position?: "left" | "right" | "top" | "bottom";
  header?: React.ReactNode;
  headerProps?: EvpDomProps;
  blur?: string | number | boolean;
} & EvpCardProps;

function cardProps(params: EvpDrawerProps) {
  const { open, setOpen, onClose, onOpen, modal, position, header, headerProps, blur, ...rest } = params;
  return rest;
}

export default function EvpDrawer(props: EvpDrawerProps) {
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
    <EvpModal
      open={true}
      modalClass={classNames(`evp-drawer-modal`, props.modal === false ? "without" : "", open ? "open" : "close")}
      contentClass={classNames(`evp-drawer-container`, props.position ?? "left", open ? "open" : "close")}
      blur={props.blur}
    >
      <EvpCard
        h={"100%"}
        w={"100%"}
        headerProps={
          props.headerProps ?? {
            justifyContent: "flex-end",
          }
        }
        header={
          props.header ?? (
            <>
              <Close
                class="evp-dialog-close-btn"
                onClick={() => {
                  props?.setOpen?.(false);
                }}
              />
            </>
          )
        }
        {...cardProps(props)}
      >
        {props.children}
      </EvpCard>
    </EvpModal>
  );
}
