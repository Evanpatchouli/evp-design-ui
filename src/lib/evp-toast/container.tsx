import React from "react";
import store from "./store";

interface ToastsContainerProps {
  toasts?: (JSX.Element | React.ReactNode)[]
}

const ToastsContainer: React.FC<ToastsContainerProps> = (props) => {
  React.useEffect(() => {
  }, [props.toasts]);
  const toasts = props.toasts??[];
  const Toasts = toasts.map((toast, index) => toast);
  return (
    <div className='evp evp-toasts-container'>
      {store.config.reverse? Toasts.reverse() : Toasts}
    </div>
  )
}

export function createToastsContainer(toasts: (JSX.Element | React.ReactNode)[]) {
  return <>
    <ToastsContainer toasts={toasts} />
  </>
}

export default ToastsContainer;