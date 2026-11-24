'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$1 = require('../evp-button/index.js');
var props_parser = require('../utils/props.parser.js');
var index = require('../evp-dom/index.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var classNames__default = /*#__PURE__*/_interopDefault(classNames);

var EvpSteps = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    var didMounted = React__default["default"].useRef(false);
    var setStep = props.setStep;
    var _z = React__default["default"].useState((_a = props.defaultStep) !== null && _a !== void 0 ? _a : 1), _step = _z[0], _setStep = _z[1];
    function step() {
        var _a;
        return (_a = props.step) !== null && _a !== void 0 ? _a : _step;
    }
    React__default["default"].useEffect(function () {
        var _a;
        if (didMounted.current) {
            (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, step());
        }
        else {
            didMounted.current = true;
        }
    }, [step]);
    var $props = props_parser["default"](props);
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ class: classNames__default["default"]("evp", "evp-steps", $props.class), id: $props.id, style: tslib.__assign(tslib.__assign({}, $props.style), { height: typeof props.h === "number" ? "".concat(props.h, "px") : (_b = props.h) !== null && _b !== void 0 ? _b : "100%" }), loading: $props.loading }, $props.event, { hidden: $props.hidden }, { children: [props.header ? (props.header(tslib.__assign({}, ((_d = (_c = props.steps) === null || _c === void 0 ? void 0 : _c[step() - 1]) !== null && _d !== void 0 ? _d : {})), (_f = (_e = props.steps) === null || _e === void 0 ? void 0 : _e.findIndex(function (item) { var _a; return item === ((_a = props.steps) === null || _a === void 0 ? void 0 : _a[step() - 1]); })) !== null && _f !== void 0 ? _f : -1, (_g = props.steps) !== null && _g !== void 0 ? _g : [])) : (jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-steps-header" }, { children: [jsxRuntime.jsx("span", tslib.__assign({ className: "evp-steps-header-title" }, { children: (_j = (_h = props.steps) === null || _h === void 0 ? void 0 : _h[step() - 1]) === null || _j === void 0 ? void 0 : _j.title })), jsxRuntime.jsx("span", tslib.__assign({ className: "evp-steps-header-desc" }, { children: (_l = (_k = props.steps) === null || _k === void 0 ? void 0 : _k[step() - 1]) === null || _l === void 0 ? void 0 : _l.desc }))] }))), jsxRuntime.jsx("div", tslib.__assign({}, props.windowProps, { className: classNames__default["default"]("evp-steps-window", (_m = props.windowProps) === null || _m === void 0 ? void 0 : _m.className), style: tslib.__assign({ 
                    // @ts-ignore
                    "--windowWidth": typeof props.windowWidth === "number" ? "".concat(props.windowWidth, "px") : (_o = props.windowWidth) !== null && _o !== void 0 ? _o : "400px", height: typeof props.windowHeight === "number" ? "".concat(props.windowHeight, "px") : (_p = props.windowHeight) !== null && _p !== void 0 ? _p : "100%" }, (_q = props.windowProps) === null || _q === void 0 ? void 0 : _q.style) }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "evp-steps-list", style: {
                        width: "".concat(100 * ((_s = (_r = props.steps) === null || _r === void 0 ? void 0 : _r.length) !== null && _s !== void 0 ? _s : 1), "%"),
                        left: "".concat((step() - 1) * -100, "%"),
                    } }, { children: (_t = props.steps) === null || _t === void 0 ? void 0 : _t.map(function (item) {
                        return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "evp-steps-item" }, { children: item.content })) }));
                    }) })) })), jsxRuntime.jsxs("div", tslib.__assign({ className: "evp-steps-btns" }, { children: [props.hideLastAtStepOne === true && step() === 1 ? (void 0) : (jsxRuntime.jsx(index$1["default"], tslib.__assign({ theme: "white", "$click": function () {
                            var _a;
                            if (step() === 1)
                                return;
                            _setStep(step() - 1);
                            setStep === null || setStep === void 0 ? void 0 : setStep(step() - 1);
                            (_a = props.onLast) === null || _a === void 0 ? void 0 : _a.call(props);
                        }, class: classNames__default["default"]({ "evp-disabled": step() === 1 }), mgr_8: true }, props.lastProps, { children: "Last Step" }))), props.hideNextAtLastStep !== false && step() === ((_v = (_u = props.steps) === null || _u === void 0 ? void 0 : _u.length) !== null && _v !== void 0 ? _v : 1) ? (void 0) : (jsxRuntime.jsx(index$1["default"], tslib.__assign({ "$click": function () {
                            var _a, _b, _c;
                            if (step() === ((_b = (_a = props.steps) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0))
                                return;
                            _setStep(step() + 1);
                            setStep === null || setStep === void 0 ? void 0 : setStep(step() + 1);
                            (_c = props.onNext) === null || _c === void 0 ? void 0 : _c.call(props);
                        }, class: classNames__default["default"]({ "evp-disabled": (_x = step() === ((_w = props.steps) === null || _w === void 0 ? void 0 : _w.length)) !== null && _x !== void 0 ? _x : 1 }), mgr_8: true }, props.nextProps, { children: "Next Step" }))), step() === ((_y = props.steps) === null || _y === void 0 ? void 0 : _y.length) ? (jsxRuntime.jsx(index$1["default"], tslib.__assign({ mgr_8: true, "$click": function () {
                            var _a;
                            (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props);
                        } }, props.confirmProps, { children: "Confirm" }))) : (void 0)] }))] })));
};

exports["default"] = EvpSteps;
