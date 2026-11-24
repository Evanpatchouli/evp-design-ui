import { __assign, __rest } from 'tslib';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import AllParser from '../utils/props.parser.js';
import { linkTo } from '../utils/route.js';

function purifyProps(props) {
    props.routes; props.onClick; props.fontSize; props.class; var rest = __rest(props, ["routes", "onClick", "fontSize", "class"]);
    return AllParser(rest);
}
var EvpBreadCrumb = function (props) {
    var _a, _b;
    var last = function (idx) { var _a, _b; return (idx !== ((_b = (_a = props.routes) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? "" : "last"); };
    var $props = purifyProps(props);
    return (jsx("div", __assign({ className: classNames("evp-breadcrumb", props.class), id: props.id, style: __assign({ fontSize: "".concat((_a = props.fontSize) !== null && _a !== void 0 ? _a : 14, "px") }, $props.style) }, $props.event, { children: (_b = props.routes) === null || _b === void 0 ? void 0 : _b.map(function (route, idx) {
            var _a, _b, _c, _d;
            return (jsxs(Fragment, { children: [jsx("span", __assign({ className: classNames("evp-breadcrumb-title", route.path ? "linked" : "", last(idx)), onClick: function (e) {
                            if (props.itemClick) {
                                props.itemClick(e, route);
                            }
                            else {
                                if (route.path) {
                                    linkTo(route.path, route.hash);
                                }
                            }
                        }, style: {
                            color: idx !== ((_b = (_a = props.routes) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1 ? "lightgray" : "#000",
                        } }, { children: route.title })), idx !== ((_d = (_c = props.routes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) - 1 ? (jsx("span", __assign({ style: { padding: "0 8px", color: "lightgray" } }, { children: "/" }))) : (void 0)] }));
        }) })));
};

export { EvpBreadCrumb as default };
