import { __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import AllParser from '../utils/props.parser.js';

var EvpBadge = function (props) {
    var $props = AllParser(props);
    var sizer = function () {
        var _a, _b;
        if (props.invisble) {
            return {
                width: 8,
                height: 8,
            };
        }
        switch (props.size) {
            case "sm":
                return {
                    minWidth: 16,
                    height: 16,
                    lineHeight: "16px",
                    fontSize: "8px",
                };
            case "md":
                return {
                    minWidth: 20,
                    height: 20,
                    lineHeight: "20px",
                    fontSize: "12px",
                };
            case "lg":
                return {
                    minWidth: 24,
                    height: 24,
                    lineHeight: "24px",
                    fontSize: "16px",
                };
            default:
                return {
                    minWidth: (_a = props.size) !== null && _a !== void 0 ? _a : 20,
                    height: (_b = props.size) !== null && _b !== void 0 ? _b : 20,
                    lineHeight: props.size ? "".concat(props.size, "px") : "20px",
                    fontSize: props.size ? "".concat(props.size, "px") : "12px",
                };
        }
    };
    return (jsxs("div", __assign({ className: classNames("evp evp-badge", props.class), id: props.id, style: $props.style }, $props.event, { children: [jsx("div", __assign({ className: classNames("evp-badge-dot", props.dotClass), style: __assign(__assign(__assign({ display: (function () {
                        if (props.content === 0 && props.showZero !== true) {
                            return "none";
                        }
                        return props.show === false ? "none" : "block";
                    })(), backgroundColor: "red" }, sizer()), { color: "#fff", borderRadius: "100px", padding: (function () {
                        var _a;
                        if (props.invisble) {
                            return "0px";
                        }
                        var len = String((_a = props.content) !== null && _a !== void 0 ? _a : "").length;
                        switch (len) {
                            case 0: {
                                return "0px";
                            }
                            case 1: {
                                return "0px";
                            }
                            case 2: {
                                return "0px 4px";
                            }
                            default: {
                                return "0px 8px";
                            }
                        }
                    })() }), props.dotStyle) }, { children: (function () {
                    var _a, _b;
                    if (props.invisble) {
                        return "";
                    }
                    if (typeof props.content === "number" && props.content >= ((_a = props.max) !== null && _a !== void 0 ? _a : 100)) {
                        return "".concat(((_b = props.max) !== null && _b !== void 0 ? _b : 100) - 1, "+");
                    }
                    return String(props.content);
                })() })), props.contentContainer === false ? (props.children) : (jsx("div", __assign({ className: classNames("evp-badge-children", props.childrenClass), style: props.childrenStyle }, { children: props.children })))] })));
};

export { EvpBadge as default };
