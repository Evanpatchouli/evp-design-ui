'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');
var index = require('../utils/index.js');
var context = require('../evp-form-v2/context.js');
var hooks = require('../evp-form-v2/hooks.js');
var props_parser = require('../utils/props.parser.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpSwitch = function (props) {
    var _a, _b, _c;
    var formCtx = React.useContext(context["default"]);
    var pureProps = props_parser["default"](props);
    var _d = React.useState((_a = props.defaultActive) !== null && _a !== void 0 ? _a : false), active = _d[0], setActive = _d[1];
    function Active() {
        return props.active !== undefined ? props.active : active;
    }
    hooks.useFormField(formCtx, props.name, index.boolStringfy(Active()));
    var labelWidth = props.labelWidth
        ? typeof props.labelWidth === "number"
            ? "".concat(props.labelWidth, "px")
            : props.labelWidth
        : void 0;
    var labelAlign = (_b = props.labelAlign) !== null && _b !== void 0 ? _b : "left";
    var labelRef = React.useRef(null);
    return (jsxRuntime.jsxs("div", tslib.__assign({ style: tslib.__assign({ display: "flex", alignItems: "center", justifyContent: "left" }, pureProps.style) }, { children: [props.label ? (jsxRuntime.jsxs("div", tslib.__assign({ ref: labelRef, className: "evp input label", style: {
                    fontSize: props.labelSize,
                    width: labelWidth,
                    justifyContent: labelAlign,
                } }, { children: [props.required ? jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required" }, { children: "*" })) : void 0, props.label] }))) : null, jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-switch", props.size, active === true ? "active" : ""), onClick: function () {
                    setActive(!active);
                }, style: {
                    // @ts-ignore
                    "--width-factor": (_c = props.widthFactor) !== null && _c !== void 0 ? _c : 2,
                } }, { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp-switch-btn", style: {
                            left: Active() ? "100%" : "0%",
                            // right: (js === 'right') ? 0 : void 0,
                            transform: Active() ? "translateX(-100%)" : "translateX(0%)",
                        } }, { children: jsxRuntime.jsx("div", { className: "evp-switch-btn-content" }) })), props.name ? (jsxRuntime.jsx("input", { name: props.name, hidden: true, value: index.boolStringfy(Active()) })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {}))] }))] })));
};

exports["default"] = EvpSwitch;
