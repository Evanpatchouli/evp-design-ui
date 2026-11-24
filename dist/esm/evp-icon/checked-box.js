import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { propsParser } from '../utils/props.parser.js';

var CheckedBox = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsx("div", __assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: __assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "#333", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg), border: props.border }, props.style) }, { children: jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 -960 960 960" }, { children: jsx("path", { strokeLinejoin: "round", d: "m424-424-86-86q-11-11-28-11t-28 11q-11 11-11 28t11 28l114 114q12 12 28 12t28-12l226-226q11-11 11-28t-11-28q-11-11-28-11t-28 11L424-424ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" }) })) })));
};

export { CheckedBox as default };
