'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useRecords = require('../evp-paginator/useRecords.js');
var index = require('../evp-row/index.js');
var index$1 = require('../evp-paginator/index.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var EvpList = function (_a) {
    var className = _a.class, id = _a.id, children = _a.children, style = _a.style, schema = _a.schema, data = _a.data, pagination = _a.pagination, paginator = _a.paginator; _a.zebra; var props = tslib.__rest(_a, ["class", "id", "children", "style", "schema", "data", "pagination", "paginator", "zebra"]);
    var _b = useRecords.useRecordPage(data, pagination, paginator), records = _b.records, page = tslib.__rest(_b, ["records"]);
    var recordKey = useRecords.useRecordKey(schema === null || schema === void 0 ? void 0 : schema.key);
    return (jsxRuntime.jsxs("div", tslib.__assign({ style: {
            width: "fit-content",
            height: "fit-content",
        } }, { children: [jsxRuntime.jsx("div", tslib.__assign({ className: "evp evp-list ".concat(className !== null && className !== void 0 ? className : "").trim(), id: id, style: tslib.__assign({}, style) }, props, { children: records.map(function (item, idx) {
                    var _a;
                    return (jsxRuntime.jsx(React__default["default"].Fragment, { children: schema ? (_a = schema.render) === null || _a === void 0 ? void 0 : _a.call(schema, item, idx, records) : item.toString() }, recordKey(item)));
                }) })), paginator && (jsxRuntime.jsx(index["default"], tslib.__assign({ w: "100%", justifyContent: "flex-end" }, { children: jsxRuntime.jsx(index$1["default"], tslib.__assign({}, pagination, page)) }))), children] })));
};

exports["default"] = EvpList;
