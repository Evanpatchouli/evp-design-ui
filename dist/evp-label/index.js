'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpLabel(props) {
    var _a;
    var labelRef = React.useRef(null);
    var labelWidth = props.labelWidth ? props.labelWidth : "fit-content";
    var labelAlign = props.labelAlign ? props.labelAlign : "left";
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp-label-container", props.containerClass), style: tslib.__assign({ display: "flex", flexDirection: props.labelPosition === "top" ? "column" : "row", alignItems: props.labelPosition === "top" ? "flex-start" : "center", justifyContent: "left", width: "fit-content" }, props.containerStyle) }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: classNames__default["default"]("evp", "label", props.class), style: tslib.__assign({ fontSize: props.labelSize, width: labelWidth, justifyContent: labelAlign }, props.style) }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_a = props.labelColon) !== null && _a !== void 0 ? _a : void 0] }))) : null, props.children] })));
}

exports["default"] = EvpLabel;
