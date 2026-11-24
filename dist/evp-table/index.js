'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var React = require('react');
var useRecords = require('../evp-paginator/useRecords.js');
var tr = require('./tr.js');
var cell = require('./cell.js');
var index$1 = require('../evp-paginator/index.js');
var index = require('../evp-row/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);

function EvpTable(_a) {
    var _b, _c;
    var className = _a.class, id = _a.id, children = _a.children, style = _a.style, schema = _a.schema, labelAlign = _a.labelAlign, labelProps = _a.labelProps, indexLabelAlign = _a.indexLabelAlign, indexLabelProps = _a.indexLabelProps, indexAlign = _a.indexAlign, indexProps = _a.indexProps, data = _a.data, rowKey = _a.rowKey, align = _a.align, cellProps = _a.cellProps, pagination = _a.pagination, paginator = _a.paginator, zebra = _a.zebra, caption = _a.caption, selection = _a.selection, index$2 = _a.index, events = tslib.__rest(_a, ["class", "id", "children", "style", "schema", "labelAlign", "labelProps", "indexLabelAlign", "indexLabelProps", "indexAlign", "indexProps", "data", "rowKey", "align", "cellProps", "pagination", "paginator", "zebra", "caption", "selection", "index"]);
    var _d = useRecords.useRecordPage(data, pagination, paginator), records = _d.records, page = tslib.__rest(_d, ["records"]);
    var recordKey = useRecords.useRecordKey(rowKey);
    var _e = React.useState(function () { return new Set(); }), selectedKeys = _e[0], setSelectedKeys = _e[1];
    var columns = (_b = schema === null || schema === void 0 ? void 0 : schema.filter(function (column) { return !column.hidden; })) !== null && _b !== void 0 ? _b : Object.keys((_c = data === null || data === void 0 ? void 0 : data[0]) !== null && _c !== void 0 ? _c : {}).map(function (prop) { return ({ prop: prop, label: prop }); });
    var columnKey = function (column, index) { var _a, _b; return String((_b = (_a = column.key) !== null && _a !== void 0 ? _a : column.prop) !== null && _b !== void 0 ? _b : index); };
    function toggleRecord(key) {
        setSelectedKeys(function (previous) {
            var next = new Set(previous);
            if (next.has(key))
                next.delete(key);
            else
                next.add(key);
            return next;
        });
    }
    return (jsxRuntime.jsxs("div", tslib.__assign({ style: { width: "fit-content" } }, { children: [jsxRuntime.jsxs("table", tslib.__assign({ id: id, className: classNames__default["default"]("evp", "evp-table", className), cellSpacing: 0, cellPadding: 12 }, events, { style: style }, { children: [jsxRuntime.jsx("caption", { children: caption }), jsxRuntime.jsx("thead", { children: jsxRuntime.jsxs(tr["default"].Header, { children: [selection && jsxRuntime.jsx(cell["default"].Th, { align: "center" }), index$2 && jsxRuntime.jsx(cell["default"].Th, tslib.__assign({ align: indexLabelAlign !== null && indexLabelAlign !== void 0 ? indexLabelAlign : align }, (indexLabelProps !== null && indexLabelProps !== void 0 ? indexLabelProps : labelProps), { children: "Index" })), columns.map(function (column, idx) {
                                    var _a, _b, _c;
                                    return (jsxRuntime.jsx(cell["default"].Th, tslib.__assign({ align: (_b = (_a = column.labelAlign) !== null && _a !== void 0 ? _a : labelAlign) !== null && _b !== void 0 ? _b : align }, ((_c = column.labelProps) !== null && _c !== void 0 ? _c : labelProps), { children: column.label }), columnKey(column, idx)));
                                })] }) }), jsxRuntime.jsx("tbody", tslib.__assign({ className: zebra ? "zebra" : "" }, { children: records.map(function (row, idx) {
                            var key = recordKey(row);
                            return (jsxRuntime.jsxs(tr["default"].Record, { children: [selection && jsxRuntime.jsx(cell["default"].Td, tslib.__assign({ align: "center", className: "checkbox" }, { children: jsxRuntime.jsx("input", { type: "checkbox", style: { cursor: "pointer" }, checked: selectedKeys.has(key), "aria-label": "Select row ".concat((page.currentPage - 1) * page.pageSize + idx + 1), onChange: function () { return toggleRecord(key); } }) })), index$2 && jsxRuntime.jsx(cell["default"].Td, tslib.__assign({ align: indexAlign !== null && indexAlign !== void 0 ? indexAlign : align }, (indexProps !== null && indexProps !== void 0 ? indexProps : cellProps), { className: "evp-table-column-idx" }, { children: idx + 1 })), columns.map(function (column, colIndex) {
                                        var _a, _b;
                                        var value = column.prop === undefined ? undefined : row[column.prop];
                                        return (jsxRuntime.jsx(cell["default"].Td, tslib.__assign({ align: (_a = column.align) !== null && _a !== void 0 ? _a : align }, ((_b = column.cellProps) !== null && _b !== void 0 ? _b : cellProps), { children: column.render ? column.render(value, row, records) : value }), columnKey(column, colIndex)));
                                    })] }, key));
                        }) })), jsxRuntime.jsx("tfoot", {})] })), paginator && (jsxRuntime.jsx(index["default"], tslib.__assign({ w: "100%", justifyContent: "flex-end" }, { children: jsxRuntime.jsx(index$1["default"], tslib.__assign({}, pagination, page)) }))), children] })));
}

exports["default"] = EvpTable;
