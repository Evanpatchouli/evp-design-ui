import { useEffect, useRef } from "react";
import Dialog, { EvpDialogProps as DialogProps } from "../evp-dialog";
import { createRoot } from "react-dom/client";

export const createAlert = () => {};

let div = document.createElement("div");
document.body.appendChild(div);
const root = createRoot(div);

function render(dom: JSX.Element) {
  root.render(dom);
}

const Alert = ({ content, onClose, onOpen, ...props }: { content?: React.ReactNode } & AlertOptions) => {
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
        h={"fit-content"}
        {...props}
      >
        {content}
      </Dialog>
    </div>
  );
};

export type AlertOptions = DialogProps;

const core = {
  alert: (content?: React.ReactNode, options?: AlertOptions) => {
    render(<Alert content={content} {...options} />);
  },
};

export default core;
