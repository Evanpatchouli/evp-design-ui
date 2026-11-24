'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var constant = require('../constant.js');
var radio = require('../evp-icon/radio.js');
var index$1 = require('../evp-tooltip/index.js');
var context = require('../evp-radio-group/context.js');
var context$1 = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');
var img_utils = require('../utils/img.utils.js');
var index = require('../evp-col/index.js');
var num_util = require('../utils/num.util.js');

function EvpSlider(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var groupContext = React.useContext(context["default"]);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = React.useContext(context$1["default"]);
    var width = (_b = props.width) !== null && _b !== void 0 ? _b : 200;
    var length = ((_d = (_c = props.range) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : 100) - ((_f = (_e = props.range) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : 0);
    var min = (_j = (_g = props.min) !== null && _g !== void 0 ? _g : (_h = props.range) === null || _h === void 0 ? void 0 : _h[0]) !== null && _j !== void 0 ? _j : 0;
    var max = (_k = props.max) !== null && _k !== void 0 ? _k : ((_m = (_l = props.range) === null || _l === void 0 ? void 0 : _l[0]) !== null && _m !== void 0 ? _m : 0) + length;
    var _y = React.useState((_o = props.defaultValue) !== null && _o !== void 0 ? _o : min), localValue = _y[0], setLocalValue = _y[1];
    var val = Math.max(min, Math.min(max, (_p = props.value) !== null && _p !== void 0 ? _p : localValue));
    var _z = React.useState(true), hiddenTip = _z[0], setHiddenTip = _z[1];
    var prgsRef = React.useRef(null);
    var _0 = React.useState({
        color: constant.Color.LightBlue,
        fill: constant.Color.LightBlue,
    }), thumbColors = _0[0], setThumbColors = _0[1];
    var recoverThumb = function () {
        setThumbColors({
            color: constant.Color.PaleBlue,
            fill: constant.Color.PaleBlue,
        });
    };
    var stressThumb = function () {
        setThumbColors({
            color: constant.Color.Blue,
            fill: constant.Color.Blue,
        });
    };
    hooks.useFormField(formCtx, name, val);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_q = props.labelAlign) !== null && _q !== void 0 ? _q : "left";
    var labelRef = React.useRef(null);
    var thumbRef = React.useRef(null);
    var step = function () { return width / length; };
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start", class: "evp-form-item" }, { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-slider ".concat((_r = props.class) !== null && _r !== void 0 ? _r : "").trim(), onMouseOver: function () {
                setHiddenTip(false);
            }, onMouseOut: function () {
                setHiddenTip(true);
            }, onMouseLeave: function () {
                setHiddenTip(true);
            }, onDragStart: function (e) {
                var _a, _b;
                (_a = e.nativeEvent.dataTransfer) === null || _a === void 0 ? void 0 : _a.setDragImage(img_utils.getEmptyImg(), 0, 0);
                if ((_b = e.nativeEvent.dataTransfer) === null || _b === void 0 ? void 0 : _b.effectAllowed) {
                    e.nativeEvent.dataTransfer.effectAllowed = "move";
                }
            }, onDragEnter: function (e) {
                e.preventDefault();
            }, onDragOver: function (e) {
                e.preventDefault();
            }, style: tslib.__assign({}, props.style) }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                        fontSize: props.labelSize,
                        width: labelWidth,
                        justifyContent: labelAlign,
                    } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_s = props.labelColon) !== null && _s !== void 0 ? _s : void 0] }))) : null, jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-slider-bar", style: {
                        width: "calc(".concat(width, "px + ").concat((_u = (_t = thumbRef.current) === null || _t === void 0 ? void 0 : _t.clientWidth) !== null && _u !== void 0 ? _u : "24px", " + 0px)"),
                    } }, { children: [jsxRuntime.jsx("div", { className: "evp-slider-progress", ref: prgsRef, style: {
                                // width: `${calcRate()}%`,
                                width: (val - ((_w = (_v = props.range) === null || _v === void 0 ? void 0 : _v[0]) !== null && _w !== void 0 ? _w : 0)) * step(),
                            } }), jsxRuntime.jsx("div", tslib.__assign({ draggable: true, className: "evp-draggable", ref: thumbRef, tabIndex: -1, onMouseOver: stressThumb, onBlur: recoverThumb, onDrag: function (e) {
                                var _a, _b, _c;
                                var deltaX = e.clientX - e.currentTarget.getBoundingClientRect().x;
                                if (e.clientX) {
                                    var newVal = val + deltaX / step();
                                    if (newVal >= max) {
                                        newVal = max;
                                    }
                                    else if (newVal <= min) {
                                        newVal = min;
                                    }
                                    newVal = Number(newVal.toFixed((_a = props.precision) !== null && _a !== void 0 ? _a : 0));
                                    if (newVal === val)
                                        return;
                                    if (props.value === undefined)
                                        setLocalValue(newVal);
                                    (_b = props.setValue) === null || _b === void 0 ? void 0 : _b.call(props, newVal);
                                    (_c = props.onChange) === null || _c === void 0 ? void 0 : _c.call(props, newVal);
                                    return false;
                                }
                            } }, { children: jsxRuntime.jsx(index$1["default"], tslib.__assign({ content: num_util["default"].toFixedStrictly(val, (_x = props.precision) !== null && _x !== void 0 ? _x : 0), hidden: hiddenTip }, { children: jsxRuntime.jsx(radio["default"], tslib.__assign({ class: "evp-slider-thumb" }, thumbColors, { cursor: "pointer" })) })) })), jsxRuntime.jsx("div", { hidden: !(props.showEtc === false ? false : true), className: "evp-slider-progress-etc" })] }))] })) })));
}

exports["default"] = EvpSlider;
