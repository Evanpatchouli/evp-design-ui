import store from "./store";
import { createRoot } from "react-dom/client";
import { createToastsContainer, ToastPlacement } from "./container";
import Toast, { EvpToastCreate, EvpToastType } from "./toast";
import { nanoid } from "nanoid";
import { Nullable } from "../utils";

const div = document.createElement("div");
document.body.appendChild(div);
const root = createRoot(div);

const containerKey = nanoid();

function rerender(placement?: ToastPlacement) {
  let toastor = store.toastor;
  if (!toastor) {
    store.toastor = createToastsContainer(
      store.toasts.map((toast) => toast.dom),
      containerKey,
      placement
    ); // new toasts container
    root.render(store.toastor); // rerender toastor
  } else {
    toastor = createToastsContainer(
      store.toasts.map((toast) => toast.dom),
      containerKey,
      placement
    );
    root.render(toastor); // rerender toastor
  }
  // after rerender, make all toasts tagged as not firstRendered
  if (!store.toasts) {
    store.toasts = [];
  } else {
    if (store.toasts.length > 0) {
      store.toasts = store.toasts.map(({ dom: { props } }: any) => {
        return {
          id: props.id,
          dom: createToast(props.id, props.type, props.text, props.keep, props.delay, false),
        };
      });
    }
  }
}

function addToast(
  type?: EvpToastType,
  text?: string,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  placement?: ToastPlacement
) {
  const timer = setTimeout(() => {
    const key = nanoid();
    store.toasts.push({
      id: key,
      dom: createToast(key, type, text, keep, delay),
    });
    rerender(placement);
    setTimeout(() => {
      let idx = store.toasts.findIndex(({ id }) => key === id);
      store.toasts[idx] = {
        id: key,
        dom: createToast(key, type, text, keep, delay, false, true),
      };
      rerender(placement);
      store.toasts = store.toasts.filter(({ id }) => key !== id);
      clearTimeout(timer);
    }, keep ?? 3000);
  }, delay ?? 0);
}

export interface EvpToastAdd {
  (text?: string, keep?: Nullable<number>, delay?: Nullable<number>, placement?: ToastPlacement): void;
}

const createToast: EvpToastCreate = (
  key: any,
  type?: EvpToastType,
  text?: string,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  firstRendered: boolean = true,
  lastRendered: boolean = false
) => {
  return (
    <Toast
      key={key}
      id={key}
      text={text}
      type={type}
      keep={keep}
      delay={delay}
      firstRendered={firstRendered}
      lastRendered={lastRendered}
    />
  );
};

/**
 * Render a global info toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastInfo: EvpToastAdd = (
  text?: any,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  placement?: ToastPlacement
) => {
  addToast("info", `${text}`, keep, delay, placement);
};

/**
 * Render a global warn toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastWarn: EvpToastAdd = (
  text?: any,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  placement?: ToastPlacement
) => {
  addToast("warn", `${text}`, keep, delay, placement);
};

/**
 * Render a global error message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastError: EvpToastAdd = (
  text?: any,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  placement?: ToastPlacement
) => {
  addToast("error", `${text}`, keep, delay, placement);
};

/**
 * Render a global success message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastSuccess: EvpToastAdd = (
  text?: any,
  keep?: Nullable<number>,
  delay?: Nullable<number>,
  placement?: ToastPlacement
) => {
  addToast("success", `${text}`, keep, delay, placement);
};

function setReverse(reverse?: "true" | "false" | true | false) {
  const $reverse = reverse ?? "true";
  if ($reverse === true || $reverse === "true") {
    store.config.reverse = true;
  } else {
    store.config.reverse = false;
  }
}

/** @todo */
export const context: () => readonly (JSX.Element | React.ReactNode)[] = () => JSON.parse(JSON.stringify(store.toasts));

const EvpToast = (text?: any, keep?: Nullable<number>, delay?: Nullable<number>, placement?: ToastPlacement) => {
  addToast("info", `${text}`, keep, delay, placement);
};

EvpToast.info = toastInfo;
EvpToast.warn = toastWarn;
EvpToast.error = toastError;
EvpToast.success = toastSuccess;
EvpToast.context = context;
EvpToast.setReverse = setReverse;

export default EvpToast;
