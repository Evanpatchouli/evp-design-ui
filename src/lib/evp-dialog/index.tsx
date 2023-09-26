import classNames from "classnames";
import EvpModal from "../evp-modal";
import React from "react";
import EvpCard from "../evp-card";
import EvpButton from "../evp-button";

const DialogCloseEventExample = new Event("DialogCloseEvent", {
  bubbles: true,
  cancelable: false,
});
type DialogCloseEvent = typeof DialogCloseEventExample;

const DialogOpenEventExample = new Event("DialogOpenEvent", {
  bubbles: true,
  cancelable: false,
});
type DialogOpenEvent = typeof DialogOpenEventExample;

export type EvpDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: (e?: DialogCloseEvent) => void;
  onOpen?: (e?: DialogOpenEvent) => void;
} & React.ComponentProps<typeof EvpCard>;

export default function EvpDialog(props: EvpDialogProps) {
  const {
    open: propsOpen,
    setOpen: propsSetOpen,
    onClose,
    onOpen,
    class: className,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(false);
  const didMountRef = React.useRef(false);

  const realOpen = React.useCallback(() => {
    if (propsOpen === undefined) {
      return open;
    }
    return propsOpen;
  }, [open, propsOpen]);

  React.useEffect(() => {
    if (didMountRef.current) {
      if (realOpen() === false) {
        onClose && onClose();
      } else if (realOpen() === true) {
        onOpen && onOpen();
      }
    } else {
      didMountRef.current = true;
    }
  }, [onClose, onOpen, realOpen]);

  return (
    <EvpModal open={props.open !== undefined ? props.open : open}>
      <EvpCard
        class={classNames(`evp`, `evp-dialog`, className)}
        w={400}
        h={200}
        toolbarStyle={{
          padding: 12,
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              theme="white"
              mgr_8
              $click={() => {
                propsSetOpen?.(false);
                setOpen(false);
              }}
            >
              cancle
            </EvpButton>
            <EvpButton
              $click={() => {
                propsSetOpen?.(false);
                setOpen(false);
              }}
            >
              confirm
            </EvpButton>
          </>
        }
        {...rest}
      ></EvpCard>
    </EvpModal>
  );
}
