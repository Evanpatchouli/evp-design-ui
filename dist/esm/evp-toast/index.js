import { jsx } from 'react/jsx-runtime';
import store from './store.js';
import { createRoot } from 'react-dom/client';
import { createToastsContainer } from './container.js';
import Toast from './toast.js';
import { nanoid } from 'nanoid';

var container;
function rerender(placement) {
    if (!store.toasts.length) {
        container === null || container === void 0 ? void 0 : container.root.unmount();
        container === null || container === void 0 ? void 0 : container.host.remove();
        container = undefined;
        return;
    }
    if (!container) {
        var host = document.createElement("div");
        document.body.appendChild(host);
        container = { host: host, root: createRoot(host), key: nanoid() };
    }
    container.root.render(createToastsContainer(store.toasts.map(function (toast) { return toast.dom; }), container.key, placement));
}
function addToast(type, text, keep, delay, placement) {
    setTimeout(function () {
        var key = nanoid();
        store.toasts.push({
            id: key,
            dom: createToast(key, type, text, keep, delay),
        });
        rerender(placement);
        setTimeout(function () {
            var idx = store.toasts.findIndex(function (_a) {
                var id = _a.id;
                return key === id;
            });
            if (idx < 0)
                return;
            store.toasts[idx] = {
                id: key,
                dom: createToast(key, type, text, keep, delay, false, true),
            };
            rerender(placement);
            // The leave animation in index.css lasts 200 ms.
            setTimeout(function () {
                store.toasts = store.toasts.filter(function (_a) {
                    var id = _a.id;
                    return key !== id;
                });
                rerender(placement);
            }, 200);
        }, keep !== null && keep !== void 0 ? keep : 3000);
    }, delay !== null && delay !== void 0 ? delay : 0);
}
var createToast = function (key, type, text, keep, delay, firstRendered, lastRendered) {
    if (firstRendered === void 0) { firstRendered = true; }
    if (lastRendered === void 0) { lastRendered = false; }
    return (jsx(Toast, { id: key, text: text, type: type, keep: keep, delay: delay, firstRendered: firstRendered, lastRendered: lastRendered }, key));
};
/**
 * Render a global info toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
var toastInfo = function (text, keep, delay, placement) {
    addToast("info", "".concat(text), keep, delay, placement);
};
/**
 * Render a global warn toast
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
var toastWarn = function (text, keep, delay, placement) {
    addToast("warn", "".concat(text), keep, delay, placement);
};
/**
 * Render a global error message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
var toastError = function (text, keep, delay, placement) {
    addToast("error", "".concat(text), keep, delay, placement);
};
/**
 * Render a global success message
 * @param text the toast text to display
 * @param keep how long to keep the toast, default is 3000ms (3s) because toast's content is usually s little short
 * @param delay how long to delay the toast, default is 0
 */
var toastSuccess = function (text, keep, delay, placement) {
    addToast("success", "".concat(text), keep, delay, placement);
};
function setReverse(reverse) {
    var $reverse = reverse !== null && reverse !== void 0 ? reverse : "true";
    if ($reverse === true || $reverse === "true") {
        store.config.reverse = true;
    }
    else {
        store.config.reverse = false;
    }
}
/** @todo */
var context = function () { return JSON.parse(JSON.stringify(store.toasts)); };
var EvpToast = function (text, keep, delay, placement) {
    addToast("info", "".concat(text), keep, delay, placement);
};
EvpToast.info = toastInfo;
EvpToast.warn = toastWarn;
EvpToast.error = toastError;
EvpToast.success = toastSuccess;
EvpToast.context = context;
EvpToast.setReverse = setReverse;

export { context, EvpToast as default, toastError, toastInfo, toastSuccess, toastWarn };
