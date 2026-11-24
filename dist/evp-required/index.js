'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');

function EvpRequired(_a) {
    var className = _a.className, hidden = _a.hidden, children = _a.children, props = tslib.__rest(_a, ["className", "hidden", "children"]);
    return hidden ? (jsxRuntime.jsx(jsxRuntime.Fragment, {})) : (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-required ".concat(className !== null && className !== void 0 ? className : "").trim() }, props, { children: children !== null && children !== void 0 ? children : "*" })));
}

exports["default"] = EvpRequired;
