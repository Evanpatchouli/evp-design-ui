'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var context = require('./context.js');
var index = require('../evp-col/index.js');
var index$1 = require('../evp-icon/index.js');
var constant = require('../constant.js');

function EvpRadioGroup(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_a = props.labelAlign) !== null && _a !== void 0 ? _a : "left";
    var labelRef = React.useRef(null);
    var _o = React.useState("onChange"); _o[0]; _o[1];
    var _p = React.useState((_b = props.warnReader) === null || _b === void 0 ? void 0 : _b.ref), warning_msg = _p[0]; _p[1];
    var warnColor = (_d = (_c = props.rule) === null || _c === void 0 ? void 0 : _c.color) !== null && _d !== void 0 ? _d : "red";
    var hintColor = (_f = (_e = props.hint) === null || _e === void 0 ? void 0 : _e.color) !== null && _f !== void 0 ? _f : "grey";
    var _q = React.useState(false), isValid = _q[0]; _q[1];
    (_h = (_g = props.rule) === null || _g === void 0 ? void 0 : _g.smartTrigger) !== null && _h !== void 0 ? _h : true;
    var _r = React.useState(hintColor), msgColor = _r[0], setMsgColor = _r[1];
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
    var showRightIcon = (_j = props.resultIcon) !== null && _j !== void 0 ? _j : false;
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: [jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-radio-group ".concat((_k = props.class) !== null && _k !== void 0 ? _k : "").trim() }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                            fontSize: props.labelSize,
                            width: labelWidth,
                            justifyContent: labelAlign,
                        } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_l = props.labelColon) !== null && _l !== void 0 ? _l : void 0] }))) : null, jsxRuntime.jsx("div", tslib.__assign({ className: "evp-radio-group-options" }, { children: jsxRuntime.jsx(context["default"].Provider, tslib.__assign({ value: { name: props.name, value: props.value, default: props.default } }, { children: props.children })) })), showRightIcon ? (jsxRuntime.jsx("div", tslib.__assign({ className: "evp input icon" }, { children: jsxRuntime.jsx(index$1["default"], { name: "true_circle", color: constant.Color.HeavyGreen, "$visibleSync": isValid }) }))) : null] })), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-input-msg", style: {
                    color: msgColor,
                    paddingLeft: calcMsgLeft(),
                } }, { children: isValid ? "" : warning_msg ? warning_msg : (_m = props.hint) === null || _m === void 0 ? void 0 : _m.text }))] })));
}

exports["default"] = EvpRadioGroup;
