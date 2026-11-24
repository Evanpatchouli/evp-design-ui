'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');
var index = require('../evp-loading/index.js');
var useHasOpened = require('../utils/useHasOpened.js');

function EvpDom($props) {
    // console.log('EvpDom.props:', $props)
    var props = props_parser["default"]($props);
    // console.log('EvpDom.props after parsed:', props);
    var event = props.event;
    var mountModal = useHasOpened["default"]($props.modal);
    return (jsxRuntime.jsxs("div", tslib.__assign({ id: props.id, className: props.class, hidden: props.hidden, style: tslib.__assign({ position: "relative" }, props.style), onMouseEnter: event.onMouseEnter, onMouseOver: event.onMouseOver, onFocus: event.onFocus, onMouseDown: event.onMouseDown, onDoubleClick: event.onDoubleClick, onContextMenu: event.onContextMenu, onMouseUp: event.onMouseUp, onMouseMove: event.onMouseMove, onScroll: event.onScroll, onMouseOut: event.onMouseOut, onMouseLeave: event.onMouseLeave, onKeyDown: event.onKeyDown }, { children: [$props.children, $props.loading && (jsxRuntime.jsx("div", tslib.__assign({ className: "dom-loading__modal" }, { children: jsxRuntime.jsx(index["default"].SpinDot, { className: "dom-loading__elem" }) }))), mountModal && (jsxRuntime.jsx("div", tslib.__assign({ className: "dom__modal", hidden: !$props.modal }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "dom__modal__content" }, { children: $props.modalContent })) })))] })));
}

exports["default"] = EvpDom;
