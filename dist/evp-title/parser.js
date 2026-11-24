'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../utils/index.js');

function parseSize(size) {
    var sizeArray = ["mn", "sm", "md", "lg", "hg"];
    if (typeof size === "string") {
        if (sizeArray.includes(size)) {
            var $var = new index.Var("--title-text-".concat(size));
            if (sizeArray.includes(size)) {
                return $var.toString();
            }
        }
    }
    return size;
}

exports.parseSize = parseSize;
