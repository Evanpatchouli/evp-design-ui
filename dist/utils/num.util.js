'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * To fix a number with certain precision strictly with zero added at the end
 * @param num
 * @param precision default is 2
 * @returns
 */
var toFixedStrictly = function (num, precision) {
    if (precision === void 0) { precision = 2; }
    if (typeof num !== "number") {
        throw new Error("The proped num must be a number");
    }
    return num.toFixed(precision);
};
function range(start, end, options) {
    if (options === void 0) { options = {}; }
    if (!Number.isFinite(start) || !Number.isFinite(end) || Math.max(Math.abs(start), Math.abs(end)) > Number.MAX_SAFE_INTEGER) {
        throw new RangeError("Range bounds must be finite and within safe numeric limits");
    }
    if (start > end) {
        throw new Error("The proped start must be smaller than or equal to end");
    }
    var _a = options.inclusiveStart, inclusiveStart = _a === void 0 ? true : _a, _b = options.inclusiveEnd, inclusiveEnd = _b === void 0 ? true : _b;
    if (end - start >= 0xffffffff)
        throw new RangeError("Range exceeds the array length limit");
    var result = [];
    for (var i = start; i <= end; i++) {
        if ((i !== start || inclusiveStart) && (i !== end || inclusiveEnd))
            result.push(i);
    }
    return result;
}
var pickNum = function (value) {
    if (!value) {
        return {
            value: 0,
            unit: "px",
        };
    }
    if (typeof value === "number") {
        return {
            value: value,
            unit: "px",
        };
    }
    var match = value.match(/-?\d+(\.\d+)?/);
    if (match) {
        return {
            value: parseFloat(match[0]),
            unit: value.replace(match[0], ""),
        };
    }
    return {
        value: 0,
        unit: "px",
    };
};
var NumUtils = {
    toFixedStrictly: toFixedStrictly,
    range: range,
    pickNum: pickNum,
};

exports["default"] = NumUtils;
exports.range = range;
exports.toFixedStrictly = toFixedStrictly;
