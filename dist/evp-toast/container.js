'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var store = require('./store.js');

var ToastsContainer = function (props) {
    var _a;
    var toasts = (_a = props.toasts) !== null && _a !== void 0 ? _a : [];
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp evp-toasts-container ".concat(props.placement || "top") }, { children: store["default"].config.reverse ? tslib.__spreadArray([], toasts, true).reverse() : toasts }), props.id));
};
function createToastsContainer(toasts, key, placement) {
    return jsxRuntime.jsx(ToastsContainer, { toasts: toasts, id: key, placement: placement }, key);
}

exports.createToastsContainer = createToastsContainer;
exports["default"] = ToastsContainer;
