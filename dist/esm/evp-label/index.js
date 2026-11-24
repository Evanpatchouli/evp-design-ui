import { __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useRef } from 'react';

function EvpLabel(props) {
    var _a;
    var labelRef = useRef(null);
    var labelWidth = props.labelWidth ? props.labelWidth : "fit-content";
    var labelAlign = props.labelAlign ? props.labelAlign : "left";
    return (jsxs("div", __assign({ className: classNames("evp-label-container", props.containerClass), style: __assign({ display: "flex", flexDirection: props.labelPosition === "top" ? "column" : "row", alignItems: props.labelPosition === "top" ? "flex-start" : "center", justifyContent: "left", width: "fit-content" }, props.containerStyle) }, { children: [props.label ? (jsxs("div", __assign({ ref: labelRef, className: classNames("evp", "label", props.class), style: __assign({ fontSize: props.labelSize, width: labelWidth, justifyContent: labelAlign }, props.style) }, { children: [props.required ? jsx("div", __assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label, props.labelColon === true ? ":" : (_a = props.labelColon) !== null && _a !== void 0 ? _a : void 0] }))) : null, props.children] })));
}

export { EvpLabel as default };
