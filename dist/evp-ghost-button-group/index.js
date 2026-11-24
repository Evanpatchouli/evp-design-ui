'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-button/index.js');
var React = require('react');
var val_parser = require('../utils/val.parser.js');
var rotate_parser = require('../utils/rotate.parser.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var React__default = /*#__PURE__*/_interopDefault(React);

var EvpGhostButtonGroup = function (_a) {
    var _b;
    _a.class; var items = _a.items, children = _a.children, direction = _a.direction, gap = _a.gap, style = _a.style, groupRotate = _a.groupRotate, reverse = _a.reverse, shadow = _a.shadow, boxShadow = _a.boxShadow, open = _a.open, setOpen = _a.setOpen, props = tslib.__rest(_a, ["class", "items", "children", "direction", "gap", "style", "groupRotate", "reverse", "shadow", "boxShadow", "open", "setOpen"]);
    var _c = React__default["default"].useState(false), opened = _c[0], openSet = _c[1];
    var realOpen = open !== undefined ? open : opened;
    var queneAdapter = function (direction) {
        var _a, _b, _c, _d;
        switch (direction) {
            case "up":
                return {
                    flexDirection: reverse ? "column" : "column-reverse",
                    top: "-".concat((_a = val_parser["default"](gap)) !== null && _a !== void 0 ? _a : "12px"),
                    left: "50%",
                    transform: "translateY(-100%) translateX(-50%) rotate(".concat(rotate_parser["default"](groupRotate), ")"),
                };
            case "down":
                return {
                    flexDirection: reverse ? "column-reverse" : "column",
                    top: "calc(100% + ".concat((_b = val_parser["default"](gap)) !== null && _b !== void 0 ? _b : "12px", ")"),
                    left: "50%",
                    transform: "translateX(-50%) rotate(".concat(rotate_parser["default"](groupRotate)),
                };
            case "left":
                return {
                    left: "-".concat((_c = val_parser["default"](gap)) !== null && _c !== void 0 ? _c : "12px"),
                    flexDirection: reverse ? "row" : "row-reverse",
                    top: "50%",
                    transform: "translateY(-50%) translateX(-100%) rotate(".concat(rotate_parser["default"](groupRotate)),
                };
            case "right":
                return {
                    left: "calc(100% + ".concat((_d = val_parser["default"](gap)) !== null && _d !== void 0 ? _d : "12px", ")"),
                    flexDirection: reverse ? "row-reverse" : "row",
                    top: "50%",
                    transform: "translateY(-50%) rotate(".concat(rotate_parser["default"](groupRotate)),
                };
            default:
                return {
                    flexDirection: "column",
                };
        }
    };
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ theme: "white", shape: "circle", position: "relative", style: tslib.__assign({ overflow: "visible", 
            // @ts-ignore
            "--show-pre-boxshadow": shadow !== false ? boxShadow !== null && boxShadow !== void 0 ? boxShadow : "8px 10px 25px 0px rgba(0, 0, 0, 0.17)" : "none" }, style), class: classNames__default["default"]({
            "evp-ghost-buttons-group": true,
            "evp-ghost-buttons-group--opened": realOpen,
            className: true,
        }) }, props, { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp-ghost-buttons-group__items-quene", style: tslib.__assign(tslib.__assign({}, queneAdapter(direction)), { pointerEvents: realOpen ? "all" : "none", gap: (_b = val_parser["default"](gap)) !== null && _b !== void 0 ? _b : "12px", visibility: realOpen ? "visible" : "hidden" }) }, { children: items === null || items === void 0 ? void 0 : items.map(function (_a, index$1) {
                    var className = _a.class, item = tslib.__rest(_a, ["class"]);
                    return (jsxRuntime.jsx(index["default"], tslib.__assign({ class: classNames__default["default"]("evp-ghost-buttons-group__items-quene__item", className), theme: "white", shape: "circle" }, item, { style: {
                            // position: "absolute",
                            opacity: realOpen ? "1" : "0",
                            scale: realOpen ? "1" : "0",
                            transition: "all 0.2s ease, scale 0.2s ease-in-out",
                        } })));
                }) })), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-ghost-buttons-group__main-wrapper", style: {
                    width: "fit-content",
                    height: "fit-content",
                    boxSizing: "content-box",
                }, onPointerDown: function () {
                    openSet(!realOpen);
                    setOpen && setOpen(!realOpen);
                } }, { children: children }))] })));
};

exports["default"] = EvpGhostButtonGroup;
