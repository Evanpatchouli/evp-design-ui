import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';

var Th = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return jsx("th", __assign({ className: classNames("evp-table-th", className) }, props));
};

export { Th as default };
