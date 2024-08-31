import Dialog, { EvpDialogProps as DialogProps } from "../evp-dialog";
import React, { useEffect, useRef } from "react";
import render from "./render";
import classNames from "classnames";

const Alert = ({
  content,
  onClose,
  onOpen,
  class: classname,
  ...props
}: { content?: React.ReactNode } & AlertOptions) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const current = divRef.current;
    // Forbid mouse wheel
    current?.addEventListener("wheel", closeDefault, { passive: false });
    return () => {
      // @ts-ignore
      current?.removeEventListener("wheel", closeDefault, { passive: false });
    };
  }, []);

  function closeDefault(e: any) {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onOpen?.();

  return (
    <div
      onWheel={(e) => {
        e.preventDefault();
      }}
      onTouchMove={(e) => {
        e.preventDefault();
      }}
      onTouchStart={(e) => {
        e.preventDefault();
      }}
      ref={divRef}
    >
      <Dialog
        defaultOpen={true}
        onClose={() => {
          onClose?.();
          render(<></>);
        }}
        class={classNames(classname, "evp-alert")}
        {...props}
      >
        {content}
      </Dialog>
    </div>
  );
};

export type AlertOptions = DialogProps;

export default Alert;
