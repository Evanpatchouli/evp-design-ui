import { __rest, __assign } from 'tslib';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import AllParser from '../utils/props.parser.js';
import classNames from 'classnames';
import EvpDialog from '../evp-dialog/index.js';
import EvpButton from '../evp-button/index.js';
import { useState } from 'react';
import ZoomIn from '../evp-icon/zoom-in.js';
import ZoomOut from '../evp-icon/zoom-out.js';
import DownImg from '../evp-icon/down-img.js';
import CopyLink from '../evp-icon/copy-link.js';
import EvpToast from '../evp-toast/index.js';
import EvpToolTip from '../evp-tooltip/index.js';
import ImgUtils from '../utils/img.utils.js';
import useHasOpened from '../utils/useHasOpened.js';

var EvpImg = function (_a) {
    var alt = _a.alt, className = _a.class, id = _a.id; _a.style; var preview = _a.preview, setPreview = _a.setPreview, loading = _a.loading, downLoadTooltipText = _a.downLoadTooltipText, copyTooltipText = _a.copyTooltipText, props = __rest(_a, ["alt", "class", "id", "style", "preview", "setPreview", "loading", "downLoadTooltipText", "copyTooltipText"]);
    var $props = AllParser(props);
    var _b = $props.style, display = _b.display, $style = __rest(_b, ["display"]);
    var scale = useState(100);
    var mountPreview = useHasOpened(preview);
    return (jsxs("div", __assign({ style: { display: display }, className: "evp evp-img-wrapper" }, { children: [jsx("img", __assign({ alt: alt, loading: loading, hidden: $props.hidden, className: classNames("evp", "evp-img", className), id: id }, $props.event, { style: __assign({}, $style) }, props)), mountPreview && jsx(EvpDialog, __assign({ open: preview, setOpen: setPreview, class: "evp-img-preview-container", contentClass: "evp-img-preview-content", footerProps: {
                    justifyContent: "center",
                    alignItems: "center",
                    class: "evp-img-preview-footer",
                }, footer: jsxs(Fragment, { children: [jsx(EvpToolTip, __assign({ content: downLoadTooltipText !== null && downLoadTooltipText !== void 0 ? downLoadTooltipText : "Download" }, { children: jsx(EvpButton, __assign({ theme: "text", "$click": function () {
                                    var _a, _b;
                                    ImgUtils.downloadImage((_a = props.src) !== null && _a !== void 0 ? _a : "", (_b = props.alt) !== null && _b !== void 0 ? _b : "");
                                } }, { children: jsx(DownImg, {}) })) })), jsx(EvpButton, __assign({ theme: "text", "$click": function () {
                                scale[1](scale[0] - 5);
                            } }, { children: jsx(ZoomOut, {}) })), jsxs("div", { children: [scale[0], " %"] }), jsx(EvpButton, __assign({ theme: "text", "$click": function () {
                                scale[1](scale[0] + 5);
                            } }, { children: jsx(ZoomIn, {}) })), jsx(EvpToolTip, __assign({ content: copyTooltipText !== null && copyTooltipText !== void 0 ? copyTooltipText : "Copy URL" }, { children: jsx(EvpButton, __assign({ theme: "text", "$click": function () {
                                    var _a;
                                    navigator.clipboard
                                        .writeText((_a = props.src) !== null && _a !== void 0 ? _a : "")
                                        .then(function () {
                                        EvpToast.success("copy success");
                                    })
                                        .catch(function (err) {
                                        console.error(err);
                                        EvpToast.error("copy failed");
                                    });
                                } }, { children: jsx(CopyLink, {}) })) }))] }) }, { children: jsx("img", { alt: alt, src: props.src, className: classNames("evp", "evp-img-preview"), style: {
                        height: "".concat(scale[0], "%"),
                    } }) }))] })));
};

export { EvpImg as default };
