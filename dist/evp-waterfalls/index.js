'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var React__default = /*#__PURE__*/_interopDefault(React);

var EvpWaterfalls = function (_a) {
    var className = _a.className; _a.style; var children = _a.children, props = tslib.__rest(_a, ["className", "style", "children"]);
    var columns = props.columns || 4;
    var nodes = React__default["default"].Children.toArray(children);
    // split nodes into every column
    var columnsNodes = new Array(columns).fill(0).map(function () { return []; });
    nodes.forEach(function (node, index) {
        columnsNodes[index % columns].push(node);
    });
    console.log(columnsNodes[0]);
    return (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-waterfalls", className), style: {
            // @ts-ignore
            "--evp-waterfalls-columns": columns,
            "--gap": props.gap ? (typeof props.gap === "number" ? "".concat(props.gap, "px") : props.gap) : "8px",
        } }, props, { children: columnsNodes.map(function (nodes, index) { return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-waterfalls-column" }, { children: nodes }), index)); }) })));
};

exports["default"] = EvpWaterfalls;
