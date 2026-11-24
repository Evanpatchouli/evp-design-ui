'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../utils/index.js');

var Centred_default = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
};
var CenteredFC = function () {
    return {
        style: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "middle",
        },
    };
};
var Centred = index.bindFC(Centred_default, CenteredFC);

exports["default"] = Centred;
