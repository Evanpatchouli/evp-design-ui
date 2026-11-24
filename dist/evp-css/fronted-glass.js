'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../utils/index.js');

var FrostedGlass_default = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.2)",
};
var FrostedGlassFC = function (options) {
    if (options === void 0) { options = {
        background: "rgba(255, 255, 255, 0.1)",
        filterBlur: 10,
        radius: 0,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
    }; }
    return {
        style: {
            background: options.background,
            backdropFilter: "blur(".concat(options.filterBlur, "px)"),
            WebkitBackdropFilter: "blur(".concat(options.radius, "px)"),
            borderRadius: "".concat(options.radius, "px"),
            border: options.border,
            borderStyle: options.borderStyle,
            borderWidth: options.borderWidth,
            borderColor: options.borderColor,
        },
    };
};
// : {
//   (): Omit<CommonCSS, "className" | "id">;
// } & typeof FrostedGlass_default
var FrostedGlass = index.bindFC(FrostedGlass_default, FrostedGlassFC);

exports["default"] = FrostedGlass;
