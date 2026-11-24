'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var Header = function (_a) {
    var className = _a.className, props = tslib.__rest(_a, ["className"]);
    return jsxRuntime.jsx("tr", tslib.__assign({ className: classNames__default["default"]("evp-table-column-headers-row", className) }, props));
};
var Record = function (_a) {
    var className = _a.className, props = tslib.__rest(_a, ["className"]);
    return jsxRuntime.jsx("tr", tslib.__assign({ className: classNames__default["default"]("evp-table-column-record-row", className) }, props));
};
var Tr = {
    Header: Header,
    Record: Record,
};

exports["default"] = Tr;
