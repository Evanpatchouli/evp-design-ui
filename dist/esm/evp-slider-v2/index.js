import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useContext, useState, useId, useRef } from 'react';
import EvpToolTip from '../evp-tooltip/index.js';
import Context from '../evp-radio-group/context.js';
import EvpFormContext from '../evp-form-v2/context.js';
import { useFormField } from '../evp-form-v2/hooks.js';
import EvpCol from '../evp-col/index.js';
import NumUtils from '../utils/num.util.js';
import valParser from '../utils/val.parser.js';

function EvpSliderV2(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    var groupContext = useContext(Context);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = useContext(EvpFormContext);
    var width = (_b = props.width) !== null && _b !== void 0 ? _b : "200px";
    var length = ((_d = (_c = props.range) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : 100) - ((_f = (_e = props.range) === null || _e === void 0 ? void 0 : _e[0]) !== null && _f !== void 0 ? _f : 0);
    var min = (_j = (_g = props.min) !== null && _g !== void 0 ? _g : (_h = props.range) === null || _h === void 0 ? void 0 : _h[0]) !== null && _j !== void 0 ? _j : 0;
    var max = (_k = props.max) !== null && _k !== void 0 ? _k : ((_m = (_l = props.range) === null || _l === void 0 ? void 0 : _l[0]) !== null && _m !== void 0 ? _m : 0) + length;
    var _0 = useState((_o = props.defaultValue) !== null && _o !== void 0 ? _o : min), localValue = _0[0], setLocalValue = _0[1];
    var val = Math.max(min, Math.min(max, (_p = props.value) !== null && _p !== void 0 ? _p : localValue));
    var rate = length > 0 ? (val - ((_r = (_q = props.range) === null || _q === void 0 ? void 0 : _q[0]) !== null && _r !== void 0 ? _r : 0)) / length : 0;
    var id = useId();
    useFormField(formCtx, name, val);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_s = props.labelAlign) !== null && _s !== void 0 ? _s : "left";
    var labelRef = useRef(null);
    var tooltipText = NumUtils.toFixedStrictly(val, (_t = props.precision) !== null && _t !== void 0 ? _t : 0);
    var _1 = useState(true), hiddenTip = _1[0], setHiddenTip = _1[1];
    return (jsx(EvpCol, __assign({ mg: [4, 0, 4, 0], alignItems: "flex-start", class: "evp-form-item" }, { children: jsxs("div", __assign({ className: "evp evp-slider ".concat((_u = props.class) !== null && _u !== void 0 ? _u : "").trim(), onMouseOver: function () {
                setHiddenTip(false);
            }, onMouseOut: function () {
                setHiddenTip(true);
            }, onMouseLeave: function () {
                setHiddenTip(true);
            }, style: __assign(__assign({}, props.style), { 
                // @ts-ignore
                "--rate": "".concat(rate * 100, "%"), "--etcColor": props.showEtc !== false ? "#eee" : "transparent" }) }, { children: [props.label ? (jsxs("div", __assign({ ref: labelRef, className: "evp input label", style: {
                        fontSize: props.labelSize,
                        width: labelWidth,
                        justifyContent: labelAlign,
                    } }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_v = props.labelColon) !== null && _v !== void 0 ? _v : void 0] }))) : null, jsx(EvpToolTip, __assign({ content: tooltipText, hidden: hiddenTip }, { children: jsx("input", { type: "range", name: props.name, style: { width: valParser(width) }, min: (_x = (_w = props.range) === null || _w === void 0 ? void 0 : _w[0]) !== null && _x !== void 0 ? _x : 0, max: (_z = (_y = props.range) === null || _y === void 0 ? void 0 : _y[1]) !== null && _z !== void 0 ? _z : 100, step: props.step && props.step > 0 ? props.step : 1, onChange: function (e) {
                            var _a, _b;
                            if (props.value !== undefined && props.setValue === undefined) {
                                e.preventDefault();
                                return;
                            }
                            var newVal = Math.max(min, Math.min(max, e.currentTarget.valueAsNumber));
                            if (newVal === val)
                                return;
                            if (props.value === undefined)
                                setLocalValue(newVal);
                            (_a = props.setValue) === null || _a === void 0 ? void 0 : _a.call(props, newVal);
                            (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, newVal);
                        }, value: val, className: "evp-slider-input", id: id, "aria-label": typeof props.label === "string" ? props.label : props.name }) }))] })) })));
}

export { EvpSliderV2 as default };
