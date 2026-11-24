import { __assign, __rest } from 'tslib';
import { jsx, Fragment } from 'react/jsx-runtime';
import Close from '../evp-icon/close.js';
import EvpCardV2 from '../evp-card/index.v2.js';
import EvpModal from '../evp-modal/index.js';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';

function cardProps(params) {
    params.open; params.setOpen; params.onClose; params.onOpen; params.modal; params.position; params.header; params.headerProps; params.blur; var rest = __rest(params, ["open", "setOpen", "onClose", "onOpen", "modal", "position", "header", "headerProps", "blur"]);
    return rest;
}
function EvpDrawer(props) {
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
    return (jsx(EvpModal, __assign({ open: true, modalClass: classNames("evp-drawer-modal", props.modal === false ? "without" : "", open ? "open" : "close"), contentClass: classNames("evp-drawer-container", (_a = props.position) !== null && _a !== void 0 ? _a : "left", open ? "open" : "close"), blur: props.blur }, { children: jsx(EvpCardV2, __assign({ h: "100%", w: "100%", headerProps: (_b = props.headerProps) !== null && _b !== void 0 ? _b : {
                justifyContent: "flex-end",
            }, header: (_c = props.header) !== null && _c !== void 0 ? _c : (jsx(Fragment, { children: jsx(Close, { class: "evp-dialog-close-btn", onClick: function () {
                        var _a;
                        (_a = props === null || props === void 0 ? void 0 : props.setOpen) === null || _a === void 0 ? void 0 : _a.call(props, false);
                    } }) })) }, cardProps(props), { children: props.children })) })));
}

export { EvpDrawer as default };
