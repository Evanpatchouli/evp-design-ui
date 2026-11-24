'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var val_parser = require('../utils/val.parser.js');
var num_util = require('../utils/num.util.js');
var event_parser = require('../utils/event.parser.js');

var purifyProps = function (props) {
    props.class; props.children; props.items; props.schema; props.size; props.itemSize; props.style; props.mainProps; var rest = tslib.__rest(props, ["class", "children", "items", "schema", "size", "itemSize", "style", "mainProps"]);
    return rest;
};
function calculateRadius(d, x) {
    var r = (d / 2) * (1 - Math.cos((2 * Math.PI) / x));
    return r;
}
var EvpCircle = function (props) {
    var _a, _b;
    var mainProps = (function () {
        var _a;
        var _b = props.mainProps || {}; _b.className; var rest = tslib.__rest(_b, ["className"]);
        return {
            class: (_a = props.mainProps) === null || _a === void 0 ? void 0 : _a.className,
            rest: rest,
        };
    })();
    var items = (_a = props.items) !== null && _a !== void 0 ? _a : [].map(function (i, idx) { var _a, _b, _c; return (_b = (_a = props.schema) === null || _a === void 0 ? void 0 : _a.render) === null || _b === void 0 ? void 0 : _b.call(_a, i, idx, (_c = props.items) !== null && _c !== void 0 ? _c : []); });
    var itemsEvents = event_parser["default"](props.schema);
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-circle", style: tslib.__assign({ 
            // @ts-ignore
            "--evp-circle-width": val_parser["default"](props.size), "--_angle": "".concat(360 / items.length, "deg"), "--_length": "".concat(items.length), "--evp-circle-item-size": "".concat(props.itemSize
                ? val_parser["default"](props.itemSize)
                : "".concat(calculateRadius(num_util["default"].pickNum(props.size).value, items.length) + num_util["default"].pickNum(props.size).unit, ")")) }, props.style) }, purifyProps(props), { children: [items.map(function (i, idx) {
                var _a, _b, _c, _d, _e, _f, _g;
                return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-circle__item ".concat(((_a = props.schema) === null || _a === void 0 ? void 0 : _a.class) ? ((_b = props.schema) === null || _b === void 0 ? void 0 : _b.class) + " " : "", "evp-circle__item--").concat(i), style: tslib.__assign({ 
                        // @ts-ignore
                        "--i": idx }, (_c = props.schema) === null || _c === void 0 ? void 0 : _c.style) }, itemsEvents, { children: ((_d = props.schema) === null || _d === void 0 ? void 0 : _d.render) ? (_f = (_e = props.schema) === null || _e === void 0 ? void 0 : _e.render) === null || _f === void 0 ? void 0 : _f.call(_e, i, idx, (_g = props.items) !== null && _g !== void 0 ? _g : []) : i }), i));
            }), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-circle__main ".concat((_b = mainProps.class) !== null && _b !== void 0 ? _b : "") }, mainProps.rest, { children: props.children }))] })));
};

exports["default"] = EvpCircle;
