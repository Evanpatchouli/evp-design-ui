import { __assign } from 'tslib';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useContext, useState, useRef } from 'react';
import { boolStringfy } from '../utils/index.js';
import EvpFormContext from '../evp-form-v2/context.js';
import { useFormField } from '../evp-form-v2/hooks.js';
import AllParser from '../utils/props.parser.js';

var EvpSwitch = function (props) {
    var _a, _b, _c;
    var formCtx = useContext(EvpFormContext);
    var pureProps = AllParser(props);
    var _d = useState((_a = props.defaultActive) !== null && _a !== void 0 ? _a : false), active = _d[0], setActive = _d[1];
    function Active() {
        return props.active !== undefined ? props.active : active;
    }
    useFormField(formCtx, props.name, boolStringfy(Active()));
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_b = props.labelAlign) !== null && _b !== void 0 ? _b : "left";
    var labelRef = useRef(null);
    return (jsxs("div", __assign({ style: __assign({ display: "flex", alignItems: "center", justifyContent: "left" }, pureProps.style) }, { children: [props.label ? (jsxs("div", __assign({ ref: labelRef, className: "evp input label", style: {
                    fontSize: props.labelSize,
                    width: labelWidth,
                    justifyContent: labelAlign,
                } }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label] }))) : null, jsxs("div", __assign({ className: classNames("evp", "evp-switch", props.size, active === true ? "active" : ""), onClick: function () {
                    setActive(!active);
                }, style: {
                    // @ts-ignore
                    "--width-factor": (_c = props.widthFactor) !== null && _c !== void 0 ? _c : 2,
                } }, { children: [jsx("div", __assign({ className: "evp-switch-btn", style: {
                            left: Active() ? "100%" : "0%",
                            // right: (js === 'right') ? 0 : void 0,
                            transform: Active() ? "translateX(-100%)" : "translateX(0%)",
                        } }, { children: jsx("div", { className: "evp-switch-btn-content" }) })), props.name ? (jsx("input", { name: props.name, hidden: true, value: boolStringfy(Active()) })) : (jsx(Fragment, {}))] }))] })));
};

export { EvpSwitch as default };
