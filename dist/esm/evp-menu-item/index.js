import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { Fragment } from 'react';
import EvpIcon from '../evp-icon/index.js';
import EvpRow from '../evp-row/index.js';
import AllParser from '../utils/props.parser.js';
import EvpCol from '../evp-col/index.js';
import { nanoid } from 'nanoid';
import useMenu from '../evp-menu/hooks.js';
import classNames from 'classnames';

function EvpMenuItem(props) {
    var _a, _b, _c, _d, _e, _f;
    var generatedKey = React.useRef();
    var linkPath = typeof props.link === "string" ? props.link : (_a = props.link) === null || _a === void 0 ? void 0 : _a.path;
    if (props.keyId == null && !(linkPath === null || linkPath === void 0 ? void 0 : linkPath.trim()) && !generatedKey.current) {
        generatedKey.current = "menu-item_".concat(nanoid());
    }
    var uniqueKey = (_b = props.keyId) !== null && _b !== void 0 ? _b : ((linkPath === null || linkPath === void 0 ? void 0 : linkPath.trim()) || generatedKey.current);
    var menuCtx = useMenu();
    var _g = React.useState(false), selected = _g[0], setSelected = _g[1];
    React.useEffect(function () {
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
    var $props = AllParser(props);
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
    var item = (jsx(EvpCol, __assign({ alignItems: "space-between", class: classNames({
            "evp-menu-item": true,
            "evp-disabled": disabled ? true : false,
            "evp-menu-item-selected": selected,
        }), style: $props.style, "$click": linkPath ? undefined : $click, hidden: props.hidden, cursor: (_c = props.cursor) !== null && _c !== void 0 ? _c : "pointer" }, { children: jsx(EvpRow, __assign({ class: "evp-menu-item-title", h: 50, pd: [0, 8, 0, 8] }, { children: typeof props.title !== "object" ? (jsxs(Fragment, { children: [icon ? jsx(EvpIcon, { color: "var(--color)", name: icon, radius: 18, pd: [0, 12, 0, 0] }) : null, jsx("div", { children: (_d = props.title) !== null && _d !== void 0 ? _d : props.children })] })) : ((_e = props.title) !== null && _e !== void 0 ? _e : jsx("div", { children: props.children })) })) })));
    if (!linkPath)
        return item;
    if (disabled) {
        return jsx("span", __assign({ role: "link", "aria-disabled": "true", className: "evp-menu-link", hidden: props.hidden }, { children: item }));
    }
    var hash = typeof props.link === "object" ? (_f = props.link.hash) !== null && _f !== void 0 ? _f : props.hash : props.hash;
    var hashRoute = hash || (typeof window !== "undefined" && window.location.hash);
    var href = hashRoute && !linkPath.startsWith("#") ? "#".concat(linkPath) : linkPath;
    return (jsx("a", __assign({ className: "evp-menu-link", hidden: props.hidden, href: href, onClick: function (event) {
            if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
                $click === null || $click === void 0 ? void 0 : $click(event);
            }
        } }, { children: item })));
}

export { EvpMenuItem as default };
