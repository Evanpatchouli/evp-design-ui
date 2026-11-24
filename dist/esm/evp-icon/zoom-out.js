import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { propsParser } from '../utils/props.parser.js';

var ZoomOut = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsx("div", __assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: __assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "none", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsxs("svg", __assign({ width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx("path", { d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z", fill: "none", strokeLinejoin: "round" }), jsx("path", { d: "M15 21L27 21", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M33.2216 33.2217L41.7069 41.707", strokeLinecap: "round", strokeLinejoin: "round" })] })) })));
};

export { ZoomOut as default };
