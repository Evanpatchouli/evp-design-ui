import React from "react";
import store from "./store";

interface ToastsContainerProps {
  toasts?: (JSX.Element | React.ReactNode)[];
  key?: any;
  id?: any;
}

const ToastsContainer: React.FC<ToastsContainerProps> = (props) => {
  React.useEffect(() => {
  }, [props.toasts]);
  const toasts = props.toasts ?? [];
  const Toasts = toasts.map((toast, index) => <>{toast}</>);
  return <div key={props.id} className="evp evp-toasts-container">{store.config.reverse ? Toasts.reverse() : Toasts}</div>;
};

export function createToastsContainer(toasts: (JSX.Element | React.ReactNode)[], key?: any) {
  return <ToastsContainer toasts={toasts} key={key} id={key} />;
}

export default ToastsContainer;
