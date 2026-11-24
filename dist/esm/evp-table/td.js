import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

var Td = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return jsx("td", __assign({ className: classNames("evp-table-td", className) }, props));
};

export { Td as default };
