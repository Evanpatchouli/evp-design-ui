import store from './store';
import { createRoot } from 'react-dom/client';
import { createToastsContainer } from './container';
import Toast, { EvpToastCreate, EvpToastType } from './toast';
import './index.scss';

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div);

function rerender() {
  let toastor = createToastsContainer(store.toasts); // new toasts container
  root.render(toastor);  // rerender toastor
}

function addToast(dom: JSX.Element, keep?: number, delay?: number) {
  const timer = setTimeout(() => {
    store.toasts.push(dom);
    rerender();
    setTimeout(() => {
      store.toasts = store.toasts.filter(toast => toast !== dom);
      rerender();
      clearTimeout(timer);
    }, keep??3000);
  }, delay??0)
}

export interface EvpToastAdd {
  (text?: string,keep?: number,delay?: number): void;
}

const createToast: EvpToastCreate = (type?: EvpToastType, text?: string, keep?: number, delay?: number) => {
  const toast = Toast({
    text: text,
    type: type,
    keep: keep,
    delay: delay
  });
  return (<>{toast}</>);
}

/**
 * Render a global info toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastInfo: EvpToastAdd = (text?: string,keep?: number,delay?: number) => {
  addToast(createToast('info', text,keep,delay), keep, delay);
}

/**
 * Render a global warn toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastWarn: EvpToastAdd = (text?: string,keep?: number,delay?: number) => {
  addToast(createToast('warn', text,keep,delay), keep, delay);
}

/**
 * Render a global error message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastError: EvpToastAdd = (text?: string,keep?: number,delay?: number) => {
  addToast(createToast('error', text,keep,delay), keep, delay);
}

/**
 * Render a global success message
  * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
export const toastSuccess: EvpToastAdd = (text?: string,keep?: number,delay?: number) => {
  addToast(createToast('success', text,keep,delay), keep, delay);
}

function setReverse(reverse?: 'true' | 'false' | true | false) {
  const $reverse = reverse?? 'true';
  if ($reverse === true || $reverse === 'true') {
    store.config.reverse = true;
  } else {
    store.config.reverse = false;
  }
}

/** @todo */
export const context: ()=> readonly (JSX.Element | React.ReactNode)[] = () => JSON.parse(JSON.stringify(store.toasts));

const EvpToast = {
  info: toastInfo,
  warn: toastWarn,
  error: toastError,
  success: toastSuccess,
  context: context,
  /** setReverse : set the toasts sequence direction reversely, default is true */
  setReverse: setReverse
}

export default EvpToast;