import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import { useRecordPage, useRecordKey } from '../evp-paginator/useRecords.js';
import EvpRow from '../evp-row/index.js';
import EvpPaginator from '../evp-paginator/index.js';

var EvpList = function (_a) {
    var className = _a.class, id = _a.id, children = _a.children, style = _a.style, schema = _a.schema, data = _a.data, pagination = _a.pagination, paginator = _a.paginator; _a.zebra; var props = __rest(_a, ["class", "id", "children", "style", "schema", "data", "pagination", "paginator", "zebra"]);
    var _b = useRecordPage(data, pagination, paginator), records = _b.records, page = __rest(_b, ["records"]);
    var recordKey = useRecordKey(schema === null || schema === void 0 ? void 0 : schema.key);
    return (jsxs("div", __assign({ style: {
            width: "fit-content",
            height: "fit-content",
        } }, { children: [jsx("div", __assign({ className: "evp evp-list ".concat(className !== null && className !== void 0 ? className : "").trim(), id: id, style: __assign({}, style) }, props, { children: records.map(function (item, idx) {
                    var _a;
                    return (jsx(React.Fragment, { children: schema ? (_a = schema.render) === null || _a === void 0 ? void 0 : _a.call(schema, item, idx, records) : item.toString() }, recordKey(item)));
                }) })), paginator && (jsx(EvpRow, __assign({ w: "100%", justifyContent: "flex-end" }, { children: jsx(EvpPaginator, __assign({}, pagination, page)) }))), children] })));
};

export { EvpList as default };
