import { __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import { Color } from '../constant.js';
import EvpIcon from '../evp-icon/index.js';

function Toast(props) {
    var _a, _b;
    var icon = {
        info: "info",
        warn: "warn",
        error: "error",
        success: "true_circle",
    };
    var color = {
        info: Color.Gray,
        warn: Color.Orange,
        error: Color.Red,
        success: Color.Green,
    };
    return (jsxs("div", __assign({ className: classNames("evp", "evp-toast", props.firstRendered ? "evp-toast-appear" : "", props.lastRendered ? "evp-toast-leave" : "") }, { children: [jsx(EvpIcon, { name: icon[(_a = props.type) !== null && _a !== void 0 ? _a : "info"], color: color[(_b = props.type) !== null && _b !== void 0 ? _b : "info"] }), jsx("div", { children: props.text })] }), "evp-toast:".concat(props.id)));
}

export { Toast as default };
