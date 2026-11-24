'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var blurParser = function (blur) {
    if (blur === undefined || blur === null) {
        return void 0;
    }
    if (typeof blur === "boolean") {
        if (blur) {
            return "blur(5px)";
        }
        else {
            return void 0;
        }
    }
    else if (typeof blur === "number") {
        return "blur(".concat(blur, "px)");
    }
    else {
        return "blur(".concat(blur, ")");
    }
};
function EvpModal(props) {
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
    return (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp", "evp-modal", props.modalClass), hidden: !props.open, style: tslib.__assign({ backgroundColor: "rgba(0, 0, 0, ".concat((_a = props.alpha) !== null && _a !== void 0 ? _a : "0.5", ")"), backdropFilter: blurParser(props.blur), WebkitBackdropFilter: blurParser(props.blur) }, props.modalStyle), onTouchStart: function (e) {
            if (!props.scrollable) {
                e.preventDefault();
                e.stopPropagation();
            }
        } }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp-modal__content", props.contentClass), style: tslib.__assign({ left: props.x, top: props.y, transform: "translate(".concat((_b = props.translateX) !== null && _b !== void 0 ? _b : "-50%", ", ").concat((_c = props.translateY) !== null && _c !== void 0 ? _c : "-50%", ")") }, props.contentStyle) }, { children: props.children })) })));
}

exports["default"] = EvpModal;
