'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-col/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpDateTimePicker = function (props) {
    var _a, _b;
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-datetime-picker", props.class) }, { children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", tslib.__assign({ className: "evp-datetime-picker-input" }, { children: (_b = (_a = props.children) !== null && _a !== void 0 ? _a : props.placeholder) !== null && _b !== void 0 ? _b : props.formatter })), jsxRuntime.jsx("span", tslib.__assign({ className: "evp-datetime-picker-icon" }, { children: "\uD83D\uDD50" }))] }) })) })));
};

exports["default"] = EvpDateTimePicker;
