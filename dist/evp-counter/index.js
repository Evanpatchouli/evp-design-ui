'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var cloneDeep = require('lodash/cloneDeep.js');
var props_parser = require('../utils/props.parser.js');
var classNames = require('classnames');
var React = require('react');
var left = require('../evp-icon/left.js');
var right = require('../evp-icon/right.js');
var context = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');
var index = require('../evp-col/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefault(cloneDeep);
var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var isNumber = function (val) {
    return typeof val === "number" && !Number.isNaN(val);
};
var purifyProps = function (props) {
    return cloneDeep__default["default"](props_parser["default"](props));
};
var EvpCounter = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var formCtx = React.useContext(context["default"]);
    var _g = React.useState((_b = (_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : 0), val = _g[0], setVal = _g[1];
    var step = (_c = props.step) !== null && _c !== void 0 ? _c : 1;
    var banLeft = function () {
        if (props.min !== undefined && val - step < props.min) {
            return "evp-disabled";
        }
    };
    var banRight = function () {
        if (props.max !== undefined && val + step > props.max) {
            return "evp-disabled";
        }
    };
    hooks.useFormField(formCtx, props.name, (_d = props.value) !== null && _d !== void 0 ? _d : val);
    var pureProps = purifyProps(props);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_e = props.labelAlign) !== null && _e !== void 0 ? _e : "left";
    var labelRef = React.useRef(null);
    // const calcMsgLeft = () => {
    //   return `${labelRef.current?.offsetWidth ?? 0}px`;
    // };
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: jsxRuntime.jsxs("div", tslib.__assign({}, pureProps.event, { className: classNames__default["default"]("evp", "evp-counter", pureProps.class), style: tslib.__assign({}, pureProps.style) }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", id: "nnn", style: {
                        fontSize: props.labelSize,
                        width: labelWidth,
                        justifyContent: labelAlign,
                    } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_f = props.labelColon) !== null && _f !== void 0 ? _f : void 0] }))) : null, jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp-counter-main") }, { children: [jsxRuntime.jsx(left["default"], { class: classNames__default["default"]("evp-counter-lefter", banLeft()), style: {
                                pointerEvents: banLeft() ? "none" : void 0,
                            }, radius: 20, onClick: function () {
                                if (props.value === undefined) {
                                    if (props.min !== undefined) {
                                        if (val - step >= props.min) {
                                            setVal(val - step);
                                        }
                                    }
                                    else {
                                        setVal(val - step);
                                    }
                                }
                            }, pointer: true }), jsxRuntime.jsx("input", { className: classNames__default["default"]("evp-counter-input"), placeholder: props.placeholder, readOnly: props.readOnly, onChange: function (e) {
                                e.preventDefault();
                                if (props.value === undefined) {
                                    var valueNumer = Number(e.currentTarget.value);
                                    if (isNumber(valueNumer) === true) {
                                        setVal(valueNumer);
                                    }
                                }
                            }, value: props.value !== undefined ? props.value : val }), jsxRuntime.jsx(right["default"], { class: classNames__default["default"]("evp-counter-righter", banRight()), style: {
                                pointerEvents: banRight() ? "none" : void 0,
                            }, radius: 20, onClick: function () {
                                if (props.value === undefined) {
                                    if (props.max !== undefined) {
                                        if (val - step <= props.max) {
                                            setVal(val + step);
                                        }
                                    }
                                    else {
                                        setVal(val + step);
                                    }
                                }
                            }, pointer: true })] }))] })) })));
};

exports["default"] = EvpCounter;
