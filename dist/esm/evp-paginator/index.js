import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, Fragment } from 'react';
import EvpInput from '../evp-input/index.js';
import { Color } from '../constant.js';
import Right from '../evp-icon/right.js';
import Left from '../evp-icon/left.js';
import { hexAlpha } from '../utils/index.js';
import { visiblePages, pageBounds } from './pagination.js';

var EvpPaginator = function (_a) {
    var customClass = _a.class, className = _a.className, id = _a.id, children = _a.children, currentPage = _a.currentPage, setCurrentPage = _a.setCurrentPage, counters = _a.counters, requestedSize = _a.pageSize, total = _a.total, _b = _a.showTotal, showTotal = _b === void 0 ? true : _b, showQuickJumper = _a.showQuickJumper, showSizeChanger = _a.showSizeChanger, _c = _a.showTaber, showTaber = _c === void 0 ? true : _c, onChange = _a.onChange, onPageChange = _a.onPageChange; _a.onShowSizeChange; var style = _a.style, _d = _a.quene, quene = _d === void 0 ? ["total", "sizer", "taber", "jumper"] : _d, _e = _a.tabColor, tabColor = _e === void 0 ? Color.Black : _e, _f = _a.tabBgColor, tabBgColor = _f === void 0 ? Color.White : _f, _g = _a.tabActiveColor, tabActiveColor = _g === void 0 ? Color.White : _g, _h = _a.tabActiveBgColor, tabActiveBgColor = _h === void 0 ? Color.Blue : _h, _j = _a.tabHoverColor, tabHoverColor = _j === void 0 ? tabColor : _j, _k = _a.tabHoverBgColor, tabHoverBgColor = _k === void 0 ? hexAlpha(tabActiveBgColor, 11) : _k, props = __rest(_a, ["class", "className", "id", "children", "currentPage", "setCurrentPage", "counters", "pageSize", "total", "showTotal", "showQuickJumper", "showSizeChanger", "showTaber", "onChange", "onPageChange", "onShowSizeChange", "style", "quene", "tabColor", "tabBgColor", "tabActiveColor", "tabActiveBgColor", "tabHoverColor", "tabHoverBgColor"]);
    var _l = useState(1), localPage = _l[0], setLocalPage = _l[1];
    var _m = pageBounds(total, requestedSize, currentPage !== null && currentPage !== void 0 ? currentPage : localPage), page = _m.page, pageSize = _m.pageSize, pageCount = _m.pageCount;
    function changePage(target) {
        if (!Number.isSafeInteger(target))
            return;
        var next = Math.min(pageCount, Math.max(1, target));
        if (next === page)
            return;
        if (currentPage === undefined)
            setLocalPage(next);
        setCurrentPage === null || setCurrentPage === void 0 ? void 0 : setCurrentPage(next);
        onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(next, pageSize);
        onChange === null || onChange === void 0 ? void 0 : onChange(next, pageSize);
    }
    var sections = {
        total: showTotal && jsxs("span", { children: ["Total: ", total] }),
        sizer: showSizeChanger && jsxs("span", { children: ["PageSize: ", pageSize] }),
        taber: showTaber && (jsxs("span", __assign({ className: "evp-paginator-tabs" }, { children: [jsx("button", __assign({ type: "button", "aria-label": "Previous page", className: "evp-counter-lefter", disabled: page === 1, onClick: function () { return changePage(page - 1); } }, { children: jsx(Left, { radius: 20 }) })), visiblePages(page, pageCount, counters).map(function (number) { return (jsx("button", __assign({ type: "button", "aria-current": number === page ? "page" : undefined, className: number === page ? "evp-paginator-tab-active" : "evp-paginator-tab", onClick: function () { return changePage(number); } }, { children: number }), number)); }), jsx("button", __assign({ type: "button", "aria-label": "Next page", className: "evp-counter-righter", disabled: page === pageCount, onClick: function () { return changePage(page + 1); } }, { children: jsx(Right, { radius: 20 }) }))] }))),
        jumper: showQuickJumper && (jsxs("label", __assign({ className: "evp-paginator-jumper" }, { children: ["Jump to", jsx(EvpInput, { style: { width: 50 }, onEnter: function (event) {
                        var text = event.currentTarget.value.trim();
                        if (text)
                            changePage(Number(text));
                    } })] })))
    };
    return (jsxs("div", __assign({ id: id, className: className !== null && className !== void 0 ? className : customClass }, props, { style: __assign({ display: "flex", width: "fit-content", justifyContent: "flex-end", alignItems: "center", flexWrap: "wrap", gap: 8, marginBlock: 8, "--tabColor": tabColor, "--tabBgColor": tabBgColor, "--tabActiveColor": tabActiveColor, "--tabActiveBgColor": tabActiveBgColor, "--tabHoverColor": tabHoverColor, "--tabHoverBgColor": tabHoverBgColor }, style) }, { children: [quene.map(function (section) { return jsx(Fragment, { children: sections[section] }, section); }), children] })));
};

export { EvpPaginator as default };
