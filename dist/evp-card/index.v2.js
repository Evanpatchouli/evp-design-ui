'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-dom/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpCardV2(props) {
    var containerProps = function () {
        props.class; props.children; var style = props.style; props.contentStyle; props.contentClass; props.lefter; props.lefterProps; props.righter; props.righterProps; props.header; props.headerProps; props.footer; props.footerProps; props.loading; var cardLoading = props.cardLoading, rest = tslib.__rest(props, ["class", "children", "style", "contentStyle", "contentClass", "lefter", "lefterProps", "righter", "righterProps", "header", "headerProps", "footer", "footerProps", "loading", "cardLoading"]);
        return tslib.__assign(tslib.__assign({ style: tslib.__assign({ flexDirection: "row" }, style), loading: cardLoading }, rest), { class: "evp evp-card evp-base-shadow ".concat(props.class || "").trim() });
    };
    var lefterProps = function () {
        var _a, _b;
        return tslib.__assign(tslib.__assign({}, ((_a = props.lefterProps) !== null && _a !== void 0 ? _a : {})), { class: classNames__default["default"]("evp-card-lefter", (_b = props.lefterProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var righterProps = function () {
        var _a, _b;
        return tslib.__assign(tslib.__assign({}, ((_a = props.righterProps) !== null && _a !== void 0 ? _a : {})), { class: classNames__default["default"]("evp-card-righter", (_b = props.righterProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var headerProps = function () {
        var _a, _b;
        return tslib.__assign(tslib.__assign({}, ((_a = props.headerProps) !== null && _a !== void 0 ? _a : {})), { class: classNames__default["default"]("evp-card-header", (_b = props.headerProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var footerProps = function () {
        var _a, _b;
        return tslib.__assign(tslib.__assign({}, ((_a = props.footerProps) !== null && _a !== void 0 ? _a : {})), { class: classNames__default["default"]("evp-card-footer", (_b = props.footerProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({}, containerProps(), { children: [props.lefter !== undefined ? jsxRuntime.jsx(index["default"], tslib.__assign({}, lefterProps(), { children: props.lefter })) : void 0, jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-card-main" }, { children: [props.header !== undefined ? jsxRuntime.jsx(index["default"], tslib.__assign({}, headerProps(), { children: props.header })) : void 0, jsxRuntime.jsx(index["default"], tslib.__assign({ class: "evp-card-content ".concat(props.contentClass || "").trim(), style: tslib.__assign({}, props.contentStyle), loading: props.loading }, { children: props.children })), props.footer !== undefined ? jsxRuntime.jsx(index["default"], tslib.__assign({}, footerProps(), { children: props.footer })) : void 0] })), props.righter !== undefined ? jsxRuntime.jsx(index["default"], tslib.__assign({}, righterProps(), { children: props.righter })) : void 0] })));
}

exports["default"] = EvpCardV2;
