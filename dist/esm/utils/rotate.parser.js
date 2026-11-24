function RotateParser(rotate) {
    if (!rotate) {
        return "0deg";
    }
    if (typeof rotate === "string") {
        return rotate;
    }
    return "".concat(rotate, "deg");
}

export { RotateParser as default };
