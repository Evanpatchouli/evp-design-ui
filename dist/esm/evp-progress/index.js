import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import classNames from 'classnames';

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
    var value = _a.value, onChange = _a.onChange, props = __rest(_a, ["value", "onChange"]);
    var rate = function () {
        var _a, _b;
        return ((value ? value - ((_a = props.min) !== null && _a !== void 0 ? _a : 0) : 0) * 100) / ((_b = props.max) !== null && _b !== void 0 ? _b : 100);
    };
    var didMounted = useRef(false);
    var sizeMap = {
        sm: "40px",
        md: "100px",
        lg: "200px",
    };
    useEffect(function () {
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
    return (jsxs("div", __assign({ className: classNames("evp-progress", props.class), id: props.id, style: __assign({ 
            // @ts-ignore
            "--size": typeof props.size === "number"
                ? "".concat(props.size, "px")
                : props.size && ["sm", "md", "lg"].includes(props.size)
                    ? sizeMap[props.size]
                    : (_b = props.size) !== null && _b !== void 0 ? _b : "100px", "--fillColor": rate() > 50 ? (_c = props.fillColor) !== null && _c !== void 0 ? _c : "#6ed4bf" : "transparent", "--textColor": (_e = (_d = props.textColor) !== null && _d !== void 0 ? _d : props.fillColor) !== null && _e !== void 0 ? _e : "#6ed4bf", "--bgColor": rate() > 50 ? (_f = props.fillColor) !== null && _f !== void 0 ? _f : "#6ed4bf" : (_g = props.blankColor) !== null && _g !== void 0 ? _g : "#ffffff", "--blankColor": (_h = props.blankColor) !== null && _h !== void 0 ? _h : "#ffffff", "--fillAfterColor": rate() > 50 ? "transparent" : (_j = props.fillColor) !== null && _j !== void 0 ? _j : "#6ed4bf", "--textBlankColor": (_l = (_k = props.textBlankColor) !== null && _k !== void 0 ? _k : props.blankColor) !== null && _l !== void 0 ? _l : "#ffffff", "--fillRotate": "".concat((360 * rate()) / 100 - 180, "deg") }, props.style) }, pickEvents(props), { children: [jsx("div", { className: "evp-progress__extra" }), jsx("div", { className: "evp-progress__fill" }), jsx("div", __assign({ className: "evp-progress__mask" }, { children: jsx("span", { children: "".concat(rate(), "%") }) }))] })));
};

export { EvpProgress, EvpProgress as default };
