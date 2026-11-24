'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../evp-row/index.js');

function EvpHeader(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ position: (_a = props.position) !== null && _a !== void 0 ? _a : "fixed", left: 0, top: 0, h: (_b = props.height) !== null && _b !== void 0 ? _b : 80, w: "100%", color: (_c = props.color) !== null && _c !== void 0 ? _c : "#000000", bgColor: (_d = props.bgColor) !== null && _d !== void 0 ? _d : "#ffffff", boxShadow: "var(--base-shadow)", zIndex: (_e = props.zIndex) !== null && _e !== void 0 ? _e : 8000, class: props.class, style: props.style }, { children: props.children ? (props.children) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", tslib.__assign({ style: {
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "".concat((_f = props.leftRate) !== null && _f !== void 0 ? _f : 40, "%"),
                        paddingLeft: (_g = props.leftOffset) !== null && _g !== void 0 ? _g : 40,
                    } }, { children: (_h = props.leftContent) !== null && _h !== void 0 ? _h : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [props.icon, jsxRuntime.jsx("div", tslib.__assign({ style: { fontSize: 20, paddingLeft: 20 } }, { children: props.title }))] })) })), jsxRuntime.jsx("div", tslib.__assign({ style: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "right",
                        alignItems: "center",
                        paddingRight: (_j = props.rightOffset) !== null && _j !== void 0 ? _j : 40,
                    } }, { children: props.rightContent }))] })) })));
}

exports["default"] = EvpHeader;
