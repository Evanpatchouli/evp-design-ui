import { __rest, __assign } from 'tslib';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpModal from '../evp-modal/index.js';
import React from 'react';
import EvpCardV2 from '../evp-card/index.v2.js';
import EvpButton from '../evp-button/index.js';
import Close from '../evp-icon/close.js';

function EvpDialog(props) {
    var _a;
    props.open; var setOpen = props.setOpen, onClose = props.onClose, onOpen = props.onOpen, className = props.class, blur = props.blur, rest = __rest(props, ["open", "setOpen", "onClose", "onOpen", "class", "blur"]);
    var _b = React.useState((_a = props.defaultOpen) !== null && _a !== void 0 ? _a : false), _open = _b[0], _setOpen = _b[1];
    return (jsx(EvpModal, __assign({ open: props.open !== undefined ? props.open : _open, onClose: onClose, onOpen: onOpen, blur: blur }, { children: jsx(EvpCardV2, __assign({ class: classNames("evp", "evp-dialog", className), w: 400, h: 200, headerProps: {
                justifyContent: "flex-end",
            }, header: jsx(Fragment, { children: jsx(Close, { class: "evp-dialog-close-btn", onClick: function () {
                        setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                        _setOpen(false);
                    } }) }), footerProps: {
                justifyContent: "flex-end",
            }, footer: jsxs(Fragment, { children: [jsx(EvpButton, __assign({ theme: "white", mgr_8: true, text: "cancel", "$click": function () {
                            setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                            _setOpen(false);
                        } }, props.cancelProps)), jsx(EvpButton, __assign({ text: "confirm", "$click": function () {
                            setOpen === null || setOpen === void 0 ? void 0 : setOpen(false);
                            _setOpen(false);
                        } }, props.confirmProps))] }) }, rest)) })));
}

export { EvpDialog as default };
