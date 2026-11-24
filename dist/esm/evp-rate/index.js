import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { range } from '../utils/num.util.js';
import Star from '../evp-icon/star.js';
import { useState, useEffect } from 'react';
import { Color } from '../constant.js';
import classNames from 'classnames';
import EvpDom from '../evp-dom/index.js';

function adjustValue(value, count) {
    if (value < 0) {
        return 0;
    }
    else if (value > count) {
        return count;
    }
    else {
        return value;
    }
}
var EvpRate = function (_a) {
    var className = _a.class, count = _a.count, value = _a.value, setValue = _a.setValue, defaultValue = _a.defaultValue, onStarClick = _a.onStarClick, onChange = _a.onChange, starColor = _a.starColor, props = __rest(_a, ["class", "count", "value", "setValue", "defaultValue", "onStarClick", "onChange", "starColor"]);
    if (count !== undefined && (!Number.isSafeInteger(count) || count < 1 || count > 0xffffffff)) {
        throw new RangeError("EvpRate count must be a positive integer within the array length limit");
    }
    var _b = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 0), val = _b[0], setVal = _b[1];
    var _c = useState(val), last = _c[0], setLast = _c[1];
    var realVal = value !== undefined ? adjustValue(value, count !== null && count !== void 0 ? count : 5) : val;
    useEffect(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(realVal);
    }, [realVal]);
    return (jsx(EvpDom, __assign({ class: classNames("evp-rate", className !== null && className !== void 0 ? className : "") }, props, { children: range(1, count !== null && count !== void 0 ? count : 5).map(function (i) {
            var _a, _b, _c, _d;
            return (jsx(Star, { class: "evp-rate__star", style: {
                    transition: "all 0.2s ease-in-out",
                    opacity: i <= realVal && realVal !== last
                        ? "".concat((_a = starColor === null || starColor === void 0 ? void 0 : starColor.selectedOpacity) !== null && _a !== void 0 ? _a : 1)
                        : "".concat((_b = starColor === null || starColor === void 0 ? void 0 : starColor.unselectedOpacity) !== null && _b !== void 0 ? _b : 0.3),
                }, pointer: true, fill: i <= realVal && realVal !== last
                    ? (_c = starColor === null || starColor === void 0 ? void 0 : starColor.selected) !== null && _c !== void 0 ? _c : Color.DeepYellow
                    : (_d = starColor === null || starColor === void 0 ? void 0 : starColor.unselected) !== null && _d !== void 0 ? _d : Color.Gray, onClick: function (e) {
                    if (onStarClick) {
                        onStarClick(e);
                    }
                    else {
                        if (!(value !== undefined && value !== null && !setValue)) {
                            setLast(realVal);
                        }
                        setValue === null || setValue === void 0 ? void 0 : setValue(i);
                        setVal(i);
                        if (realVal === last) {
                            // clean last
                            setLast(-1);
                        }
                    }
                } }, i));
        }) })));
};

export { EvpRate as default };
