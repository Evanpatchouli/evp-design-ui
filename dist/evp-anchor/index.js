'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var cloneDeep = require('lodash/cloneDeep.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefault(cloneDeep);

function purifyProps(props) {
    var $props = cloneDeep__default["default"](props);
    // @ts-ignore
    delete $props.id;
    delete $props.class;
    delete $props.children;
    delete $props.hash;
    delete $props.block;
    delete $props.inline;
    if (!$props.hash) {
        delete $props.onClick;
    }
    var _$props = $props;
    return _$props;
}
/**
 * Wrap some elements to jump to an anchor while clicked
 */
function EvpAnchor(props) {
    var _a, _b;
    var scrollTo = function (id) {
        var _a, _b, _c, _d;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            // @ts-ignore
            behavior: (_b = props.behavior) !== null && _b !== void 0 ? _b : "smooth",
            block: (_c = props.block) !== null && _c !== void 0 ? _c : "start",
            inline: (_d = props.inline) !== null && _d !== void 0 ? _d : "nearest",
        });
    };
    var $props = purifyProps(props);
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: props.hash === true ? (jsxRuntime.jsx("a", tslib.__assign({ href: "#".concat(props.id), className: "evp-anchor-a ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim() }, $props, { children: props.children }))) : (jsxRuntime.jsx("div", tslib.__assign({ className: "evp-anchor-div ".concat((_b = props.class) !== null && _b !== void 0 ? _b : "").trim(), onClick: function (e) {
                var _a;
                scrollTo(props.id);
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            } }, $props, { children: props.children }))) }));
}

exports["default"] = EvpAnchor;
