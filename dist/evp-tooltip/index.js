'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');
var map = require('./map.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpToolTip(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var _q = React.useState(true), hidden = _q[0], setHidden = _q[1];
    var triggers = props.trigger
        ? typeof props.trigger === "string"
            ? [props.trigger]
            : props.trigger
        : ["hover"];
    var offsetMap = map.OffsetMap(props);
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-tooltip-container", onMouseOver: function () {
            if (triggers.includes("hover")) {
                setHidden(false);
            }
        }, onMouseLeave: function () {
            if (triggers.includes("hover")) {
                setHidden(true);
            }
        }, onClick: function () {
            if (triggers.includes("click")) {
                setHidden(!hidden);
            }
        }, style: {
            display: props.display,
            cursor: ((_a = props.cursor) !== null && _a !== void 0 ? _a : triggers.includes("click")) ? "pointer" : void 0,
        } }, { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp-tooltip", style: tslib.__assign({ visibility: (typeof props.hidden === "boolean" ? props.hidden : hidden) ? "hidden" : "visible", pointerEvents: (typeof props.hidden === "boolean" ? props.hidden : hidden) ? "none" : "auto" }, (typeof ((_b = props.position) !== null && _b !== void 0 ? _b : "top") === "string"
                    ? offsetMap[((_c = props.position) !== null && _c !== void 0 ? _c : "top")]
                    : tslib.__assign(tslib.__assign({}, props.position), { transform: "translateX(".concat((_f = map.transformMap.vertical[(_e = (_d = props.transform) === null || _d === void 0 ? void 0 : _d.vertical) !== null && _e !== void 0 ? _e : "center"]) !== null && _f !== void 0 ? _f : (_g = props.transform) === null || _g === void 0 ? void 0 : _g.vertical, ") translateY(").concat((_k = map.transformMap.horizontal[(_j = (_h = props.transform) === null || _h === void 0 ? void 0 : _h.horizontal) !== null && _j !== void 0 ? _j : "center"]) !== null && _k !== void 0 ? _k : (_l = props.transform) === null || _l === void 0 ? void 0 : _l.horizontal, ")") }))) }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp-tooltip-content", props.class), style: tslib.__assign({ padding: "4px 12px 4px 12px", color: props.plain ? "#000" : props.color, backgroundColor: props.plain ? "#fff" : (_m = props.bgColor) !== null && _m !== void 0 ? _m : "rgba(0, 0, 0, 0.75)", border: (_o = props.border) !== null && _o !== void 0 ? _o : "1px ".concat((_p = props.bgColor) !== null && _p !== void 0 ? _p : "rgba(60, 60, 60, 1)", " solid") }, props.style) }, { children: props.content })) })), props.children] })));
}

exports["default"] = EvpToolTip;
