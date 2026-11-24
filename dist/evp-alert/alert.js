'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var index = require('../evp-dialog/index.js');
var React = require('react');
var render = require('./render.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var Alert = function (_a) {
    var content = _a.content, onClose = _a.onClose, onOpen = _a.onOpen, classname = _a.class, props = tslib.__rest(_a, ["content", "onClose", "onOpen", "class"]);
    var divRef = React.useRef(null);
    React.useEffect(function () {
        var current = divRef.current;
        // Forbid mouse wheel
        current === null || current === void 0 ? void 0 : current.addEventListener("wheel", closeDefault, { passive: false });
        return function () {
            // @ts-ignore
            current === null || current === void 0 ? void 0 : current.removeEventListener("wheel", closeDefault, { passive: false });
        };
    }, []);
    function closeDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    onOpen === null || onOpen === void 0 ? void 0 : onOpen();
    return (jsxRuntime.jsx("div", tslib.__assign({ onWheel: function (e) {
            e.preventDefault();
        }, onTouchMove: function (e) {
            e.preventDefault();
        }, onTouchStart: function (e) {
            e.preventDefault();
        }, ref: divRef }, { children: jsxRuntime.jsx(index["default"], tslib.__assign({ defaultOpen: true, onClose: function () {
                onClose === null || onClose === void 0 ? void 0 : onClose();
                render.clearAlert();
            }, class: classNames__default["default"](classname, "evp-alert") }, props, { children: content })) })));
};

exports["default"] = Alert;
