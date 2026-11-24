import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { useState } from 'react';
import { useRecordPage, useRecordKey } from '../evp-paginator/useRecords.js';
import Tr from './tr.js';
import Cell from './cell.js';
import EvpPaginator from '../evp-paginator/index.js';
import EvpRow from '../evp-row/index.js';

function EvpTable(_a) {
    var _b, _c;
    var className = _a.class, id = _a.id, children = _a.children, style = _a.style, schema = _a.schema, labelAlign = _a.labelAlign, labelProps = _a.labelProps, indexLabelAlign = _a.indexLabelAlign, indexLabelProps = _a.indexLabelProps, indexAlign = _a.indexAlign, indexProps = _a.indexProps, data = _a.data, rowKey = _a.rowKey, align = _a.align, cellProps = _a.cellProps, pagination = _a.pagination, paginator = _a.paginator, zebra = _a.zebra, caption = _a.caption, selection = _a.selection, index = _a.index, events = __rest(_a, ["class", "id", "children", "style", "schema", "labelAlign", "labelProps", "indexLabelAlign", "indexLabelProps", "indexAlign", "indexProps", "data", "rowKey", "align", "cellProps", "pagination", "paginator", "zebra", "caption", "selection", "index"]);
    var _d = useRecordPage(data, pagination, paginator), records = _d.records, page = __rest(_d, ["records"]);
    var recordKey = useRecordKey(rowKey);
    var _e = useState(function () { return new Set(); }), selectedKeys = _e[0], setSelectedKeys = _e[1];
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
    return (jsxs("div", __assign({ style: { width: "fit-content" } }, { children: [jsxs("table", __assign({ id: id, className: classNames("evp", "evp-table", className), cellSpacing: 0, cellPadding: 12 }, events, { style: style }, { children: [jsx("caption", { children: caption }), jsx("thead", { children: jsxs(Tr.Header, { children: [selection && jsx(Cell.Th, { align: "center" }), index && jsx(Cell.Th, __assign({ align: indexLabelAlign !== null && indexLabelAlign !== void 0 ? indexLabelAlign : align }, (indexLabelProps !== null && indexLabelProps !== void 0 ? indexLabelProps : labelProps), { children: "Index" })), columns.map(function (column, idx) {
                                    var _a, _b, _c;
                                    return (jsx(Cell.Th, __assign({ align: (_b = (_a = column.labelAlign) !== null && _a !== void 0 ? _a : labelAlign) !== null && _b !== void 0 ? _b : align }, ((_c = column.labelProps) !== null && _c !== void 0 ? _c : labelProps), { children: column.label }), columnKey(column, idx)));
                                })] }) }), jsx("tbody", __assign({ className: zebra ? "zebra" : "" }, { children: records.map(function (row, idx) {
                            var key = recordKey(row);
                            return (jsxs(Tr.Record, { children: [selection && jsx(Cell.Td, __assign({ align: "center", className: "checkbox" }, { children: jsx("input", { type: "checkbox", style: { cursor: "pointer" }, checked: selectedKeys.has(key), "aria-label": "Select row ".concat((page.currentPage - 1) * page.pageSize + idx + 1), onChange: function () { return toggleRecord(key); } }) })), index && jsx(Cell.Td, __assign({ align: indexAlign !== null && indexAlign !== void 0 ? indexAlign : align }, (indexProps !== null && indexProps !== void 0 ? indexProps : cellProps), { className: "evp-table-column-idx" }, { children: idx + 1 })), columns.map(function (column, colIndex) {
                                        var _a, _b;
                                        var value = column.prop === undefined ? undefined : row[column.prop];
                                        return (jsx(Cell.Td, __assign({ align: (_a = column.align) !== null && _a !== void 0 ? _a : align }, ((_b = column.cellProps) !== null && _b !== void 0 ? _b : cellProps), { children: column.render ? column.render(value, row, records) : value }), columnKey(column, colIndex)));
                                    })] }, key));
                        }) })), jsx("tfoot", {})] })), paginator && (jsx(EvpRow, __assign({ w: "100%", justifyContent: "flex-end" }, { children: jsx(EvpPaginator, __assign({}, pagination, page)) }))), children] })));
}

export { EvpTable as default };
