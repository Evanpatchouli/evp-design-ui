import { __assign } from 'tslib';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import EvpRow from '../evp-row/index.js';

function EvpHeader(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (jsx(EvpRow, __assign({ position: (_a = props.position) !== null && _a !== void 0 ? _a : "fixed", left: 0, top: 0, h: (_b = props.height) !== null && _b !== void 0 ? _b : 80, w: "100%", color: (_c = props.color) !== null && _c !== void 0 ? _c : "#000000", bgColor: (_d = props.bgColor) !== null && _d !== void 0 ? _d : "#ffffff", boxShadow: "var(--base-shadow)", zIndex: (_e = props.zIndex) !== null && _e !== void 0 ? _e : 8000, class: props.class, style: props.style }, { children: props.children ? (props.children) : (jsxs(Fragment, { children: [jsx("div", __assign({ style: {
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                        width: "".concat((_f = props.leftRate) !== null && _f !== void 0 ? _f : 40, "%"),
                        paddingLeft: (_g = props.leftOffset) !== null && _g !== void 0 ? _g : 40,
                    } }, { children: (_h = props.leftContent) !== null && _h !== void 0 ? _h : (jsxs(Fragment, { children: [props.icon, jsx("div", __assign({ style: { fontSize: 20, paddingLeft: 20 } }, { children: props.title }))] })) })), jsx("div", __assign({ style: {
                        display: "flex",
                        width: "100%",
                        justifyContent: "right",
                        alignItems: "center",
                        paddingRight: (_j = props.rightOffset) !== null && _j !== void 0 ? _j : 40,
                    } }, { children: props.rightContent }))] })) })));
}

export { EvpHeader as default };
