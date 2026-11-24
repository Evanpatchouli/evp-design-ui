'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var constant = require('../constant.js');

function EvpDivider(props) {
    var _a, _b, _c, _d, _e;
    var type = props.type ? props.type : 'dashed';
    var lineWidth = props.lineWidth ? typeof props.lineWidth !== 'number' ? props.lineWidth : "".concat(props.lineWidth, "px") : '1px';
    var width = props.width ? typeof props.width !== 'number' ? props.width : "".concat(props.width, "px") : '100%';
    var color = (_a = props.color) !== null && _a !== void 0 ? _a : constant.Color.ShallowGray;
    var gap = props.gap ? typeof props.gap !== 'number' ? props.gap : "".concat(props.gap, "px") : '0px';
    var top = props.top ? typeof props.top !== 'number' ? props.top : "".concat(props.top, "px") : '0px';
    var bottom = props.bottom ? typeof props.bottom !== 'number' ? props.bottom : "".concat(props.bottom, "px") : '0px';
    var left = props.left ? typeof props.left !== 'number' ? props.left : "".concat(props.left, "px") : '0px';
    var right = props.right ? typeof props.right !== 'number' ? props.right : "".concat(props.right, "px") : '0px';
    var radius = props.radius ? typeof props.radius !== 'number' ? props.radius === 'round' ? "calc(".concat(lineWidth, " * 0.5)") : 'none' : "".concat(props.radius, "px") : void 0;
    var ref = React.useRef(null);
    var calcWidth = function () { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth; };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: !props.children ?
            jsxRuntime.jsx("div", tslib.__assign({ className: "evp evp-divider ".concat((_b = props.class) !== null && _b !== void 0 ? _b : '').trim(), ref: ref, style: tslib.__assign({ width: width, paddingTop: top, paddingBottom: bottom }, props.style) }, { children: jsxRuntime.jsx("div", { style: {
                        borderTop: "".concat(lineWidth, " ").concat(type, " ").concat(color),
                        borderRadius: radius,
                        width: "calc(".concat(calcWidth(), "px - ").concat(left, " - ").concat(right, " - ").concat(gap, " * 2)"),
                        marginLeft: "calc(".concat(left, " + ").concat(gap, ")"),
                        marginRight: "calc(".concat(right, " + ").concat(gap, ")"),
                    } }) }))
            :
                jsxRuntime.jsx("div", tslib.__assign({ className: "evp evp-divider with-text ".concat((_c = props.class) !== null && _c !== void 0 ? _c : '').trim(), style: tslib.__assign({ width: "calc(".concat(width, " - ").concat(left, " - ").concat(right, " - ").concat(gap, " * 2)"), display: 'flex', alignItems: 'center', paddingInline: props.gap ? typeof props.gap === 'string' ? props.gap : "".concat(props.gap, "px") : '0px', paddingTop: top, paddingBottom: bottom, paddingLeft: "calc(".concat(left, " + ").concat(gap, ")"), paddingRight: "calc(".concat(right, " + ").concat(gap, ")"), fontSize: props.fontSize ? typeof props.fontSize !== 'number' ? props.fontSize : "".concat(props.fontSize, "px") : '14px', color: (_d = props.fontColor) !== null && _d !== void 0 ? _d : color, 
                        // @ts-ignore
                        '--color': color, '--line-width': lineWidth, '--type': type, '--border-radius': radius }, props.style) }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "evp-divider-content ".concat((_e = props.contentClass) !== null && _e !== void 0 ? _e : '').trim(), style: {
                            marginInline: props.contentGap ? typeof props.contentGap === 'string' ? props.contentGap : "".concat(props.contentGap, "px") : '8px',
                            // @ts-ignore
                            '--content-item-gap': props.contentItemGap ? typeof props.contentItemGap === 'string' ? props.contentItemGap : "".concat(props.contentItemGap, "px") : '0px',
                        } }, { children: props.children })) })) }));
}

exports["default"] = EvpDivider;
