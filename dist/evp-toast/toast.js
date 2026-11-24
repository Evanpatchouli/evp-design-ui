'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var constant = require('../constant.js');
var index = require('../evp-icon/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function Toast(props) {
    var _a, _b;
    var icon = {
        info: "info",
        warn: "warn",
        error: "error",
        success: "true_circle",
    };
    var color = {
        info: constant.Color.Gray,
        warn: constant.Color.Orange,
        error: constant.Color.Red,
        success: constant.Color.Green,
    };
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-toast", props.firstRendered ? "evp-toast-appear" : "", props.lastRendered ? "evp-toast-leave" : "") }, { children: [jsxRuntime.jsx(index["default"], { name: icon[(_a = props.type) !== null && _a !== void 0 ? _a : "info"], color: color[(_b = props.type) !== null && _b !== void 0 ? _b : "info"] }), jsxRuntime.jsx("div", { children: props.text })] }), "evp-toast:".concat(props.id)));
}

exports["default"] = Toast;
