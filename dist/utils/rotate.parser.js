'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function RotateParser(rotate) {
    if (!rotate) {
        return "0deg";
    }
    if (typeof rotate === "string") {
        return rotate;
    }
    return "".concat(rotate, "deg");
}

exports["default"] = RotateParser;
