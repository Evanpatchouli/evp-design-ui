'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var left = require('../evp-icon/left.js');
var index = require('../evp-button/index.js');
var React = require('react');
var right = require('../evp-icon/right.js');
var state_store = require('./state.store.js');
var state_action = require('./state.action.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var purifyProps = function (props) {
    props.className; props.style; props.items; props.children; props.showBtns; props.onClickLeft; props.onClickRight; props.onClickItem; props.showScroll; props.adjacentTabScaled; var rest = tslib.__rest(props, ["className", "style", "items", "children", "showBtns", "onClickLeft", "onClickRight", "onClickItem", "showScroll", "adjacentTabScaled"]);
    return rest;
};
// I want to make a component like a carousel
var EvpSlides = function (props) {
    var _a, _b, _c, _d, _e, _f;
    var items = React__default["default"].Children.toArray((_b = (_a = props.children) !== null && _a !== void 0 ? _a : props.items) !== null && _b !== void 0 ? _b : []);
    var evpSlidesRef = React.useRef(null);
    var _g = React.useReducer(function (state, action) {
        var _a;
        var newState = (_a = state_action["default"].find(function (a) { return a.type === action.type; })) === null || _a === void 0 ? void 0 : _a.handler(state, action);
        return newState !== null && newState !== void 0 ? newState : state;
    }, state_store.initialState), state = _g[0], dispatch = _g[1];
    React.useEffect(function () {
        dispatch({
            type: "READ_EFFECT",
            payload: function (state) {
                var _a, _b, _c;
                var slides = ((_b = (_a = evpSlidesRef.current) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []);
                var nextItemPosition = (_c = slides === null || slides === void 0 ? void 0 : slides[state.current]) === null || _c === void 0 ? void 0 : _c.offsetLeft;
                evpSlidesRef.current.scrollLeft = nextItemPosition;
            },
        });
    }, [state]);
    var scrollToNextItem = function () {
        var _a;
        dispatch({
            type: "CURRENT_PLUS",
            payload: {
                max: ((_a = items.length) !== null && _a !== void 0 ? _a : 0) - 1,
            },
        });
    };
    var scrollToLastItem = function () {
        dispatch({
            type: "CURRENT_MINUS",
        });
    };
    return (jsxRuntime.jsxs("div", tslib.__assign({ ref: evpSlidesRef, className: classNames__default["default"]("evp-slides", props.className), style: tslib.__assign({ 
            // @ts-ignore
            "--showScroll": props.showScroll !== true ? "none" : "block" }, props.style) }, purifyProps(props), { children: [items.map(function (item) { return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-slides-item" }, { children: item }))); }), props.showBtns !== false ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(index["default"], tslib.__assign({ "$click": scrollToLastItem, shape: "circle", theme: "white", class: "evp-slides__left" }, { children: jsxRuntime.jsx(left["default"], {}) })), jsxRuntime.jsx(index["default"], tslib.__assign({ "$click": scrollToNextItem, shape: "circle", theme: "white", class: "evp-slides__right" }, { children: jsxRuntime.jsx(right["default"], {}) }))] })) : (void 0), props.showTabSpots !== false ? (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-slides__tab-spots", style: {
                    // @ts-ignore
                    "--tabSpotColor": (_c = props.tabSpotColor) === null || _c === void 0 ? void 0 : _c.default,
                    // @ts-ignore
                    "--tabSpotColorHover": (_d = props.tabSpotColor) === null || _d === void 0 ? void 0 : _d.hover,
                    // @ts-ignore
                    "--tabSpotColorClick": (_e = props.tabSpotColor) === null || _e === void 0 ? void 0 : _e.click,
                    // @ts-ignore
                    "--tabSpotColorActive": (_f = props.tabSpotColor) === null || _f === void 0 ? void 0 : _f.active,
                } }, { children: items.map(function (_, index) { return (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp-slides__tab-spot-box", {
                        "evp-slides__tab-spot-box--active": index === state.current,
                        "evp-slides__tab-spot--active-box-next": props.adjacentTabScaled
                            ? index === state.current + 1 || index === state.current - 1
                            : false,
                    }), onClick: function () {
                        var _a;
                        dispatch({
                            type: "SET_CURRENT",
                            payload: index,
                        });
                        (_a = props.onClickItem) === null || _a === void 0 ? void 0 : _a.call(props, index);
                    } }, { children: jsxRuntime.jsx("div", { className: classNames__default["default"]("evp-slides__tab-spot", {
                            "evp-slides__tab-spot--active": index === state.current,
                            "evp-slides__tab-spot--active-next": props.adjacentTabScaled
                                ? index === state.current + 1 || index === state.current - 1
                                : false,
                        }) }) }))); }) }))) : (void 0)] })));
};

exports["default"] = EvpSlides;
