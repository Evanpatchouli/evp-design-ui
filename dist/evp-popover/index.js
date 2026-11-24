'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../evp-dom/index.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpPopover(props) {
    var _a, _b, _c;
    var _d = React.useState(false), show = _d[0], setShow = _d[1];
    var _e = React.useState("none"), display = _e[0], setDisplay = _e[1];
    var _f = React.useState(), undisCounter = _f[0], setUndisCounter = _f[1];
    var $trigger = (_a = props.trigger) !== null && _a !== void 0 ? _a : "click";
    var $hiddenOnBlur = (_b = props.hiddenOnBlur) !== null && _b !== void 0 ? _b : true;
    var childRef = React.useRef(null);
    var left = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (["topLeft", "bottomLeft"].includes((_a = props.position) !== null && _a !== void 0 ? _a : "top")) {
            return ((_c = (_b = childRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth) !== null && _c !== void 0 ? _c : 0) * 0.2;
        }
        else if (["left", "leftTop", "leftBottom", "upperLeftCorner", "lowerLeftCorner"].includes((_d = props.position) !== null && _d !== void 0 ? _d : "top")) {
            return 0;
        }
        else if (["topRight", "bottomRight"].includes((_e = props.position) !== null && _e !== void 0 ? _e : "top")) {
            return ((_g = (_f = childRef.current) === null || _f === void 0 ? void 0 : _f.clientWidth) !== null && _g !== void 0 ? _g : 0) * 0.8;
        }
        else if (["right", "rightTop", "rightBottom", "upperRightCorner", "lowerRightCorner"].includes((_h = props.position) !== null && _h !== void 0 ? _h : "top")) {
            return (_k = (_j = childRef.current) === null || _j === void 0 ? void 0 : _j.clientWidth) !== null && _k !== void 0 ? _k : 0;
        }
        else if (["top", "bottom"].includes((_l = props.position) !== null && _l !== void 0 ? _l : "top")) {
            return ((_o = (_m = childRef.current) === null || _m === void 0 ? void 0 : _m.clientWidth) !== null && _o !== void 0 ? _o : 0) * 0.5;
        }
    };
    var top = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (["top", "topLeft", "topRight", "upperLeftCorner", "upperRightCorner"].includes((_a = props.position) !== null && _a !== void 0 ? _a : "top")) {
            return 0;
        }
        else if (["leftTop", "rightTop"].includes((_b = props.position) !== null && _b !== void 0 ? _b : "top")) {
            return ((_d = (_c = childRef.current) === null || _c === void 0 ? void 0 : _c.clientHeight) !== null && _d !== void 0 ? _d : 0) * 0.2;
        }
        else if (["left", "right"].includes((_e = props.position) !== null && _e !== void 0 ? _e : "top")) {
            return ((_g = (_f = childRef.current) === null || _f === void 0 ? void 0 : _f.clientHeight) !== null && _g !== void 0 ? _g : 0) * 0.5;
        }
        else if (["leftBottom", "rightBottom"].includes((_h = props.position) !== null && _h !== void 0 ? _h : "top")) {
            return ((_k = (_j = childRef.current) === null || _j === void 0 ? void 0 : _j.clientHeight) !== null && _k !== void 0 ? _k : 0) * 0.8;
        }
        else if (["bottom", "bottomLeft", "bottomRight", "lowerLeftCorner", "lowerRightCorner"].includes((_l = props.position) !== null && _l !== void 0 ? _l : "top")) {
            return (_o = (_m = childRef.current) === null || _m === void 0 ? void 0 : _m.clientHeight) !== null && _o !== void 0 ? _o : 0;
        }
    };
    React.useEffect(function () {
        if (show) {
            setDisplay(undefined);
            clearTimeout(undisCounter);
            setUndisCounter(undefined);
        }
        else {
            var counter = setTimeout(function () {
                setDisplay("none");
            }, 200);
            setUndisCounter(counter);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);
    return (jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-popover-container" }, { children: [jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-popover ".concat((_c = props.class) !== null && _c !== void 0 ? _c : "", " ").concat(show ? "" : "evp-popover__hidden").trim(), id: props.id, style: { display: display, left: left(), top: top() } }, { children: [jsxRuntime.jsx(index["default"], tslib.__assign({}, {
                        props: props,
                        class: classNames__default["default"]("evp-popover-content", props.contentClass),
                    }, { style: props.contentStyle }, { children: props.content })), jsxRuntime.jsx("svg", tslib.__assign({ className: "evp-popover-arrow", width: 16, height: 10, viewBox: "0 0 16 10" }, { children: jsxRuntime.jsx("polygon", { points: "0,0 16,0 8,10", fill: "#ffffff" }) }))] })), jsxRuntime.jsx("div", tslib.__assign({ onClick: function () { return ($trigger === "click" ? setShow(!show) : void 0); }, onMouseOver: function () { return ($trigger === "hover" ? setShow(true) : void 0); }, onMouseLeave: function () { return ($trigger === "hover" ? setShow(false) : void 0); }, onBlur: function () { return ($hiddenOnBlur === true ? setShow(false) : void 0); } }, { children: jsxRuntime.jsx("div", tslib.__assign({ ref: childRef }, { children: props.children })) }))] })));
}

exports["default"] = EvpPopover;
