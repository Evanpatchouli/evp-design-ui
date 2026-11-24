'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var alert = require('./alert.js');
var render = require('./render.js');

var core = {
    alert: function (content, options) {
        render["default"](jsxRuntime.jsx(alert["default"], tslib.__assign({ content: content }, options)));
    },
};

exports["default"] = core;
