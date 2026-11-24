'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var props_parser = require('../utils/props.parser.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var Up = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp", "icon", props.class), onClick: props.onClick, style: tslib.__assign({ visibility: ((_a = props.$visibleSync) !== null && _a !== void 0 ? _a : true) ? "visible" : "hidden", display: ((_b = props.$displaySync) !== null && _b !== void 0 ? _b : true) ? "flex" : "none", strokeWidth: (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 4, stroke: (_d = props.color) !== null && _d !== void 0 ? _d : "#333", fill: (_e = props.fill) !== null && _e !== void 0 ? _e : "none", cursor: (_f = props.cursor) !== null && _f !== void 0 ? _f : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_g = props_parser.propsParser.get("pd")) === null || _g === void 0 ? void 0 : _g(props.pd), margin: (_h = props_parser.propsParser.get("mg")) === null || _h === void 0 ? void 0 : _h(props.mg) }, props.style) }, { children: jsxRuntime.jsx("svg", tslib.__assign({ width: (_j = props.radius) !== null && _j !== void 0 ? _j : 24, height: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsxRuntime.jsx("path", { d: "M13 30L25 18L37 30", strokeLinecap: "round", strokeLinejoin: "round" }) })) })));
};

exports["default"] = Up;
