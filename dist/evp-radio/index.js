'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var context = require('../evp-radio-group/context.js');
var context$1 = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');

function EvpRadio(props) {
    var _a, _b, _c;
    var groupContext = React.useContext(context["default"]);
    var name = (_a = props.name) !== null && _a !== void 0 ? _a : groupContext.name;
    var formCtx = React.useContext(context$1["default"]);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_b = props.labelAlign) !== null && _b !== void 0 ? _b : "left";
    var labelRef = React.useRef(null);
    var inputRef = React.useRef(null);
    var value = props.value, disabled = props.disabled;
    var group = name === groupContext.name ? groupContext : undefined;
    var controlled = (group === null || group === void 0 ? void 0 : group.value) !== undefined;
    var checked = controlled ? (group === null || group === void 0 ? void 0 : group.value) === value : undefined;
    var defaultChecked = (group === null || group === void 0 ? void 0 : group.default) !== undefined ? group.default === value : props.defaultChecked;
    hooks.useFormLayoutEffect(function () {
        var _a;
        if (!formCtx || !name || disabled)
            return;
        var unregister = formCtx.register({ name: name });
        if ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.checked)
            formCtx.set(name, value);
        return function () {
            if (formCtx.get(name) === value)
                formCtx.set(name, undefined);
            unregister();
        };
    }, [formCtx, name, value, disabled]);
    hooks.useFormLayoutEffect(function () {
        if (!controlled || !formCtx || !name || disabled)
            return;
        if (checked)
            formCtx.set(name, value);
        else if (formCtx.get(name) === value)
            formCtx.set(name, undefined);
    }, [controlled, checked, formCtx, name, value, disabled]);
    return (jsxRuntime.jsxs("label", tslib.__assign({ className: "evp input evp-radio ".concat((_c = props.class) !== null && _c !== void 0 ? _c : "", " ").concat(props.disabled ? "evp-disabled" : "").trim() }, { children: [jsxRuntime.jsx("input", { className: "evp input-radio", name: name, ref: inputRef, type: "radio", value: props.value, disabled: disabled, checked: checked, defaultChecked: controlled ? undefined : defaultChecked, onChange: function (event) {
                    if (!controlled && formCtx && name && event.currentTarget.checked)
                        formCtx.set(name, value);
                }, style: {
                    cursor: props.disabled ? "not-allowed" : "pointer",
                } }), props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                    fontSize: props.labelSize,
                    width: labelWidth,
                    justifyContent: labelAlign,
                } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label] }))) : (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                    fontSize: props.labelSize,
                    width: labelWidth,
                    justifyContent: labelAlign,
                } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.children] })))] })));
}

exports["default"] = EvpRadio;
