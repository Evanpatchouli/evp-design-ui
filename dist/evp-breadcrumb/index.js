'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var props_parser = require('../utils/props.parser.js');
var route = require('../utils/route.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function purifyProps(props) {
    props.routes; props.onClick; props.fontSize; props.class; var rest = tslib.__rest(props, ["routes", "onClick", "fontSize", "class"]);
    return props_parser["default"](rest);
}
var EvpBreadCrumb = function (props) {
    var _a, _b;
    var last = function (idx) { var _a, _b; return (idx !== ((_b = (_a = props.routes) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? "" : "last"); };
    var $props = purifyProps(props);
    return (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp-breadcrumb", props.class), id: props.id, style: tslib.__assign({ fontSize: "".concat((_a = props.fontSize) !== null && _a !== void 0 ? _a : 14, "px") }, $props.style) }, $props.event, { children: (_b = props.routes) === null || _b === void 0 ? void 0 : _b.map(function (route$1, idx) {
            var _a, _b, _c, _d;
            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("span", tslib.__assign({ className: classNames__default["default"]("evp-breadcrumb-title", route$1.path ? "linked" : "", last(idx)), onClick: function (e) {
                            if (props.itemClick) {
                                props.itemClick(e, route$1);
                            }
                            else {
                                if (route$1.path) {
                                    route.linkTo(route$1.path, route$1.hash);
                                }
                            }
                        }, style: {
                            color: idx !== ((_b = (_a = props.routes) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? "lightgray" : "#000",
                        } }, { children: route$1.title })), idx !== ((_d = (_c = props.routes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) - 1 ? (jsxRuntime.jsx("span", tslib.__assign({ style: { padding: "0 8px", color: "lightgray" } }, { children: "/" }))) : (void 0)] }));
        }) })));
};

exports["default"] = EvpBreadCrumb;
