import { __assign } from 'tslib';
import { jsx, Fragment } from 'react/jsx-runtime';
import cloneDeep from 'lodash/cloneDeep.js';

function purifyProps(props) {
    var $props = cloneDeep(props);
    // @ts-ignore
    delete $props.id;
    delete $props.class;
    delete $props.children;
    delete $props.hash;
    delete $props.block;
    delete $props.inline;
    if (!$props.hash) {
        delete $props.onClick;
    }
    var _$props = $props;
    return _$props;
}
/**
 * Wrap some elements to jump to an anchor while clicked
 */
function EvpAnchor(props) {
    var _a, _b;
    var scrollTo = function (id) {
        var _a, _b, _c, _d;
        (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({
            // @ts-ignore
            behavior: (_b = props.behavior) !== null && _b !== void 0 ? _b : "smooth",
            block: (_c = props.block) !== null && _c !== void 0 ? _c : "start",
            inline: (_d = props.inline) !== null && _d !== void 0 ? _d : "nearest",
        });
    };
    var $props = purifyProps(props);
    return (jsx(Fragment, { children: props.hash === true ? (jsx("a", __assign({ href: "#".concat(props.id), className: "evp-anchor-a ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim() }, $props, { children: props.children }))) : (jsx("div", __assign({ className: "evp-anchor-div ".concat((_b = props.class) !== null && _b !== void 0 ? _b : "").trim(), onClick: function (e) {
                var _a;
                scrollTo(props.id);
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
            } }, $props, { children: props.children }))) }));
}

export { EvpAnchor as default };
