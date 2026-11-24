import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import EvpDialog from '../evp-dialog/index.js';
import { useRef, useEffect } from 'react';
import { clearAlert } from './render.js';
import classNames from 'classnames';

var Alert = function (_a) {
    var content = _a.content, onClose = _a.onClose, onOpen = _a.onOpen, classname = _a.class, props = __rest(_a, ["content", "onClose", "onOpen", "class"]);
    var divRef = useRef(null);
    useEffect(function () {
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
    return (jsx("div", __assign({ onWheel: function (e) {
            e.preventDefault();
        }, onTouchMove: function (e) {
            e.preventDefault();
        }, onTouchStart: function (e) {
            e.preventDefault();
        }, ref: divRef }, { children: jsx(EvpDialog, __assign({ defaultOpen: true, onClose: function () {
                onClose === null || onClose === void 0 ? void 0 : onClose();
                clearAlert();
            }, class: classNames(classname, "evp-alert") }, props, { children: content })) })));
};

export { Alert as default };
