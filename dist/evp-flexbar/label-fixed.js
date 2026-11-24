'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var constant = require('../constant.js');

function EvpFlexbarLabelfixed(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var height = props.height
        ? typeof props.height === "number"
            ? "".concat(props.height, "px")
            : props.height
        : "40px";
    var labelPosition = (_a = props.labelPosition) !== null && _a !== void 0 ? _a : "right";
    var calcEvpCarrorFlexDirection = function () {
        var EvpFlexbarFlexDirection = "row";
        switch (labelPosition) {
            case "right": {
                EvpFlexbarFlexDirection = "row";
                break;
            }
            case "left": {
                EvpFlexbarFlexDirection = "row-reverse";
                break;
            }
            case "top": {
                EvpFlexbarFlexDirection = "column-reverse";
                break;
            }
            case "bottom": {
                EvpFlexbarFlexDirection = "column";
                break;
            }
        }
        return EvpFlexbarFlexDirection;
    };
    var $radius = props.labelRadius
        ? typeof props.labelRadius === "number"
            ? "".concat(props.labelRadius, "px")
            : props.labelRadius
        : "calc(".concat(height, " * 0.5)");
    var calcLabelRadius = function () {
        switch (labelPosition) {
            case "right":
                return "0 ".concat($radius, " ").concat($radius, " 0");
            case "left":
                return "".concat($radius, " 0 0 ").concat($radius);
            case "top":
                return "".concat($radius, " ").concat($radius, " 0 0");
            case "bottom":
                return "0 0 ".concat($radius, " ").concat($radius);
        }
    };
    var $gap = props.gap
        ? typeof props.gap === "number"
            ? "".concat(props.gap, "px")
            : props.gap
        : "8px";
    var calcMargin = function () {
        switch (labelPosition) {
            case "right":
                return "0 0 ".concat($gap, " 0");
            case "left":
                return "0 0 ".concat($gap, " 0");
            case "top":
                return "0 ".concat($gap, " 0 0");
            case "bottom":
                return "0 ".concat($gap, " 0 0");
        }
    };
    var borderStyle = "".concat((_c = (_b = props.border) === null || _b === void 0 ? void 0 : _b.width) !== null && _c !== void 0 ? _c : "1px", " ").concat((_e = (_d = props.border) === null || _d === void 0 ? void 0 : _d.color) !== null && _e !== void 0 ? _e : constant.Color.PaleGray, " ").concat((_g = (_f = props.border) === null || _f === void 0 ? void 0 : _f.lineStyle) !== null && _g !== void 0 ? _g : "solid");
    var _r = React.useState(false), expand = _r[0], setExpand = _r[1];
    var ref = React.useRef(null);
    var _s = React.useState(0), expandDistand = _s[0], setExd = _s[1];
    React.useEffect(function () {
        var _a, _b;
        if (["left", "right"].includes(labelPosition)) {
            setExd((_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth);
        }
        else {
            setExd((_b = ref.current) === null || _b === void 0 ? void 0 : _b.clientHeight);
        }
    }, [expand, labelPosition]);
    var flexTime = props.flexTime ? "".concat(props.flexTime, "s") : "0.3s";
    var flexMode = (_h = props.flexMode) !== null && _h !== void 0 ? _h : "ease-in-out";
    var trigger = (_j = props.trigger) !== null && _j !== void 0 ? _j : "click";
    var $hiddenOnBlur = (_k = props.hiddenOnBlur) !== null && _k !== void 0 ? _k : true;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp evp-flexbar-container", style: tslib.__assign({ height: height, width: height }, props.style) }, { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-flexbar ".concat((_l = props.class) !== null && _l !== void 0 ? _l : "").trim(), onMouseLeave: function () {
                trigger === "hover" ? setExpand(false) : void 0;
            }, onBlur: function () {
                $hiddenOnBlur ? setExpand(false) : void 0;
            }, tabIndex: -1, style: {
                flexDirection: calcEvpCarrorFlexDirection(),
                margin: calcMargin(),
                left: labelPosition === "left"
                    ? (expand ? -1 : 0) * expandDistand
                    : void 0,
                top: labelPosition === "top"
                    ? (expand ? -1 : 0) * expandDistand
                    : void 0,
                transition: "left ".concat(flexTime, " ").concat(flexMode, ", top ").concat(flexTime, " ").concat(flexMode),
            } }, { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp-flexbar-content-wrapper ".concat((_m = props.contentClass) !== null && _m !== void 0 ? _m : "").trim(), style: {
                        height: ["right", "left"].includes(labelPosition)
                            ? height
                            : expand
                                ? (_o = ref.current) === null || _o === void 0 ? void 0 : _o.clientHeight
                                : 0,
                        width: ["top", "bottom"].includes(labelPosition)
                            ? height
                            : expand
                                ? (_p = ref.current) === null || _p === void 0 ? void 0 : _p.clientWidth
                                : 0,
                        writingMode: ["right", "left"].includes(labelPosition)
                            ? "horizontal-tb"
                            : "vertical-lr",
                        border: "1px ".concat(constant.Color.PaleGray, " solid"),
                        borderTop: ["right", "left"].includes(labelPosition)
                            ? borderStyle
                            : labelPosition === "bottom"
                                ? expand
                                    ? borderStyle
                                    : "none"
                                : "none",
                        borderBottom: ["right", "left"].includes(labelPosition)
                            ? borderStyle
                            : labelPosition === "top"
                                ? expand
                                    ? borderStyle
                                    : "none"
                                : "none",
                        borderLeft: ["top", "bottom"].includes(labelPosition)
                            ? borderStyle
                            : labelPosition === "right"
                                ? expand
                                    ? borderStyle
                                    : "none"
                                : "none",
                        borderRight: ["top", "bottom"].includes(labelPosition)
                            ? borderStyle
                            : labelPosition === "left"
                                ? expand
                                    ? borderStyle
                                    : "none"
                                : "none",
                        transition: "width ".concat(flexTime, " ").concat(flexMode, ", height ").concat(flexTime, " ").concat(flexMode),
                        cursor: props.contentCurosr,
                    } }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "evp-flexbar-content", ref: ref, style: {
                            flexDirection: calcEvpCarrorFlexDirection(),
                        } }, { children: props.children })) })), jsxRuntime.jsx("div", tslib.__assign({ className: "evp-flexbar-label ".concat((_q = props.labelClass) !== null && _q !== void 0 ? _q : "").trim(), onClick: function () {
                        trigger === "click" ? setExpand(!expand) : void 0;
                    }, onMouseOver: function () {
                        trigger === "hover" ? setExpand(true) : void 0;
                    }, style: {
                        width: height,
                        height: height,
                        borderRadius: calcLabelRadius(),
                        border: borderStyle,
                    } }, { children: props.label }))] })) })));
}

exports["default"] = EvpFlexbarLabelfixed;
