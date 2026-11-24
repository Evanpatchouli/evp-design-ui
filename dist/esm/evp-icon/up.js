import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { propsParser } from '../utils/props.parser.js';

var Up = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return (jsx("div", __assign({ className: classNames("evp", "icon", props.class), onClick: props.onClick, style: __assign({ visibility: ((_a = props.$visibleSync) !== null && _a !== void 0 ? _a : true) ? "visible" : "hidden", display: ((_b = props.$displaySync) !== null && _b !== void 0 ? _b : true) ? "flex" : "none", strokeWidth: (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 4, stroke: (_d = props.color) !== null && _d !== void 0 ? _d : "#333", fill: (_e = props.fill) !== null && _e !== void 0 ? _e : "none", cursor: (_f = props.cursor) !== null && _f !== void 0 ? _f : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_g = propsParser.get("pd")) === null || _g === void 0 ? void 0 : _g(props.pd), margin: (_h = propsParser.get("mg")) === null || _h === void 0 ? void 0 : _h(props.mg) }, props.style) }, { children: jsx("svg", __assign({ width: (_j = props.radius) !== null && _j !== void 0 ? _j : 24, height: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx("path", { d: "M13 30L25 18L37 30", strokeLinecap: "round", strokeLinejoin: "round" }) })) })));
};

export { Up as default };
