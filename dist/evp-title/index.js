'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var val_parser = require('../utils/val.parser.js');
var parser = require('./parser.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpTitle = function (_a) {
    var _b;
    var className = _a.className, id = _a.id, stressed = _a.stressed, stressLineColor = _a.stressLineColor, size = _a.size, weight = _a.weight, fontSize = _a.fontSize, underline = _a.underline, style = _a.style, props = tslib.__rest(_a, ["className", "id", "stressed", "stressLineColor", "size", "weight", "fontSize", "underline", "style"]);
    var _fontSize = (_b = style === null || style === void 0 ? void 0 : style.fontSize) !== null && _b !== void 0 ? _b : fontSize;
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-title", className), id: id, style: {
            // @ts-ignore
            "--fontSize": val_parser["default"](_fontSize !== null && _fontSize !== void 0 ? _fontSize : parser.parseSize(size)),
        } }, { children: [stressed ? (jsxRuntime.jsx("div", { className: "evp-title__left-stresses-line", style: {
                    // @ts-ignore
                    "--bgColor": stressLineColor,
                } })) : null, jsxRuntime.jsx("div", tslib.__assign({ className: "evp-title__main", style: (function () {
                    var _a = style !== null && style !== void 0 ? style : {}; _a.fontSize; var rest = tslib.__rest(_a, ["fontSize"]);
                    return tslib.__assign({ textDecorationLine: underline === true ? "underline" : underline || "none", fontWeight: weight !== null && weight !== void 0 ? weight : "bold" }, rest);
                })() }, props))] })));
};

exports["default"] = EvpTitle;
