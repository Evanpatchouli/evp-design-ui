import { useState, useRef } from 'react';
import { pageBounds } from './pagination.js';

function useRecordPage(data, paging, paginator) {
    var _a, _b, _c;
    var _d = useState(1), localPage = _d[0], setLocalPage = _d[1];
    var total = (_b = (_a = paging === null || paging === void 0 ? void 0 : paging.total) !== null && _a !== void 0 ? _a : data === null || data === void 0 ? void 0 : data.length) !== null && _b !== void 0 ? _b : 0;
    var _e = pageBounds(total, paging === null || paging === void 0 ? void 0 : paging.pageSize, (_c = paging === null || paging === void 0 ? void 0 : paging.currentPage) !== null && _c !== void 0 ? _c : localPage), page = _e.page, pageSize = _e.pageSize;
    var rows = data !== null && data !== void 0 ? data : [];
    var records = paging || paginator ? rows.slice((page - 1) * pageSize, page * pageSize) : rows;
    var setPage = function (update) {
        var _a;
        var next = typeof update === "function" ? update(page) : update;
        if ((paging === null || paging === void 0 ? void 0 : paging.currentPage) === undefined)
            setLocalPage(next);
        (_a = paging === null || paging === void 0 ? void 0 : paging.setCurrentPage) === null || _a === void 0 ? void 0 : _a.call(paging, next);
    };
    return { records: records, currentPage: page, pageSize: pageSize, total: total, setCurrentPage: setPage };
}
function useRecordKey(rowKey) {
    var identities = useState(function () { return new WeakMap(); })[0];
    var sequence = useRef(0);
    return function (record) {
        var _a;
        var fields = record;
        var key = typeof rowKey === "function" ? rowKey(record) :
            rowKey !== undefined ? record[rowKey] : (_a = fields === null || fields === void 0 ? void 0 : fields.key) !== null && _a !== void 0 ? _a : fields === null || fields === void 0 ? void 0 : fields.id;
        if (typeof key === "string" || typeof key === "number")
            return typeof key + ":" + key;
        if (record === null || typeof record !== "object")
            return typeof record + ":" + String(record);
        var id = identities.get(record);
        if (id === undefined) {
            id = sequence.current++;
            identities.set(record, id);
        }
        return "record:" + id;
    };
}

export { useRecordKey, useRecordPage };
