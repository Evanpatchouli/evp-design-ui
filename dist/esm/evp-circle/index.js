import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import valParser from '../utils/val.parser.js';
import NumUtils from '../utils/num.util.js';
import eventParser from '../utils/event.parser.js';

var purifyProps = function (props) {
    props.class; props.children; props.items; props.schema; props.size; props.itemSize; props.style; props.mainProps; var rest = __rest(props, ["class", "children", "items", "schema", "size", "itemSize", "style", "mainProps"]);
    return rest;
};
function calculateRadius(d, x) {
    var r = (d / 2) * (1 - Math.cos((2 * Math.PI) / x));
    return r;
}
var EvpCircle = function (props) {
    var _a, _b;
    var mainProps = (function () {
        var _a;
        var _b = props.mainProps || {}; _b.className; var rest = __rest(_b, ["className"]);
        return {
            class: (_a = props.mainProps) === null || _a === void 0 ? void 0 : _a.className,
            rest: rest,
        };
    })();
    var items = (_a = props.items) !== null && _a !== void 0 ? _a : [].map(function (i, idx) { var _a, _b, _c; return (_b = (_a = props.schema) === null || _a === void 0 ? void 0 : _a.render) === null || _b === void 0 ? void 0 : _b.call(_a, i, idx, (_c = props.items) !== null && _c !== void 0 ? _c : []); });
    var itemsEvents = eventParser(props.schema);
    return (jsxs("div", __assign({ className: "evp-circle", style: __assign({ 
            // @ts-ignore
            "--evp-circle-width": valParser(props.size), "--_angle": "".concat(360 / items.length, "deg"), "--_length": "".concat(items.length), "--evp-circle-item-size": "".concat(props.itemSize
                ? valParser(props.itemSize)
                : "".concat(calculateRadius(NumUtils.pickNum(props.size).value, items.length) + NumUtils.pickNum(props.size).unit, ")")) }, props.style) }, purifyProps(props), { children: [items.map(function (i, idx) {
                var _a, _b, _c, _d, _e, _f, _g;
                return (jsx("div", __assign({ className: "evp-circle__item ".concat(((_a = props.schema) === null || _a === void 0 ? void 0 : _a.class) ? ((_b = props.schema) === null || _b === void 0 ? void 0 : _b.class) + " " : "", "evp-circle__item--").concat(i), style: __assign({ 
                        // @ts-ignore
                        "--i": idx }, (_c = props.schema) === null || _c === void 0 ? void 0 : _c.style) }, itemsEvents, { children: ((_d = props.schema) === null || _d === void 0 ? void 0 : _d.render) ? (_f = (_e = props.schema) === null || _e === void 0 ? void 0 : _e.render) === null || _f === void 0 ? void 0 : _f.call(_e, i, idx, (_g = props.items) !== null && _g !== void 0 ? _g : []) : i }), i));
            }), jsx("div", __assign({ className: "evp-circle__main ".concat((_b = mainProps.class) !== null && _b !== void 0 ? _b : "") }, mainProps.rest, { children: props.children }))] })));
};

export { EvpCircle as default };
