import { __spreadArray, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useContext, useRef, useState, useEffect } from 'react';
import EvpRow from '../evp-row/index.js';
import EvpCol from '../evp-col/index.js';
import EvpIcon from '../evp-icon/index.js';
import { Color } from '../constant.js';
import CheckedBox from '../evp-icon/checked-box.js';
import UncheckedBox from '../evp-icon/unchecked-box.js';
import EvpFormContext from '../evp-form-v2/context.js';
import { useFormLayoutEffect } from '../evp-form-v2/hooks.js';
import Context from '../evp-checkbox-group/context.js';

function EvpCheckBox(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var groupContext = useContext(Context);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = useContext(EvpFormContext);
    var value = props.value;
    var disabled = props.disabled;
    var group = name === groupContext.name ? groupContext : undefined;
    var includesValue = function (values) {
        return Array.isArray(values) ? values.includes(value) : String(values) === value;
    };
    useFormLayoutEffect(function () {
        if (formCtx && name && !disabled)
            return formCtx.register({ name: name, value: [] });
    }, [formCtx, name, disabled]);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_b = props.labelAlign) !== null && _b !== void 0 ? _b : "left";
    var labelRef = useRef(null);
    var _p = useState("onChange"); _p[0]; _p[1];
    var _q = useState((_c = props.warnReader) === null || _c === void 0 ? void 0 : _c.ref), warning_msg = _q[0]; _q[1];
    var warnColor = (_e = (_d = props.rule) === null || _d === void 0 ? void 0 : _d.color) !== null && _e !== void 0 ? _e : "red";
    var hintColor = (_g = (_f = props.hint) === null || _f === void 0 ? void 0 : _f.color) !== null && _g !== void 0 ? _g : "grey";
    var _r = useState(false), isValid = _r[0]; _r[1];
    (_j = (_h = props.rule) === null || _h === void 0 ? void 0 : _h.smartTrigger) !== null && _j !== void 0 ? _j : true;
    var showRightIcon = (_k = props.resultIcon) !== null && _k !== void 0 ? _k : false;
    var _s = useState(hintColor), msgColor = _s[0], setMsgColor = _s[1];
    useEffect(function () {
        if (!isValid) {
            setMsgColor(warnColor);
            if (!warning_msg) {
                setMsgColor(hintColor);
            }
        }
    }, [isValid, warnColor, warning_msg, hintColor]);
    var calcMsgLeft = function () {
        var _a, _b;
        return "".concat((_b = (_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 0, "px");
    };
    var _t = useState(function () { var _a; return (group === null || group === void 0 ? void 0 : group.default) !== undefined ? includesValue(group.default) : (_a = props.defaultChecked) !== null && _a !== void 0 ? _a : false; }), localChecked = _t[0], setChecked = _t[1];
    var checked = (group === null || group === void 0 ? void 0 : group.value) !== undefined ? includesValue(group.value) : localChecked;
    useFormLayoutEffect(function () {
        var _a;
        if (!formCtx || !name || !checked || disabled)
            return;
        var values = (_a = formCtx.get(name)) !== null && _a !== void 0 ? _a : [];
        if (!values.includes(value))
            formCtx.set(name, __spreadArray(__spreadArray([], values, true), [value], false));
        return function () {
            var current = formCtx.get(name);
            if (current === null || current === void 0 ? void 0 : current.includes(value))
                formCtx.set(name, current.filter(function (item) { return item !== value; }));
        };
    }, [checked, formCtx, name, value, disabled]);
    return (jsxs(EvpCol, __assign({ mg: [4, 0, 4, 0], alignItems: "flex-start", class: "".concat(props.disabled ? "evp-disabled" : "").trim() }, { children: [jsx(EvpRow, { children: jsxs("label", __assign({ className: "evp input evp-checkbox-control" }, { children: [jsx("input", { type: "checkbox", name: name, value: value, checked: checked, disabled: disabled, onChange: function (event) { return setChecked(event.currentTarget.checked); } }), checked ? (jsx(CheckedBox, { class: "input-checkbox", fill: Color.Blue, color: Color.Blue, radius: (_l = props.radius) !== null && _l !== void 0 ? _l : 21, cursor: props.disabled ? 'not-allowed' : 'pointer' })) : (jsx(UncheckedBox, { class: "input-checkbox", color: Color.PaleBlue, strokeWidth: 2, radius: (_m = props.radius) !== null && _m !== void 0 ? _m : 21, cursor: props.disabled ? 'not-allowed' : 'pointer' })), props.label ? (jsxs("div", __assign({ ref: labelRef, className: "evp input label", style: {
                                fontSize: props.labelSize,
                                width: labelWidth,
                                justifyContent: labelAlign,
                            } }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label] }))) : null, showRightIcon ? (jsx("div", __assign({ className: "evp input icon" }, { children: jsx(EvpIcon, { name: "true_circle", color: Color.HeavyGreen, "$visibleSync": isValid }) }))) : null] })) }), jsx("div", __assign({ className: "evp-input-msg", style: {
                    color: msgColor,
                    paddingLeft: calcMsgLeft(),
                } }, { children: isValid ? "" : warning_msg ? warning_msg : (_o = props.hint) === null || _o === void 0 ? void 0 : _o.text }))] })));
}

export { EvpCheckBox as default };
