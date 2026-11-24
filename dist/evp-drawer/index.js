'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var close = require('../evp-icon/close.js');
var index_v2 = require('../evp-card/index.v2.js');
var index = require('../evp-modal/index.js');
var classNames = require('classnames');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function cardProps(params) {
    params.open; params.setOpen; params.onClose; params.onOpen; params.modal; params.position; params.header; params.headerProps; params.blur; var rest = tslib.__rest(params, ["open", "setOpen", "onClose", "onOpen", "modal", "position", "header", "headerProps", "blur"]);
    return rest;
}
function EvpDrawer(props) {
    var _a, _b, _c;
    var open = props.open, onClose = props.onClose, onOpen = props.onOpen;
    var didMountRef = React.useRef(false);
    React.useEffect(function () {
        if (didMountRef.current) {
            if (open === true) {
                onOpen === null || onOpen === void 0 ? void 0 : onOpen();
            }
            else {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }
        else {
            didMountRef.current = true;
        }
    }, [open]);
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ open: true, modalClass: classNames__default["default"]("evp-drawer-modal", props.modal === false ? "without" : "", open ? "open" : "close"), contentClass: classNames__default["default"]("evp-drawer-container", (_a = props.position) !== null && _a !== void 0 ? _a : "left", open ? "open" : "close"), blur: props.blur }, { children: jsxRuntime.jsx(index_v2["default"], tslib.__assign({ h: "100%", w: "100%", headerProps: (_b = props.headerProps) !== null && _b !== void 0 ? _b : {
                justifyContent: "flex-end",
            }, header: (_c = props.header) !== null && _c !== void 0 ? _c : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(close["default"], { class: "evp-dialog-close-btn", onClick: function () {
                        var _a;
                        (_a = props === null || props === void 0 ? void 0 : props.setOpen) === null || _a === void 0 ? void 0 : _a.call(props, false);
                    } }) })) }, cardProps(props), { children: props.children })) })));
}

exports["default"] = EvpDrawer;
