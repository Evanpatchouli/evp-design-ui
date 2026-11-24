'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-dom/index.js');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var React__default = /*#__PURE__*/_interopDefault(React);

var EvpSnake = function (_a) {
    var classname = _a.class, props = tslib.__rest(_a, ["class"]);
    var children = props.children, _b = props.startFrom, startFrom = _b === void 0 ? "left" : _b;
    var getDirectionClass = function (index) {
        var isEvenRow = Math.floor(index / 3) % 2 === 0;
        if (startFrom === "left" || startFrom === "top") {
            return isEvenRow ? "row-left" : "row-right";
        }
        else {
            return isEvenRow ? "row-right" : "row-left";
        }
    };
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ class: classNames__default["default"]("evp-snake evp-snake-from-".concat(startFrom), classname) }, props, { children: React__default["default"].Children.map(children, function (child, index) { return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-snake-item ".concat(getDirectionClass(index)) }, { children: child }), index)); }) })));
};

exports["default"] = EvpSnake;
