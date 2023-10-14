import classNames from "classnames";
import EvpModal from "../evp-modal";
import React from "react";
import EvpCard, { EvpCardProps } from "../evp-card/index.v2";
import EvpButton, { EvpButtonProps } from "../evp-button";
import Close from "../evp-icon/close";

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
  cancelProps?: EvpButtonProps;
  confirmProps?: EvpButtonProps;
  /**
   * **This is applied to content rather than the whole card**
   */
  loading?: boolean;
} & EvpCardProps;

export default function EvpDialog(props: EvpDialogProps) {
  const { open, setOpen, onClose, onOpen, class: className, ...rest } = props;

  return (
    <EvpModal open={props.open !== undefined ? props.open : open} onClose={onClose} onOpen={onOpen}>
      <EvpCard
        class={classNames(`evp`, `evp-dialog`, className)}
        w={400}
        h={200}
        headerProps={{
          justifyContent: "flex-end",
        }}
        header={
          <>
            <Close
              class="evp-dialog-close-btn"
              onClick={() => {
                setOpen?.(false);
              }}
            />
          </>
        }
        footerProps={{
          justifyContent: "flex-end",
        }}
        footer={
          <>
            <EvpButton
              theme="white"
              mgr_8
              text="cancel"
              $click={() => {
                setOpen?.(false);
              }}
              {...props.cancelProps}
            />
            <EvpButton
              text="confirm"
              $click={() => {
                setOpen?.(false);
              }}
              {...props.confirmProps}
            />
          </>
        }
        {...rest}
      ></EvpCard>
    </EvpModal>
  );
}
