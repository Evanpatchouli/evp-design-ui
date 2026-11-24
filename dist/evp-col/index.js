'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var val_parser = require('../utils/val.parser.js');
var props_parser = require('../utils/props.parser.js');

function EvpCol(props) {
    var _a, _b, _c, _d, _e, _f;
    var $props = props_parser["default"](props);
    var event = $props.event;
    var style = tslib.__assign({ display: props.hidden ? "none" : "flex", flexDirection: (_a = props.flexDirection) !== null && _a !== void 0 ? _a : "column", justifyContent: (_b = props.justifyContent) !== null && _b !== void 0 ? _b : "flex-start", alignItems: (_c = props.alignItems) !== null && _c !== void 0 ? _c : "center", width: (_d = props.w) !== null && _d !== void 0 ? _d : "100%", height: props.h }, $props.style);
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp col ".concat((_e = props.class) !== null && _e !== void 0 ? _e : '').trim(), id: props.id, style: tslib.__assign({ gap: (_f = val_parser["default"](props.gap)) !== null && _f !== void 0 ? _f : "6px" }, style), onMouseEnter: event.onMouseEnter, onMouseOver: event.onMouseOver, onFocus: event.onFocus, onMouseDown: event.onMouseDown, onDoubleClick: event.onDoubleClick, onContextMenu: event.onContextMenu, onMouseUp: event.onMouseUp, onMouseMove: event.onMouseMove, onScroll: event.onScroll, onMouseOut: event.onMouseOut, onMouseLeave: event.onMouseLeave, onKeyDown: event.onKeyDown }, { children: props.children })));
}

exports["default"] = EvpCol;
