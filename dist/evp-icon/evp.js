'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');

var Lock = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: tslib.__assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "#008BFF", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = props_parser.propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = props_parser.propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsxRuntime.jsx("svg", tslib.__assign({ viewBox: "0 0 1024 1024", version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24 }, { children: jsxRuntime.jsx("path", { d: "M143.36 817.152a948.48 948.48 0 0 1 126.976-29.696v-424.96A948.48 948.48 0 0 1 143.36 332.8V173.056c62.08 18.432 122.368 31.744 180.736 39.936 58.368 8.192 120.32 12.288 185.856 12.288 69.632 0 135.36-4.608 197.12-13.824a1225.728 1225.728 0 0 0 192-45.568v159.744c-23.232 7.488-46.272 14.144-69.12 19.968-22.848 5.76-46.272 11.072-70.144 15.872v427.008c23.872 4.8 47.296 10.048 70.144 15.872 22.848 5.76 45.888 12.48 69.12 19.968v159.744a1225.728 1225.728 0 0 0-192-45.568 1336.768 1336.768 0 0 0-197.12-13.824c-65.536 0-127.488 4.096-185.856 12.288-58.368 8.192-118.592 21.504-180.736 39.936v-159.744z m366.592-50.176c8.896 0 20.48 0.192 34.816 0.512 14.336 0.32 25.6 0.512 33.792 0.512V381.952h-128V768c7.488 0 17.6-0.192 30.208-0.512 12.608-0.32 22.4-0.512 29.184-0.512z", fill: "#008BFF", "p-id": "4227" }) })) })));
};

exports["default"] = Lock;
