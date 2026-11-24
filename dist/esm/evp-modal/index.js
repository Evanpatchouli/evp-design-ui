import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';

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
    var didMountRef = useRef(false);
    useEffect(function () {
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
    return (jsx("div", __assign({ className: classNames("evp", "evp-modal", props.modalClass), hidden: !props.open, style: __assign({ backgroundColor: "rgba(0, 0, 0, ".concat((_a = props.alpha) !== null && _a !== void 0 ? _a : "0.5", ")"), backdropFilter: blurParser(props.blur), WebkitBackdropFilter: blurParser(props.blur) }, props.modalStyle), onTouchStart: function (e) {
            if (!props.scrollable) {
                e.preventDefault();
                e.stopPropagation();
            }
        } }, { children: jsx("div", __assign({ className: classNames("evp-modal__content", props.contentClass), style: __assign({ left: props.x, top: props.y, transform: "translate(".concat((_b = props.translateX) !== null && _b !== void 0 ? _b : "-50%", ", ").concat((_c = props.translateY) !== null && _c !== void 0 ? _c : "-50%", ")") }, props.contentStyle) }, { children: props.children })) })));
}

export { EvpModal as default };
