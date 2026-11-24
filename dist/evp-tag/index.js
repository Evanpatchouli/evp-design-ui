'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var cloneDeep = require('lodash/cloneDeep.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var cloneDeep__default = /*#__PURE__*/_interopDefault(cloneDeep);

var EvpTag = function (props) {
    var theme = props.theme, plain = props.plain, light = props.light, size = props.size, round = props.round;
    var children = props.children, text = props.text, className = props.class, rest = tslib.__rest(props, ["children", "text", "class"]);
    var $type = light ? "light" : plain ? "plain" : "deep";
    var classes = classNames__default["default"]("evp", "evp-tag", theme !== null && theme !== void 0 ? theme : "primary", $type, className);
    var sizer = function () {
        switch (size) {
            case "sm":
                return {
                    fontSize: "10px",
                    height: "22px",
                    lineHeight: "22px",
                };
            case "lg":
                return {
                    fontSize: "14px",
                    height: "26px",
                    lineHeight: "26px",
                };
            default:
                return {
                    fontSize: "12px",
                    height: "24px",
                    lineHeight: "24px",
                };
        }
    };
    var $rest = cloneDeep__default["default"](rest);
    delete $rest.style;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: classes, style: tslib.__assign(tslib.__assign(tslib.__assign({ width: "fit-content", color: $type === "deep" ? "#fff" : void 0 }, sizer()), { textAlign: "center", verticalAlign: "middle", padding: "0 12px", borderRadius: round ? "100px" : "4px", display: props.display }), rest.style) }, $rest, { children: children !== null && children !== void 0 ? children : text })));
};

exports["default"] = EvpTag;
