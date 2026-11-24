'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$2 = require('../evp-icon/index.js');
var index$1 = require('../evp-row/index.js');
var index = require('../evp-col/index.js');
var constant = require('../constant.js');
var context = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function EvpInput(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var formCtx = React.useContext(context["default"]);
    var _s = React.useState((_a = props.default) !== null && _a !== void 0 ? _a : ""), localValue = _s[0], setLocalValue = _s[1];
    var val = (_b = props.value) !== null && _b !== void 0 ? _b : localValue;
    hooks.useFormField(formCtx, props.name, val);
    var inputType = (_c = props.type) !== null && _c !== void 0 ? _c : "text";
    var _t = React.useState(((_d = props.rule) === null || _d === void 0 ? void 0 : _d.smartTrigger) === false ? (_e = props.rule.trigger) !== null && _e !== void 0 ? _e : "onEnter" : "onChange"), validateTrigger = _t[0], setValidateTrigger = _t[1];
    var _u = React.useState((_f = props.warnReader) === null || _f === void 0 ? void 0 : _f.ref), warning_msg = _u[0], setWarning_msg = _u[1];
    var warnColor = (_h = (_g = props.rule) === null || _g === void 0 ? void 0 : _g.color) !== null && _h !== void 0 ? _h : "red";
    var hintColor = (_k = (_j = props.hint) === null || _j === void 0 ? void 0 : _j.color) !== null && _k !== void 0 ? _k : "grey";
    var _v = React.useState(false), isValid = _v[0], setIsValid = _v[1];
    var smartTrigger = (_m = (_l = props.rule) === null || _l === void 0 ? void 0 : _l.smartTrigger) !== null && _m !== void 0 ? _m : true;
    function isEmpty(str) {
        return str === undefined || str === null || str === "";
    }
    function isNotNumber(str) {
        return Number.isNaN(Number(str));
    }
    function checkNumber(str) {
        var _a, _b;
        if (((_b = (_a = props.rule) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.val) === "number") {
            return !isNotNumber(str);
        }
        return true;
    }
    function isHave(str, slice) {
        var value = str !== null && str !== void 0 ? str : "";
        return value.includes(slice);
    }
    function checkMin(str, min) {
        var _a, _b;
        if (((_b = (_a = props.rule) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.val) !== "number") {
            var value = "";
            if (str) {
                value = str;
            }
            return value.length >= min;
        }
        else {
            var value = Number(str);
            return value >= min;
        }
    }
    function checkMax(str, max) {
        var _a, _b;
        if (((_b = (_a = props.rule) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.val) !== "number") {
            var value = "";
            if (str) {
                value = str;
            }
            return value.length <= max;
        }
        else {
            var value = Number(str);
            return value <= max;
        }
    }
    function checkReg(str, reg) {
        return new RegExp(reg).test(str !== null && str !== void 0 ? str : "");
    }
    /**
     * validtate input value with rules
     * @param v should be `e.currentTarget.value` but not `props.value` because it is a step later.
     */
    function validate(v) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
        var result = "";
        if ((_a = props.rule) === null || _a === void 0 ? void 0 : _a.custom) {
            result = (_d = (_c = (_b = props.rule) === null || _b === void 0 ? void 0 : _b.custom) === null || _c === void 0 ? void 0 : _c.call(_b, v !== null && v !== void 0 ? v : "")) !== null && _d !== void 0 ? _d : "";
        }
        else if ((_f = (_e = props.rule) === null || _e === void 0 ? void 0 : _e.required) === null || _f === void 0 ? void 0 : _f.on) {
            result = result
                ? result
                : props.rule.required.val
                    ? isEmpty(v)
                        ? (_g = props.rule.required.msg) !== null && _g !== void 0 ? _g : "".concat(props.label
                            ? typeof props.label == "string"
                                ? props.label
                                : (_h = props.name) !== null && _h !== void 0 ? _h : "This field"
                            : (_j = props.name) !== null && _j !== void 0 ? _j : "This field", " can not be empty")
                        : ""
                    : "";
            result = result
                ? result
                : ((_l = (_k = props.rule) === null || _k === void 0 ? void 0 : _k.type) === null || _l === void 0 ? void 0 : _l.on)
                    ? checkNumber(v)
                        ? ""
                        : (_m = props.rule.type.msg) !== null && _m !== void 0 ? _m : "".concat(props.label
                            ? typeof props.label == "string"
                                ? props.label
                                : (_o = props.name) !== null && _o !== void 0 ? _o : "This field"
                            : (_p = props.name) !== null && _p !== void 0 ? _p : "This field", " must be a number")
                    : "";
            result = result
                ? result
                : ((_r = (_q = props.rule) === null || _q === void 0 ? void 0 : _q.min) === null || _r === void 0 ? void 0 : _r.on)
                    ? checkMin(v, props.rule.min.val)
                        ? ""
                        : (_s = props.rule.min.msg) !== null && _s !== void 0 ? _s : "At least be ".concat(props.rule.min.val, " characters")
                    : "";
            result = result
                ? result
                : ((_u = (_t = props.rule) === null || _t === void 0 ? void 0 : _t.max) === null || _u === void 0 ? void 0 : _u.on)
                    ? checkMax(v, props.rule.max.val)
                        ? ""
                        : (_v = props.rule.max.msg) !== null && _v !== void 0 ? _v : "At most be ".concat(props.rule.max.val, " characters")
                    : "";
            result = result
                ? result
                : ((_x = (_w = props.rule) === null || _w === void 0 ? void 0 : _w.reg) === null || _x === void 0 ? void 0 : _x.on)
                    ? checkReg(v, props.rule.reg.val)
                        ? ""
                        : (_y = props.rule.reg.msg) !== null && _y !== void 0 ? _y : "".concat(props.label
                            ? typeof props.label == "string"
                                ? props.label
                                : (_z = props.name) !== null && _z !== void 0 ? _z : "This field"
                            : (_0 = props.name) !== null && _0 !== void 0 ? _0 : "This field", " has invalid characters")
                    : "";
            if ((_1 = props.rule) === null || _1 === void 0 ? void 0 : _1.mustHave) {
                props.rule.mustHave.map(function (mustHave) {
                    var _a, _b;
                    result = mustHave.on
                        ? isHave(v, mustHave.val)
                            ? result
                            : "".concat(props.label
                                ? typeof props.label == "string"
                                    ? props.label
                                    : (_a = props.name) !== null && _a !== void 0 ? _a : "This field"
                                : (_b = props.name) !== null && _b !== void 0 ? _b : "This field", " must have \"").concat(mustHave.val, "\"")
                        : result;
                    return result;
                });
            }
            if ((_2 = props.rule) === null || _2 === void 0 ? void 0 : _2.cannotHave) {
                props.rule.cannotHave.map(function (cannotHave) {
                    var _a, _b;
                    result = cannotHave.on
                        ? !isHave(v, cannotHave.val)
                            ? result
                            : "".concat(props.label
                                ? typeof props.label == "string"
                                    ? props.label
                                    : (_a = props.name) !== null && _a !== void 0 ? _a : "This field"
                                : (_b = props.name) !== null && _b !== void 0 ? _b : "This field", " should not have \"").concat(cannotHave.val, "\"")
                        : result;
                    return result;
                });
            }
        }
        setWarning_msg(result);
        (_3 = props.warnReader) === null || _3 === void 0 ? void 0 : _3.setWarn(result);
        if (result) {
            // if invalid, switch validate trigger to 'onChange'
            if (smartTrigger) {
                setValidateTrigger("onChange");
            }
            setIsValid(false);
        }
        else {
            // if valid, reset validation trigger to props' trigger
            if (smartTrigger) {
                setValidateTrigger((_5 = (_4 = props.rule) === null || _4 === void 0 ? void 0 : _4.trigger) !== null && _5 !== void 0 ? _5 : "onEnter");
            }
            setIsValid(true);
        }
    }
    var _w = React.useState(hintColor), msgColor = _w[0], setMsgColor = _w[1];
    React__default["default"].useEffect(function () {
        if (!isValid) {
            setMsgColor(warnColor);
            if (!warning_msg) {
                setMsgColor(hintColor);
            }
        }
    }, [isValid, warnColor, warning_msg, hintColor]);
    var showRightIcon = (_o = props.resultIcon) !== null && _o !== void 0 ? _o : false;
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_p = props.labelAlign) !== null && _p !== void 0 ? _p : "left";
    var labelRef = React.useRef(null);
    var calcMsgLeft = function () {
        var _a, _b;
        return "".concat((_b = (_a = labelRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) !== null && _b !== void 0 ? _b : 0, "px");
    };
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: [jsxRuntime.jsx(index$1["default"], { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "evp input" }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                                fontSize: props.labelSize,
                                width: labelWidth,
                                justifyContent: labelAlign,
                            } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_q = props.labelColon) !== null && _q !== void 0 ? _q : void 0] }))) : null, jsxRuntime.jsx("input", { name: props.name, autoComplete: "off", autoCorrect: "off", autoSave: "off", className: "evp input input-box", value: val, placeholder: props.placeholder, type: inputType, spellCheck: false, onKeyDown: function (e) {
                                var _a, _b;
                                // onEnter
                                if (e.key.toLowerCase() === "enter") {
                                    if (((_b = (_a = props.rule) === null || _a === void 0 ? void 0 : _a.trigger) !== null && _b !== void 0 ? _b : "onEnter") === "onEnter")
                                        validate(e.currentTarget.value);
                                    if (props.onEnter) {
                                        props.onEnter(e);
                                    }
                                }
                            }, onChange: function (e) {
                                var _a;
                                e.preventDefault();
                                if (props.value === undefined)
                                    setLocalValue(e.currentTarget.value);
                                (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, e);
                                if (validateTrigger === "onChange") {
                                    validate(e.currentTarget.value);
                                }
                            }, onSubmit: function (e) {
                                if (validateTrigger === "onSubmit") {
                                    validate(e.currentTarget.value);
                                }
                            }, style: props.style }), showRightIcon ? (jsxRuntime.jsx("div", tslib.__assign({ className: "evp input icon" }, { children: jsxRuntime.jsx(index$2["default"], { name: "true_circle", color: constant.Color.HeavyGreen, "$visibleSync": isValid }) }))) : null] })) }), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-input-msg", style: {
                    color: msgColor,
                    paddingLeft: calcMsgLeft(),
                } }, { children: isValid ? "" : warning_msg ? warning_msg : (_r = props.hint) === null || _r === void 0 ? void 0 : _r.text }))] })));
}

exports["default"] = EvpInput;
