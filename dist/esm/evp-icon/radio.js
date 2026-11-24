import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { propsParser } from '../utils/props.parser.js';

var Radio = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsx("div", __assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: __assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "#333", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 -960 960 960" }, { children: jsx("path", { d: "M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z", strokeLinejoin: "round" }) })) })));
};

export { Radio as default };
