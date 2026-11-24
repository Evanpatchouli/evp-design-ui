'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index = require('../evp-col/index.js');
var index$1 = require('../evp-row/index.js');
var index$2 = require('../evp-icon/index.js');
var constant = require('../constant.js');
var props_parser = require('../utils/props.parser.js');
var route = require('../utils/route.js');
var context = require('./context.js');
var nanoid = require('nanoid');
var hooks = require('./hooks.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function flatItemColor(itemColor) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    return {
        "--menuitem-color-unselected-bg": (_b = (_a = itemColor === null || itemColor === void 0 ? void 0 : itemColor.unselected) === null || _a === void 0 ? void 0 : _a.bg) !== null && _b !== void 0 ? _b : constant.Color.White,
        "--menuitem-color-unselected-text": (_d = (_c = itemColor === null || itemColor === void 0 ? void 0 : itemColor.unselected) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : constant.Color.Black,
        "--menuitem-color-selected-bg": (_f = (_e = itemColor === null || itemColor === void 0 ? void 0 : itemColor.selected) === null || _e === void 0 ? void 0 : _e.bg) !== null && _f !== void 0 ? _f : constant.Color.LightBlue,
        "--menuitem-color-selected-text": (_h = (_g = itemColor === null || itemColor === void 0 ? void 0 : itemColor.selected) === null || _g === void 0 ? void 0 : _g.text) !== null && _h !== void 0 ? _h : constant.Color.White,
        "--menuitem-color-hover-bg": (_k = (_j = itemColor === null || itemColor === void 0 ? void 0 : itemColor.hover) === null || _j === void 0 ? void 0 : _j.bg) !== null && _k !== void 0 ? _k : constant.Color.ReallyPaleBlue,
        "--menuitem-color-hover-text": (_m = (_l = itemColor === null || itemColor === void 0 ? void 0 : itemColor.hover) === null || _l === void 0 ? void 0 : _l.text) !== null && _m !== void 0 ? _m : constant.Color.Black,
        "--menuitem-color-selected-hover-bg": (_p = (_o = itemColor === null || itemColor === void 0 ? void 0 : itemColor.selectedHover) === null || _o === void 0 ? void 0 : _o.bg) !== null && _p !== void 0 ? _p : constant.Color.ShallowBlue,
        "--menuitem-color-selected-hover-text": (_t = (_r = (_q = itemColor === null || itemColor === void 0 ? void 0 : itemColor.selectedHover) === null || _q === void 0 ? void 0 : _q.text) !== null && _r !== void 0 ? _r : (_s = itemColor === null || itemColor === void 0 ? void 0 : itemColor.selected) === null || _s === void 0 ? void 0 : _s.text) !== null && _t !== void 0 ? _t : constant.Color.White,
        "--menuitem-color-click-bg": (_v = (_u = itemColor === null || itemColor === void 0 ? void 0 : itemColor.click) === null || _u === void 0 ? void 0 : _u.bg) !== null && _v !== void 0 ? _v : constant.Color.LightBlue,
        "--menuitem-color-click-text": (_x = (_w = itemColor === null || itemColor === void 0 ? void 0 : itemColor.click) === null || _w === void 0 ? void 0 : _w.text) !== null && _x !== void 0 ? _x : constant.Color.White,
    };
}
function EvpMenu(props) {
    var _a, _b, _c, _d, _e, _f;
    var didMounted = React__default["default"].useRef(null);
    React.useEffect(function () {
        var _a, _b, _c, _d;
        if (!didMounted.current) {
            var linkUrl = "";
            if (typeof props.link === "string") {
                linkUrl = props.link.trim();
            }
            else if (typeof props.link === "object") {
                linkUrl = (_b = (_a = props.link.path) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
            }
            didMounted.current = (_d = (_c = props.keyId) !== null && _c !== void 0 ? _c : linkUrl) !== null && _d !== void 0 ? _d : "menu_".concat(nanoid.nanoid());
        }
    }, [props.keyId, props.link]);
    var propedMenuRef = props.menuRef;
    var menuCtx = hooks.useMenuRef({
        multiSelected: (_a = props.multiSelected) !== null && _a !== void 0 ? _a : false,
        multiOpened: (_b = props.multiOpened) !== null && _b !== void 0 ? _b : false,
        onOpen: props.globalOnOpen,
        onClose: props.globalOnClose,
        onSelect: props.globalOnSelect,
        onUnselect: props.globalOnUnselect,
    });
    var icon = props.icon;
    var $props = props_parser["default"](props);
    var $event = $props.event;
    var _g = React.useState(false), expand = _g[0], setExpand = _g[1];
    function deExpand() {
        setExpand(!expand);
    }
    function $click(e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (!props["not-allowed"]) {
            if (!expand) {
                // going to open
                if (props.submenu) {
                    if ((_a = propedMenuRef === null || propedMenuRef === void 0 ? void 0 : propedMenuRef.current) !== null && _a !== void 0 ? _a : menuCtx.current) {
                        var ctx = propedMenuRef !== null && propedMenuRef !== void 0 ? propedMenuRef : menuCtx;
                        (_c = (_b = ctx.current)._handleOpenOne) === null || _c === void 0 ? void 0 : _c.call(_b, (_d = props.keyId) !== null && _d !== void 0 ? _d : didMounted.current);
                    }
                    (_e = props.onOpen) === null || _e === void 0 ? void 0 : _e.call(props, (_f = props.keyId) !== null && _f !== void 0 ? _f : didMounted.current);
                }
            }
            else {
                // going to close
                if (props.submenu) {
                    (_j = (_h = ((_g = propedMenuRef === null || propedMenuRef === void 0 ? void 0 : propedMenuRef.current) !== null && _g !== void 0 ? _g : menuCtx.current)) === null || _h === void 0 ? void 0 : _h._handleCloseOne) === null || _j === void 0 ? void 0 : _j.call(_h, (_k = props.keyId) !== null && _k !== void 0 ? _k : didMounted.current);
                    (_l = props.onClose) === null || _l === void 0 ? void 0 : _l.call(props, (_m = props.keyId) !== null && _m !== void 0 ? _m : didMounted.current);
                }
            }
            deExpand();
            (_o = $event.onMouseDown) === null || _o === void 0 ? void 0 : _o.call($event, e);
            if (props.link) {
                route.linkTo(props.link, props.hash);
            }
        }
    }
    var ref = React.useRef(null);
    var _h = React.useState(0), height = _h[0], setHeight = _h[1];
    React.useEffect(function () {
        var _a;
        if (expand) {
            setHeight((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetHeight);
        }
        else {
            setHeight(0);
        }
    }, [expand]);
    React.useEffect(function () {
        if (ref.current) {
            setHeight(ref.current.offsetHeight);
        }
    }, [expand]);
    var childrenWrapperClass = props.submenu ? "evp-menu-children-wrapper ".concat(expand ? "" : "close") : "";
    var disabled = props["not-allowed"] ? "evp-disabled" : "";
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ alignItems: "left", class: "evp-menu ".concat(props.submenu ? "sub" : "", " ").concat(disabled, " ").concat((_c = props.class) !== null && _c !== void 0 ? _c : "").trim(), pd: props.pd, mg: props.mg, w: (_d = props.w) !== null && _d !== void 0 ? _d : "260px", style: tslib.__assign(tslib.__assign({ overflow: "hidden", border: props.submenu ? "unset" : "1px solid ".concat(constant.Color.PaleGray) }, $props.style), flatItemColor(props.itemColor)) }, { children: [jsxRuntime.jsxs(index$1["default"], tslib.__assign({ alignItems: "space-between", class: "evp-menu-title", "$click": $click, cursor: (_e = props.cursor) !== null && _e !== void 0 ? _e : "pointer" }, { children: [jsxRuntime.jsx(index$1["default"], tslib.__assign({ h: 50, pd: [0, 0, 0, 16] }, { children: typeof props.title === "string" ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [icon ? jsxRuntime.jsx(index$2["default"], { name: icon, radius: 18, pd: [0, 12, 0, 0] }) : null, jsxRuntime.jsx("div", { children: props.title })] })) : (props.title) })), props.submenu ? (jsxRuntime.jsx(index$2["default"], { strokeWidth: 2, radius: 18, pd: [0, 16, 0, 0], name: expand ? "down" : "left" })) : null] })), jsxRuntime.jsx(context["default"].Provider, tslib.__assign({ value: (_f = propedMenuRef === null || propedMenuRef === void 0 ? void 0 : propedMenuRef.current) !== null && _f !== void 0 ? _f : menuCtx.current }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "".concat(childrenWrapperClass), style: {
                        height: props.submenu ? height : void 0,
                    } }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: "evp-menu-children", ref: ref, style: {
                            // @ts-ignore
                            "--item-indent": props.submenu
                                ? props.itemIndent
                                    ? typeof props.itemIndent === "number"
                                        ? "".concat(props.itemIndent, "px")
                                        : typeof props.itemIndent === "string"
                                            ? props.itemIndent
                                            : "18px"
                                    : "8px"
                                : "8px",
                        } }, { children: props.children })) })) }))] })));
}

exports["default"] = EvpMenu;
