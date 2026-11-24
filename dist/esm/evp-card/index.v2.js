import { __assign, __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpDom from '../evp-dom/index.js';

function EvpCardV2(props) {
    var containerProps = function () {
        props.class; props.children; var style = props.style; props.contentStyle; props.contentClass; props.lefter; props.lefterProps; props.righter; props.righterProps; props.header; props.headerProps; props.footer; props.footerProps; props.loading; var cardLoading = props.cardLoading, rest = __rest(props, ["class", "children", "style", "contentStyle", "contentClass", "lefter", "lefterProps", "righter", "righterProps", "header", "headerProps", "footer", "footerProps", "loading", "cardLoading"]);
        return __assign(__assign({ style: __assign({ flexDirection: "row" }, style), loading: cardLoading }, rest), { class: "evp evp-card evp-base-shadow ".concat(props.class || "").trim() });
    };
    var lefterProps = function () {
        var _a, _b;
        return __assign(__assign({}, ((_a = props.lefterProps) !== null && _a !== void 0 ? _a : {})), { class: classNames("evp-card-lefter", (_b = props.lefterProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var righterProps = function () {
        var _a, _b;
        return __assign(__assign({}, ((_a = props.righterProps) !== null && _a !== void 0 ? _a : {})), { class: classNames("evp-card-righter", (_b = props.righterProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var headerProps = function () {
        var _a, _b;
        return __assign(__assign({}, ((_a = props.headerProps) !== null && _a !== void 0 ? _a : {})), { class: classNames("evp-card-header", (_b = props.headerProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    var footerProps = function () {
        var _a, _b;
        return __assign(__assign({}, ((_a = props.footerProps) !== null && _a !== void 0 ? _a : {})), { class: classNames("evp-card-footer", (_b = props.footerProps) === null || _b === void 0 ? void 0 : _b.class) });
    };
    return (jsxs(EvpDom, __assign({}, containerProps(), { children: [props.lefter !== undefined ? jsx(EvpDom, __assign({}, lefterProps(), { children: props.lefter })) : void 0, jsxs("div", __assign({ className: "evp-card-main" }, { children: [props.header !== undefined ? jsx(EvpDom, __assign({}, headerProps(), { children: props.header })) : void 0, jsx(EvpDom, __assign({ class: "evp-card-content ".concat(props.contentClass || "").trim(), style: __assign({}, props.contentStyle), loading: props.loading }, { children: props.children })), props.footer !== undefined ? jsx(EvpDom, __assign({}, footerProps(), { children: props.footer })) : void 0] })), props.righter !== undefined ? jsx(EvpDom, __assign({}, righterProps(), { children: props.righter })) : void 0] })));
}

export { EvpCardV2 as default };
