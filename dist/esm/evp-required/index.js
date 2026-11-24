import { __rest, __assign } from 'tslib';
import { jsx, Fragment } from 'react/jsx-runtime';

function EvpRequired(_a) {
    var className = _a.className, hidden = _a.hidden, children = _a.children, props = __rest(_a, ["className", "hidden", "children"]);
    return hidden ? (jsx(Fragment, {})) : (jsx("div", __assign({ className: "evp-required ".concat(className !== null && className !== void 0 ? className : "").trim() }, props, { children: children !== null && children !== void 0 ? children : "*" })));
}

export { EvpRequired as default };
