'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('../evp-row/index.js');
var index = require('../evp-col/index.js');
var index$2 = require('../evp-icon/index.js');
var constant = require('../constant.js');
var checkedBox = require('../evp-icon/checked-box.js');
var uncheckedBox = require('../evp-icon/unchecked-box.js');
var context$1 = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');
var context = require('../evp-checkbox-group/context.js');

function EvpCheckBox(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var groupContext = React.useContext(context["default"]);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = React.useContext(context$1["default"]);
    var value = props.value;
    var disabled = props.disabled;
    var group = name === groupContext.name ? groupContext : undefined;
    var includesValue = function (values) {
        return Array.isArray(values) ? values.includes(value) : String(values) === value;
    };
    hooks.useFormLayoutEffect(function () {
        if (formCtx && name && !disabled)
            return formCtx.register({ name: name, value: [] });
    }, [formCtx, name, disabled]);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_b = props.labelAlign) !== null && _b !== void 0 ? _b : "left";
    var labelRef = React.useRef(null);
    var _p = React.useState("onChange"); _p[0]; _p[1];
    var _q = React.useState((_c = props.warnReader) === null || _c === void 0 ? void 0 : _c.ref), warning_msg = _q[0]; _q[1];
    var warnColor = (_e = (_d = props.rule) === null || _d === void 0 ? void 0 : _d.color) !== null && _e !== void 0 ? _e : "red";
    var hintColor = (_g = (_f = props.hint) === null || _f === void 0 ? void 0 : _f.color) !== null && _g !== void 0 ? _g : "grey";
    var _r = React.useState(false), isValid = _r[0]; _r[1];
    (_j = (_h = props.rule) === null || _h === void 0 ? void 0 : _h.smartTrigger) !== null && _j !== void 0 ? _j : true;
    var showRightIcon = (_k = props.resultIcon) !== null && _k !== void 0 ? _k : false;
    var _s = React.useState(hintColor), msgColor = _s[0], setMsgColor = _s[1];
    React.useEffect(function () {
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
    var _t = React.useState(function () { var _a; return (group === null || group === void 0 ? void 0 : group.default) !== undefined ? includesValue(group.default) : (_a = props.defaultChecked) !== null && _a !== void 0 ? _a : false; }), localChecked = _t[0], setChecked = _t[1];
    var checked = (group === null || group === void 0 ? void 0 : group.value) !== undefined ? includesValue(group.value) : localChecked;
    hooks.useFormLayoutEffect(function () {
        var _a;
        if (!formCtx || !name || !checked || disabled)
            return;
        var values = (_a = formCtx.get(name)) !== null && _a !== void 0 ? _a : [];
        if (!values.includes(value))
            formCtx.set(name, tslib.__spreadArray(tslib.__spreadArray([], values, true), [value], false));
        return function () {
            var current = formCtx.get(name);
            if (current === null || current === void 0 ? void 0 : current.includes(value))
                formCtx.set(name, current.filter(function (item) { return item !== value; }));
        };
    }, [checked, formCtx, name, value, disabled]);
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start", class: "".concat(props.disabled ? "evp-disabled" : "").trim() }, { children: [jsxRuntime.jsx(index$1["default"], { children: jsxRuntime.jsxs("label", tslib.__assign({ className: "evp input evp-checkbox-control" }, { children: [jsxRuntime.jsx("input", { type: "checkbox", name: name, value: value, checked: checked, disabled: disabled, onChange: function (event) { return setChecked(event.currentTarget.checked); } }), checked ? (jsxRuntime.jsx(checkedBox["default"], { class: "input-checkbox", fill: constant.Color.Blue, color: constant.Color.Blue, radius: (_l = props.radius) !== null && _l !== void 0 ? _l : 21, cursor: props.disabled ? 'not-allowed' : 'pointer' })) : (jsxRuntime.jsx(uncheckedBox["default"], { class: "input-checkbox", color: constant.Color.PaleBlue, strokeWidth: 2, radius: (_m = props.radius) !== null && _m !== void 0 ? _m : 21, cursor: props.disabled ? 'not-allowed' : 'pointer' })), props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                                fontSize: props.labelSize,
                                width: labelWidth,
                                justifyContent: labelAlign,
                            } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label] }))) : null, showRightIcon ? (jsxRuntime.jsx("div", tslib.__assign({ className: "evp input icon" }, { children: jsxRuntime.jsx(index$2["default"], { name: "true_circle", color: constant.Color.HeavyGreen, "$visibleSync": isValid }) }))) : null] })) }), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-input-msg", style: {
                    color: msgColor,
                    paddingLeft: calcMsgLeft(),
                } }, { children: isValid ? "" : warning_msg ? warning_msg : (_o = props.hint) === null || _o === void 0 ? void 0 : _o.text }))] })));
}

exports["default"] = EvpCheckBox;
