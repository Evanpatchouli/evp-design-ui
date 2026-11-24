import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpButton from '../evp-button/index.js';
import React from 'react';
import valParser from '../utils/val.parser.js';
import RotateParser from '../utils/rotate.parser.js';

var EvpGhostButtonGroup = function (_a) {
    var _b;
    _a.class; var items = _a.items, children = _a.children, direction = _a.direction, gap = _a.gap, style = _a.style, groupRotate = _a.groupRotate, reverse = _a.reverse, shadow = _a.shadow, boxShadow = _a.boxShadow, open = _a.open, setOpen = _a.setOpen, props = __rest(_a, ["class", "items", "children", "direction", "gap", "style", "groupRotate", "reverse", "shadow", "boxShadow", "open", "setOpen"]);
    var _c = React.useState(false), opened = _c[0], openSet = _c[1];
    var realOpen = open !== undefined ? open : opened;
    var queneAdapter = function (direction) {
        var _a, _b, _c, _d;
        switch (direction) {
            case "up":
                return {
                    flexDirection: reverse ? "column" : "column-reverse",
                    top: "-".concat((_a = valParser(gap)) !== null && _a !== void 0 ? _a : "12px"),
                    left: "50%",
                    transform: "translateY(-100%) translateX(-50%) rotate(".concat(RotateParser(groupRotate), ")"),
                };
            case "down":
                return {
                    flexDirection: reverse ? "column-reverse" : "column",
                    top: "calc(100% + ".concat((_b = valParser(gap)) !== null && _b !== void 0 ? _b : "12px", ")"),
                    left: "50%",
                    transform: "translateX(-50%) rotate(".concat(RotateParser(groupRotate)),
                };
            case "left":
                return {
                    left: "-".concat((_c = valParser(gap)) !== null && _c !== void 0 ? _c : "12px"),
                    flexDirection: reverse ? "row" : "row-reverse",
                    top: "50%",
                    transform: "translateY(-50%) translateX(-100%) rotate(".concat(RotateParser(groupRotate)),
                };
            case "right":
                return {
                    left: "calc(100% + ".concat((_d = valParser(gap)) !== null && _d !== void 0 ? _d : "12px", ")"),
                    flexDirection: reverse ? "row-reverse" : "row",
                    top: "50%",
                    transform: "translateY(-50%) rotate(".concat(RotateParser(groupRotate)),
                };
            default:
                return {
                    flexDirection: "column",
                };
        }
    };
    return (jsxs(EvpButton, __assign({ theme: "white", shape: "circle", position: "relative", style: __assign({ overflow: "visible", 
            // @ts-ignore
            "--show-pre-boxshadow": shadow !== false ? boxShadow !== null && boxShadow !== void 0 ? boxShadow : "8px 10px 25px 0px rgba(0, 0, 0, 0.17)" : "none" }, style), class: classNames({
            "evp-ghost-buttons-group": true,
            "evp-ghost-buttons-group--opened": realOpen,
            className: true,
        }) }, props, { children: [jsx("div", __assign({ className: "evp-ghost-buttons-group__items-quene", style: __assign(__assign({}, queneAdapter(direction)), { pointerEvents: realOpen ? "all" : "none", gap: (_b = valParser(gap)) !== null && _b !== void 0 ? _b : "12px", visibility: realOpen ? "visible" : "hidden" }) }, { children: items === null || items === void 0 ? void 0 : items.map(function (_a, index) {
                    var className = _a.class, item = __rest(_a, ["class"]);
                    return (jsx(EvpButton, __assign({ class: classNames("evp-ghost-buttons-group__items-quene__item", className), theme: "white", shape: "circle" }, item, { style: {
                            // position: "absolute",
                            opacity: realOpen ? "1" : "0",
                            scale: realOpen ? "1" : "0",
                            transition: "all 0.2s ease, scale 0.2s ease-in-out",
                        } })));
                }) })), jsx("div", __assign({ className: "evp-ghost-buttons-group__main-wrapper", style: {
                    width: "fit-content",
                    height: "fit-content",
                    boxSizing: "content-box",
                }, onPointerDown: function () {
                    openSet(!realOpen);
                    setOpen && setOpen(!realOpen);
                } }, { children: children }))] })));
};

export { EvpGhostButtonGroup as default };
