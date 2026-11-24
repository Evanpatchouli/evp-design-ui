'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function pickEvents(props) {
    var events = {};
    for (var key in props) {
        if (key.startsWith("on")) {
            events[key] = props[key];
        }
    }
    return events;
}
var EvpProgress = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var value = _a.value, onChange = _a.onChange, props = tslib.__rest(_a, ["value", "onChange"]);
    var rate = function () {
        var _a, _b;
        return ((value ? value - ((_a = props.min) !== null && _a !== void 0 ? _a : 0) : 0) * 100) / ((_b = props.max) !== null && _b !== void 0 ? _b : 100);
    };
    var didMounted = React.useRef(false);
    var sizeMap = {
        sm: "40px",
        md: "100px",
        lg: "200px",
    };
    React.useEffect(function () {
        if (didMounted.current === true) {
            onChange === null || onChange === void 0 ? void 0 : onChange(value !== null && value !== void 0 ? value : 0);
            // if (value !== undefined) {
            //   const mask = document.querySelector(`#${props.id} .${styles["evp-progress__mask"]}`);
            //   if (mask) {
            //     mask.classList.add(styles["evp-progress__mask--active"]);
            //     setTimeout(() => {
            //       mask.classList.remove(styles["evp-progress__mask--active"]);
            //     }, 1000);
            //   }
            // }
        }
        else {
            didMounted.current = true;
        }
    }, [value]);
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp-progress", props.class), id: props.id, style: tslib.__assign({ 
            // @ts-ignore
            "--size": typeof props.size === "number"
                ? "".concat(props.size, "px")
                : props.size && ["sm", "md", "lg"].includes(props.size)
                    ? sizeMap[props.size]
                    : (_b = props.size) !== null && _b !== void 0 ? _b : "100px", "--fillColor": rate() > 50 ? (_c = props.fillColor) !== null && _c !== void 0 ? _c : "#6ed4bf" : "transparent", "--textColor": (_e = (_d = props.textColor) !== null && _d !== void 0 ? _d : props.fillColor) !== null && _e !== void 0 ? _e : "#6ed4bf", "--bgColor": rate() > 50 ? (_f = props.fillColor) !== null && _f !== void 0 ? _f : "#6ed4bf" : (_g = props.blankColor) !== null && _g !== void 0 ? _g : "#ffffff", "--blankColor": (_h = props.blankColor) !== null && _h !== void 0 ? _h : "#ffffff", "--fillAfterColor": rate() > 50 ? "transparent" : (_j = props.fillColor) !== null && _j !== void 0 ? _j : "#6ed4bf", "--textBlankColor": (_l = (_k = props.textBlankColor) !== null && _k !== void 0 ? _k : props.blankColor) !== null && _l !== void 0 ? _l : "#ffffff", "--fillRotate": "".concat((360 * rate()) / 100 - 180, "deg") }, props.style) }, pickEvents(props), { children: [jsxRuntime.jsx("div", { className: "evp-progress__extra" }), jsxRuntime.jsx("div", { className: "evp-progress__fill" }), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-progress__mask" }, { children: jsxRuntime.jsx("span", { children: "".concat(rate(), "%") }) }))] })));
};

exports.EvpProgress = EvpProgress;
exports["default"] = EvpProgress;
