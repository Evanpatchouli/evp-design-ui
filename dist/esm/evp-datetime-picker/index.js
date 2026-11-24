import { __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpCol from '../evp-col/index.js';

var EvpDateTimePicker = function (props) {
    var _a, _b;
    return (jsx(EvpCol, __assign({ mg: [4, 0, 4, 0], alignItems: "flex-start" }, { children: jsx("div", __assign({ className: classNames("evp", "evp-datetime-picker", props.class) }, { children: jsxs("div", { children: [jsx("span", __assign({ className: "evp-datetime-picker-input" }, { children: (_b = (_a = props.children) !== null && _a !== void 0 ? _a : props.placeholder) !== null && _b !== void 0 ? _b : props.formatter })), jsx("span", __assign({ className: "evp-datetime-picker-icon" }, { children: "\uD83D\uDD50" }))] }) })) })));
};

export { EvpDateTimePicker as default };
