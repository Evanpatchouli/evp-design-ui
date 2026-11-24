'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var index$2 = require('../evp-icon/index.js');
var index$1 = require('../evp-row/index.js');
var props_parser = require('../utils/props.parser.js');
var index = require('../evp-col/index.js');
var nanoid = require('nanoid');
var hooks = require('../evp-menu/hooks.js');
var classNames = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpMenuItem(props) {
    var _a, _b, _c, _d, _e, _f;
    var generatedKey = React__default["default"].useRef();
    var linkPath = typeof props.link === "string" ? props.link : (_a = props.link) === null || _a === void 0 ? void 0 : _a.path;
    if (props.keyId == null && !(linkPath === null || linkPath === void 0 ? void 0 : linkPath.trim()) && !generatedKey.current) {
        generatedKey.current = "menu-item_".concat(nanoid.nanoid());
    }
    var uniqueKey = (_b = props.keyId) !== null && _b !== void 0 ? _b : ((linkPath === null || linkPath === void 0 ? void 0 : linkPath.trim()) || generatedKey.current);
    var menuCtx = hooks["default"]();
    var _g = React__default["default"].useState(false), selected = _g[0], setSelected = _g[1];
    React__default["default"].useEffect(function () {
        var _a;
        return (_a = menuCtx === null || menuCtx === void 0 ? void 0 : menuCtx._add_setSelectedMap) === null || _a === void 0 ? void 0 : _a.call(menuCtx, uniqueKey, setSelected);
    }, [menuCtx, uniqueKey]);
    // useEffect(() => {
    //   console.log(menuCtx.multiSelected, menuCtx.selectedKeys, props.keyId ?? didMounted.current);
    //   if (menuCtx.multiSelected !== true) {
    //     if (!menuCtx.selectedKeys?.includes(props.keyId ?? didMounted.current)) {
    //       setSelected(false);
    //     }
    //   }
    // }, []);
    var icon = props.icon;
    var $props = props_parser["default"](props);
    var $event = $props.event;
    var $click = props["not-allowed"]
        ? undefined
        : function (e) {
            var _a, _b, _c, _d, _e;
            if (selected) {
                // Going to unselect
                if (props.unselectOnReClick) {
                    setSelected(false);
                    (_a = menuCtx._handleUnselectOne) === null || _a === void 0 ? void 0 : _a.call(menuCtx, uniqueKey);
                    (_b = props.onUnselect) === null || _b === void 0 ? void 0 : _b.call(props, uniqueKey);
                }
            }
            else {
                setSelected(true); // Going to select
                (_c = menuCtx._handleSelectOne) === null || _c === void 0 ? void 0 : _c.call(menuCtx, uniqueKey);
                (_d = props.onSelect) === null || _d === void 0 ? void 0 : _d.call(props, uniqueKey);
            }
            (_e = $event.onMouseDown) === null || _e === void 0 ? void 0 : _e.call($event, e);
        };
    var disabled = props["not-allowed"] ? "evp-disabled" : "";
    var item = (jsxRuntime.jsx(index["default"], tslib.__assign({ alignItems: "space-between", class: classNames__default["default"]({
            "evp-menu-item": true,
            "evp-disabled": disabled ? true : false,
            "evp-menu-item-selected": selected,
        }), style: $props.style, "$click": linkPath ? undefined : $click, hidden: props.hidden, cursor: (_c = props.cursor) !== null && _c !== void 0 ? _c : "pointer" }, { children: jsxRuntime.jsx(index$1["default"], tslib.__assign({ class: "evp-menu-item-title", h: 50, pd: [0, 8, 0, 8] }, { children: typeof props.title !== "object" ? (jsxRuntime.jsxs(React.Fragment, { children: [icon ? jsxRuntime.jsx(index$2["default"], { color: "var(--color)", name: icon, radius: 18, pd: [0, 12, 0, 0] }) : null, jsxRuntime.jsx("div", { children: (_d = props.title) !== null && _d !== void 0 ? _d : props.children })] })) : ((_e = props.title) !== null && _e !== void 0 ? _e : jsxRuntime.jsx("div", { children: props.children })) })) })));
    if (!linkPath)
        return item;
    if (disabled) {
        return jsxRuntime.jsx("span", tslib.__assign({ role: "link", "aria-disabled": "true", className: "evp-menu-link", hidden: props.hidden }, { children: item }));
    }
    var hash = typeof props.link === "object" ? (_f = props.link.hash) !== null && _f !== void 0 ? _f : props.hash : props.hash;
    var hashRoute = hash || (typeof window !== "undefined" && window.location.hash);
    var href = hashRoute && !linkPath.startsWith("#") ? "#".concat(linkPath) : linkPath;
    return (jsxRuntime.jsx("a", tslib.__assign({ className: "evp-menu-link", hidden: props.hidden, href: href, onClick: function (event) {
            if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                $click === null || $click === void 0 ? void 0 : $click(event);
            }
        } }, { children: item })));
}

exports["default"] = EvpMenuItem;
