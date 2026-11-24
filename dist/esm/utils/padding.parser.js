/**
 * @param pd This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px`
 * @returns
 */
var paddingParser = function (pd) {
    function parse(val) {
        return typeof val === "number" ? "".concat(val, "px") : val !== null && val !== void 0 ? val : "";
    }
    if (pd != null) {
        if (typeof pd === "number") {
            return "".concat(pd, "px");
        }
        else {
            var result = "".concat(parse(pd[0]), " ").concat(parse(pd[1]), " ").concat(parse(pd[2]), " ").concat(parse(pd[3]));
            return result.trim() === "" ? undefined : result;
        }
    }
    else {
        return undefined;
    }
};

export { paddingParser };
