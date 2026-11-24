import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import cloneDeep from 'lodash/cloneDeep.js';
import AllParser from '../utils/props.parser.js';
import classNames from 'classnames';
import { useContext, useState, useRef } from 'react';
import Left from '../evp-icon/left.js';
import Right from '../evp-icon/right.js';
import EvpFormContext from '../evp-form-v2/context.js';
import { useFormField } from '../evp-form-v2/hooks.js';
import EvpCol from '../evp-col/index.js';

var isNumber = function (val) {
    return typeof val === "number" && !Number.isNaN(val);
};
var purifyProps = function (props) {
    return cloneDeep(AllParser(props));
};
var EvpCounter = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var formCtx = useContext(EvpFormContext);
    var _g = useState((_b = (_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : 0), val = _g[0], setVal = _g[1];
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
    useFormField(formCtx, props.name, (_d = props.value) !== null && _d !== void 0 ? _d : val);
    var pureProps = purifyProps(props);
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_e = props.labelAlign) !== null && _e !== void 0 ? _e : "left";
    var labelRef = useRef(null);
    // const calcMsgLeft = () => {
    //   return `${labelRef.current?.offsetWidth ?? 0}px`;
    // };
    return (jsx(EvpCol, __assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: jsxs("div", __assign({}, pureProps.event, { className: classNames("evp", "evp-counter", pureProps.class), style: __assign({}, pureProps.style) }, { children: [props.label ? (jsxs("div", __assign({ ref: labelRef, className: "evp input label", id: "nnn", style: {
                        fontSize: props.labelSize,
                        width: labelWidth,
                        justifyContent: labelAlign,
                    } }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_f = props.labelColon) !== null && _f !== void 0 ? _f : void 0] }))) : null, jsxs("div", __assign({ className: classNames("evp-counter-main") }, { children: [jsx(Left, { class: classNames("evp-counter-lefter", banLeft()), style: {
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
                            }, pointer: true }), jsx("input", { className: classNames("evp-counter-input"), placeholder: props.placeholder, readOnly: props.readOnly, onChange: function (e) {
                                e.preventDefault();
                                if (props.value === undefined) {
                                    var valueNumer = Number(e.currentTarget.value);
                                    if (isNumber(valueNumer) === true) {
                                        setVal(valueNumer);
                                    }
                                }
                            }, value: props.value !== undefined ? props.value : val }), jsx(Right, { class: classNames("evp-counter-righter", banRight()), style: {
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

export { EvpCounter as default };
