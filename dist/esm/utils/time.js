function parseDuration(time) {
    if (time === void 0) { time = "0s"; }
    if (time === undefined || time == null) {
        return "0s";
    }
    if (typeof time === "number") {
        return "".concat(time, "s");
    }
    return time;
}

export { parseDuration };
