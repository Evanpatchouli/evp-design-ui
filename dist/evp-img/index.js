'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');
var classNames = require('classnames');
var index = require('../evp-dialog/index.js');
var index$2 = require('../evp-button/index.js');
var React = require('react');
var zoomIn = require('../evp-icon/zoom-in.js');
var zoomOut = require('../evp-icon/zoom-out.js');
var downImg = require('../evp-icon/down-img.js');
var copyLink = require('../evp-icon/copy-link.js');
var index$3 = require('../evp-toast/index.js');
var index$1 = require('../evp-tooltip/index.js');
var img_utils = require('../utils/img.utils.js');
var useHasOpened = require('../utils/useHasOpened.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpImg = function (_a) {
    var alt = _a.alt, className = _a.class, id = _a.id; _a.style; var preview = _a.preview, setPreview = _a.setPreview, loading = _a.loading, downLoadTooltipText = _a.downLoadTooltipText, copyTooltipText = _a.copyTooltipText, props = tslib.__rest(_a, ["alt", "class", "id", "style", "preview", "setPreview", "loading", "downLoadTooltipText", "copyTooltipText"]);
    var $props = props_parser["default"](props);
    var _b = $props.style, display = _b.display, $style = tslib.__rest(_b, ["display"]);
    var scale = React.useState(100);
    var mountPreview = useHasOpened["default"](preview);
    return (jsxRuntime.jsxs("div", tslib.__assign({ style: { display: display }, className: "evp evp-img-wrapper" }, { children: [jsxRuntime.jsx("img", tslib.__assign({ alt: alt, loading: loading, hidden: $props.hidden, className: classNames__default["default"]("evp", "evp-img", className), id: id }, $props.event, { style: tslib.__assign({}, $style) }, props)), mountPreview && jsxRuntime.jsx(index["default"], tslib.__assign({ open: preview, setOpen: setPreview, class: "evp-img-preview-container", contentClass: "evp-img-preview-content", footerProps: {
                    justifyContent: "center",
                    alignItems: "center",
                    class: "evp-img-preview-footer",
                }, footer: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index$1["default"], tslib.__assign({ content: downLoadTooltipText !== null && downLoadTooltipText !== void 0 ? downLoadTooltipText : "Download" }, { children: jsxRuntime.jsx(index$2["default"], tslib.__assign({ theme: "text", "$click": function () {
                                    var _a, _b;
                                    img_utils["default"].downloadImage((_a = props.src) !== null && _a !== void 0 ? _a : "", (_b = props.alt) !== null && _b !== void 0 ? _b : "");
                                } }, { children: jsxRuntime.jsx(downImg["default"], {}) })) })), jsxRuntime.jsx(index$2["default"], tslib.__assign({ theme: "text", "$click": function () {
                                scale[1](scale[0] - 5);
                            } }, { children: jsxRuntime.jsx(zoomOut["default"], {}) })), jsxRuntime.jsxs("div", { children: [scale[0], " %"] }), jsxRuntime.jsx(index$2["default"], tslib.__assign({ theme: "text", "$click": function () {
                                scale[1](scale[0] + 5);
                            } }, { children: jsxRuntime.jsx(zoomIn["default"], {}) })), jsxRuntime.jsx(index$1["default"], tslib.__assign({ content: copyTooltipText !== null && copyTooltipText !== void 0 ? copyTooltipText : "Copy URL" }, { children: jsxRuntime.jsx(index$2["default"], tslib.__assign({ theme: "text", "$click": function () {
                                    var _a;
                                    navigator.clipboard
                                        .writeText((_a = props.src) !== null && _a !== void 0 ? _a : "")
                                        .then(function () {
                                        index$3["default"].success("copy success");
                                    })
                                        .catch(function (err) {
                                        console.error(err);
                                        index$3["default"].error("copy failed");
                                    });
                                } }, { children: jsxRuntime.jsx(copyLink["default"], {}) })) }))] }) }, { children: jsxRuntime.jsx("img", { alt: alt, src: props.src, className: classNames__default["default"]("evp", "evp-img-preview"), style: {
                        height: "".concat(scale[0], "%"),
                    } }) }))] })));
};

exports["default"] = EvpImg;
