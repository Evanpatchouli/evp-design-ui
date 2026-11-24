'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var marginParser = function (mg) {
    function parse(val) {
        return typeof val === "number" ? "".concat(val, "px") : val !== null && val !== void 0 ? val : "";
    }
    if (mg != null) {
        if (typeof mg === "number") {
            return "".concat(mg, "px");
        }
        else {
            var result = "".concat(parse(mg[0]), " ").concat(parse(mg[1]), " ").concat(parse(mg[2]), " ").concat(parse(mg[3]));
            return result.trim() === "" ? undefined : result;
        }
    }
    else {
        return undefined;
    }
};

exports.marginParser = marginParser;
