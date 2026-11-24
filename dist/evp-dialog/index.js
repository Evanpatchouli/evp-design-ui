'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-modal/index.js');
var React = require('react');
var index_v2 = require('../evp-card/index.v2.js');
var index$1 = require('../evp-button/index.js');
var close = require('../evp-icon/close.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var React__default = /*#__PURE__*/_interopDefault(React);

function EvpDialog(props) {
    var _a;
    props.open; var setOpen = props.setOpen, onClose = props.onClose, onOpen = props.onOpen, className = props.class, blur = props.blur, rest = tslib.__rest(props, ["open", "setOpen", "onClose", "onOpen", "class", "blur"]);
    var _b = React__default["default"].useState((_a = props.defaultOpen) !== null && _a !== void 0 ? _a : false), _open = _b[0], _setOpen = _b[1];
    return (jsxRuntime.jsx(index["default"], tslib.__assign({ open: props.open !== undefined ? props.open : _open, onClose: onClose, onOpen: onOpen, blur: blur }, { children: jsxRuntime.jsx(index_v2["default"], tslib.__assign({ class: classNames__default["default"]("evp", "evp-dialog", className), w: 400, h: 200, headerProps: {
                justifyContent: "flex-end",
            }, header: jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(close["default"], { class: "evp-dialog-close-btn", onClick: function () {
                        setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                        _setOpen(false);
                    } }) }), footerProps: {
                justifyContent: "flex-end",
            }, footer: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1["default"], tslib.__assign({ theme: "white", mgr_8: true, text: "cancel", "$click": function () {
                            setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                            _setOpen(false);
                        } }, props.cancelProps)), jsxRuntime.jsx(index$1["default"], tslib.__assign({ text: "confirm", "$click": function () {
                            setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                            _setOpen(false);
                        } }, props.confirmProps))] }) }, rest)) })));
}

exports["default"] = EvpDialog;
