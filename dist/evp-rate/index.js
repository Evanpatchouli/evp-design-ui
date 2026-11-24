'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var num_util = require('../utils/num.util.js');
var star = require('../evp-icon/star.js');
var React = require('react');
var constant = require('../constant.js');
var classNames = require('classnames');
var index = require('../evp-dom/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

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
    var className = _a.class, count = _a.count, value = _a.value, setValue = _a.setValue, defaultValue = _a.defaultValue, onStarClick = _a.onStarClick, onChange = _a.onChange, starColor = _a.starColor, props = tslib.__rest(_a, ["class", "count", "value", "setValue", "defaultValue", "onStarClick", "onChange", "starColor"]);
    if (count !== undefined && (!Number.isSafeInteger(count) || count < 1 || count > 0xffffffff)) {
        throw new RangeError("EvpRate count must be a positive integer within the array length limit");
    }
    var _b = React.useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 0), val = _b[0], setVal = _b[1];
    var _c = React.useState(val), last = _c[0], setLast = _c[1];
    var realVal = value !== undefined ? adjustValue(value, count !== null && count !== void 0 ? count : 5) : val;
    React.useEffect(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange(realVal);
    }, [realVal]);
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ class: classNames__default["default"]("evp-rate", className !== null && className !== void 0 ? className : "") }, props, { children: num_util.range(1, count !== null && count !== void 0 ? count : 5).map(function (i) {
            var _a, _b, _c, _d;
            return (jsxRuntime.jsx(star["default"], { class: "evp-rate__star", style: {
                    transition: "all 0.2s ease-in-out",
                    opacity: i <= realVal && realVal !== last
                        ? "".concat((_a = starColor === null || starColor === void 0 ? void 0 : starColor.selectedOpacity) !== null && _a !== void 0 ? _a : 1)
                        : "".concat((_b = starColor === null || starColor === void 0 ? void 0 : starColor.unselectedOpacity) !== null && _b !== void 0 ? _b : 0.3),
                }, pointer: true, fill: i <= realVal && realVal !== last
                    ? (_c = starColor === null || starColor === void 0 ? void 0 : starColor.selected) !== null && _c !== void 0 ? _c : constant.Color.DeepYellow
                    : (_d = starColor === null || starColor === void 0 ? void 0 : starColor.unselected) !== null && _d !== void 0 ? _d : constant.Color.Gray, onClick: function (e) {
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

exports["default"] = EvpRate;
