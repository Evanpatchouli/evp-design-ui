import React from "react";
import store from "./store";

export type ToastPlacement = "top" | "bottom" | "leftBottom" | "rightBottom" | "leftTop" | "rightTop" | "center";
interface ToastsContainerProps {
  toasts?: (JSX.Element | React.ReactNode)[];
  key?: any;
  id?: any;
  placement?: ToastPlacement;
}

const ToastsContainer: React.FC<ToastsContainerProps> = (props) => {
  React.useEffect(() => {}, [props.toasts]);
  const toasts = props.toasts ?? [];
  const Toasts = toasts.map((toast, index) => <>{toast}</>);
  return (
    <div key={props.id} className={`evp evp-toasts-container ${props.placement || "top"}`}>
      {store.config.reverse ? Toasts.reverse() : Toasts}
    </div>
  );
};

export function createToastsContainer(
  toasts: (JSX.Element | React.ReactNode)[],
  key?: any,
  placement?: ToastPlacement
) {
  return <ToastsContainer toasts={toasts} key={key} id={key} placement={placement} />;
}

export default ToastsContainer;
