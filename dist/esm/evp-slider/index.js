import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useContext, useState, useRef } from 'react';
import { Color } from '../constant.js';
import Radio from '../evp-icon/radio.js';
import EvpToolTip from '../evp-tooltip/index.js';
import Context from '../evp-radio-group/context.js';
import EvpFormContext from '../evp-form-v2/context.js';
import { useFormField } from '../evp-form-v2/hooks.js';
import { getEmptyImg } from '../utils/img.utils.js';
import EvpCol from '../evp-col/index.js';
import NumUtils from '../utils/num.util.js';

function EvpSlider(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    var groupContext = useContext(Context);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = useContext(EvpFormContext);
    var width = (_b = props.width) !== null && _b !== void 0 ? _b : 200;
    var length = ((_d = (_c = props.range) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : 100) - ((_f = (_e = props.range) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : 0);
    var min = (_j = (_g = props.min) !== null && _g !== void 0 ? _g : (_h = props.range) === null || _h === void 0 ? void 0 : _h[0]) !== null && _j !== void 0 ? _j : 0;
    var max = (_k = props.max) !== null && _k !== void 0 ? _k : ((_m = (_l = props.range) === null || _l === void 0 ? void 0 : _l[0]) !== null && _m !== void 0 ? _m : 0) + length;
    var _y = useState((_o = props.defaultValue) !== null && _o !== void 0 ? _o : min), localValue = _y[0], setLocalValue = _y[1];
    var val = Math.max(min, Math.min(max, (_p = props.value) !== null && _p !== void 0 ? _p : localValue));
    var _z = useState(true), hiddenTip = _z[0], setHiddenTip = _z[1];
    var prgsRef = useRef(null);
    var _0 = useState({
        color: Color.LightBlue,
        fill: Color.LightBlue,
    }), thumbColors = _0[0], setThumbColors = _0[1];
    var recoverThumb = function () {
        setThumbColors({
            color: Color.PaleBlue,
            fill: Color.PaleBlue,
        });
    };
    var stressThumb = function () {
        setThumbColors({
            color: Color.Blue,
            fill: Color.Blue,
        });
    };
    useFormField(formCtx, name, val);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_q = props.labelAlign) !== null && _q !== void 0 ? _q : "left";
    var labelRef = useRef(null);
    var thumbRef = useRef(null);
    var step = function () { return width / length; };
    return (jsx(EvpCol, __assign({ mg: [4, 0, 4, 0], alignItems: "flex-start", class: "evp-form-item" }, { children: jsxs("div", __assign({ className: "evp evp-slider ".concat((_r = props.class) !== null && _r !== void 0 ? _r : "").trim(), onMouseOver: function () {
                setHiddenTip(false);
            }, onMouseOut: function () {
                setHiddenTip(true);
            }, onMouseLeave: function () {
                setHiddenTip(true);
            }, onDragStart: function (e) {
                var _a, _b;
                (_a = e.nativeEvent.dataTransfer) === null || _a === void 0 ? void 0 : _a.setDragImage(getEmptyImg(), 0, 0);
                if ((_b = e.nativeEvent.dataTransfer) === null || _b === void 0 ? void 0 : _b.effectAllowed) {
                    e.nativeEvent.dataTransfer.effectAllowed = "move";
                }
            }, onDragEnter: function (e) {
                e.preventDefault();
            }, onDragOver: function (e) {
                e.preventDefault();
            }, style: __assign({}, props.style) }, { children: [props.label ? (jsxs("div", __assign({ ref: labelRef, className: "evp input label", style: {
                        fontSize: props.labelSize,
                        width: labelWidth,
                        justifyContent: labelAlign,
                    } }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_s = props.labelColon) !== null && _s !== void 0 ? _s : void 0] }))) : null, jsxs("div", __assign({ className: "evp-slider-bar", style: {
                        width: "calc(".concat(width, "px + ").concat((_u = (_t = thumbRef.current) === null || _t === void 0 ? void 0 : _t.clientWidth) !== null && _u !== void 0 ? _u : "24px", " + 0px)"),
                    } }, { children: [jsx("div", { className: "evp-slider-progress", ref: prgsRef, style: {
                                // width: `${calcRate()}%`,
                                width: (val - ((_w = (_v = props.range) === null || _v === void 0 ? void 0 : _v[0]) !== null && _w !== void 0 ? _w : 0)) * step(),
                            } }), jsx("div", __assign({ draggable: true, className: "evp-draggable", ref: thumbRef, tabIndex: -1, onMouseOver: stressThumb, onBlur: recoverThumb, onDrag: function (e) {
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
                            } }, { children: jsx(EvpToolTip, __assign({ content: NumUtils.toFixedStrictly(val, (_x = props.precision) !== null && _x !== void 0 ? _x : 0), hidden: hiddenTip }, { children: jsx(Radio, __assign({ class: "evp-slider-thumb" }, thumbColors, { cursor: "pointer" })) })) })), jsx("div", { hidden: !(props.showEtc === false ? false : true), className: "evp-slider-progress-etc" })] }))] })) })));
}

export { EvpSlider as default };
