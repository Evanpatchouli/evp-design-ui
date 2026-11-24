import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import EvpDom from '../evp-dom/index.js';
import classNames from 'classnames';

var EvpFrostedGlass = function (props) {
    var className = props.class, radius = props.radius, border = props.border, borderWidth = props.borderWidth, borderStyle = props.borderStyle, borderColor = props.borderColor, background = props.background, filterAlpha = props.filterAlpha, filterBackGround = props.filterBackGround, filterBlur = props.filterBlur, style = props.style, children = props.children, rest = __rest(props, ["class", "radius", "border", "borderWidth", "borderStyle", "borderColor", "background", "filterAlpha", "filterBackGround", "filterBlur", "style", "children"]);
    return (jsxs(EvpDom, __assign({ className: classNames("evp", "evp-frosted-glass__background", className), style: __assign({ background: background, position: "relative" }, style) }, rest, { children: [children, jsx("div", { style: {
                    background: filterBackGround !== null && filterBackGround !== void 0 ? filterBackGround : "rgba(255, 255, 255, ".concat(filterAlpha !== null && filterAlpha !== void 0 ? filterAlpha : "0.1", ")"),
                    backdropFilter: "blur(".concat(filterBlur !== null && filterBlur !== void 0 ? filterBlur : 10, "px)"),
                    WebkitBackdropFilter: "blur(".concat(radius !== null && radius !== void 0 ? radius : 0, "px)"),
                    borderRadius: "".concat(radius !== null && radius !== void 0 ? radius : 0, "px"),
                    border: border !== null && border !== void 0 ? border : "1px solid rgba(255, 255, 255, 0.2)",
                    borderStyle: borderStyle !== null && borderStyle !== void 0 ? borderStyle : "solid",
                    borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 1,
                    borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : "rgba(255, 255, 255, 0.2)",
                    position: "absolute",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    zIndex: "-1",
                } })] })));
};

export { EvpFrostedGlass as default };
