import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { propsParser } from '../utils/props.parser.js';

var Gitee = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return (jsx("div", __assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: __assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "none", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "#333", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg) }, props.style) }, { children: jsx("svg", __assign({ width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, { children: jsx("path", { d: "M18.815 0c10.392 0 18.816 8.424 18.816 18.815 0 10.392-8.424 18.816-18.816 18.816C8.424 37.63 0 29.207 0 18.815 0 8.424 8.424 0 18.815 0zm9.524 8.363H15.331a6.969 6.969 0 0 0-6.969 6.969v13.007c0 .513.416.93.93.93h13.705a6.272 6.272 0 0 0 6.271-6.272v-5.343a.93.93 0 0 0-.929-.929H17.654a.93.93 0 0 0-.93.93v2.322c0 .477.358.87.82.923l.109.006h6.505a.93.93 0 0 1 .923.82l.006.11v.464a2.787 2.787 0 0 1-2.787 2.787h-8.828a.93.93 0 0 1-.929-.929v-8.827a2.787 2.787 0 0 1 2.617-2.782l.17-.005h13.007a.93.93 0 0 0 .93-.93V9.293a.928.928 0 0 0-.819-.923l-.109-.006z", fillRule: "evenodd" }) })) })));
};

export { Gitee as default };
