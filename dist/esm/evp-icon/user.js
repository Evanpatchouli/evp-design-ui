import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { propsParser } from '../utils/props.parser.js';

var User = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsx("div", __assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: __assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "none", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsxs("svg", __assign({ width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsx("circle", { cx: "24", cy: "12", r: "8", strokeLinecap: "round", strokeLinejoin: "round" }), jsx("path", { d: "M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44", strokeLinecap: "round", strokeLinejoin: "round" })] })) })));
};

export { User as default };
