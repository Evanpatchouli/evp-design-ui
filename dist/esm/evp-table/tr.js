import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

var Header = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return jsx("tr", __assign({ className: classNames("evp-table-column-headers-row", className) }, props));
};
var Record = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return jsx("tr", __assign({ className: classNames("evp-table-column-record-row", className) }, props));
};
var Tr = {
    Header: Header,
    Record: Record,
};

export { Tr as default };
