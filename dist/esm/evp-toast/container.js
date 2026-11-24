import { __assign, __spreadArray } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import store from './store.js';

var ToastsContainer = function (props) {
    var _a;
    var toasts = (_a = props.toasts) !== null && _a !== void 0 ? _a : [];
    return (jsx("div", __assign({ className: "evp evp-toasts-container ".concat(props.placement || "top") }, { children: store.config.reverse ? __spreadArray([], toasts, true).reverse() : toasts }), props.id));
};
function createToastsContainer(toasts, key, placement) {
    return jsx(ToastsContainer, { toasts: toasts, id: key, placement: placement }, key);
}

export { createToastsContainer, ToastsContainer as default };
