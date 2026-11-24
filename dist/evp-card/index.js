'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../evp-dom/index.js');

function EvpCard(props) {
    var _a;
    var toolBarPosition = (_a = props.toolBarPosition) !== null && _a !== void 0 ? _a : "bottom";
    var flexDirectionMap = {
        top: "column-reverse",
        bottom: "column",
        left: "row-reverse",
        right: "row",
    };
    var toolbarFlexDirectionMap = {
        top: "row",
        bottom: "row",
        left: "column",
        right: "column",
    };
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({}, tslib.__assign(tslib.__assign({ style: {
            flexDirection: flexDirectionMap[toolBarPosition],
        }, loading: props.cardLoading }, props), { class: "evp evp-card evp-base-shadow ".concat(props.class, " ?? \"\"").trim() }), { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp-card-content ".concat(props.contentClass).trim(), style: tslib.__assign({}, props.contentStyle) }, { children: props.children })), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-card-toolbar ".concat(props.toolBarClass).trim(), style: tslib.__assign({ borderTop: props.toolBar ? (toolBarPosition === "bottom" ? "1px solid rgba(0,0,0,0.05)" : void 0) : void 0, borderBottom: props.toolBar ? (toolBarPosition === "top" ? "1px solid rgba(0,0,0,0.05)" : void 0) : void 0, borderLeft: props.toolBar ? (toolBarPosition === "right" ? "1px solid rgba(0,0,0,0.05)" : void 0) : void 0, borderRight: props.toolBar ? (toolBarPosition === "left" ? "1px solid rgba(0,0,0,0.05)" : void 0) : void 0, flexDirection: toolbarFlexDirectionMap[toolBarPosition] }, props.toolbarStyle) }, { children: props.toolBar }))] })));
}

exports["default"] = EvpCard;
