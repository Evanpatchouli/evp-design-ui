'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');
var route = require('../utils/route.js');
var index = require('../evp-loading/index.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpButton = function (props) {
    var _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    // const default_clickHandler = () => undefined;
    var $props = props_parser["default"](props);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    var clickHandler = function (e) {
        var _a, _b;
        (_b = (_a = $props.event).onMouseDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        props.link ? route.linkTo(props.link, props.hash) : void 0;
    };
    var theme = (_b = props.theme) !== null && _b !== void 0 ? _b : "primary";
    var shadow = props.shadow ? "evp-pale-shadow" : "";
    var size = (_c = props.size) !== null && _c !== void 0 ? _c : "middle";
    var plain = props.plain ? "plain" : "";
    var shape = (_d = props.shape) !== null && _d !== void 0 ? _d : "";
    var $class = (_e = props.class) !== null && _e !== void 0 ? _e : "";
    function positionRipple(event) {
        var button = event.currentTarget;
        var clientWidth = button.clientWidth, clientHeight = button.clientHeight;
        button.style.setProperty("--ripple-x", "".concat(event.nativeEvent.offsetX, "px"));
        button.style.setProperty("--ripple-y", "".concat(event.nativeEvent.offsetY, "px"));
        button.style.setProperty("--ripple-w", "".concat(clientWidth * 3, "px"));
        button.style.setProperty("--ripple-h", "".concat(clientHeight * 3, "px"));
    }
    return (jsxRuntime.jsx("button", tslib.__assign({ 
        // `evp evp-button ${theme} ${shadow} ${size} ${plain} ${shape} ${$class} ${
        //   props.loading ? "evp-disabled" : ""
        // }`.trim()
        className: classNames__default["default"]((_a = {
                evp: true,
                "evp-button": true
            },
            _a[theme] = true,
            _a[shadow] = true,
            _a[size] = true,
            _a[plain] = true,
            _a[shape] = true,
            _a["evp-btn-fade"] = (_f = props.fade) !== null && _f !== void 0 ? _f : true,
            _a.ripple = (_g = props.ripple) !== null && _g !== void 0 ? _g : false,
            _a["evp-disabled"] = (_h = props.loading) !== null && _h !== void 0 ? _h : false,
            _a[$class] = true,
            _a)), id: $props.id, onClick: clickHandler, onClickCapture: props.ripple ? positionRipple : undefined, style: $props.style, type: (_j = props.type) !== null && _j !== void 0 ? _j : "button" }, { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-button-content" }, { children: [jsxRuntime.jsx(index["default"].Text, { className: classNames__default["default"]("btn-loading", props.loading ? "" : "hidden"), style: {
                        marginRight: props.loading === true ? (((_k = props.children) !== null && _k !== void 0 ? _k : props.text) ? 14 : 0) : 0,
                    } }), (_m = (_l = props.children) !== null && _l !== void 0 ? _l : props.text) !== null && _m !== void 0 ? _m : ""] })) })));
};

exports["default"] = EvpButton;
