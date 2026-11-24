'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Parse number to px
 */
var valParser = function (props) {
    if (props == null || props === "") {
        return undefined;
    }
    else {
        if (typeof props === 'number') {
            return "".concat(props, "px");
        }
        else {
            return props;
        }
    }
};

exports["default"] = valParser;
