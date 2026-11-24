'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');

var FalseCircle = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: tslib.__assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "none", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = props_parser.propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = props_parser.propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsxRuntime.jsxs("svg", tslib.__assign({ width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M29.6567 18.3432L18.343 29.6569", strokeLinecap: "round", strokeLinejoin: "round" }), jsxRuntime.jsx("path", { d: "M18.3433 18.3432L29.657 29.6569", strokeLinecap: "round", strokeLinejoin: "round" })] })) })));
};

exports["default"] = FalseCircle;
