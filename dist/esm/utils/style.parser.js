import cursorParser from './cursor.parser.js';
import { marginParser } from './margin.parser.js';
import { paddingParser } from './padding.parser.js';
import RotateParser from './rotate.parser.js';
import valParser from './val.parser.js';

var spacingKey = /^(mg|pd)([trbl]?)_([^_]+)$/;
var sideIndex = { t: 0, r: 1, b: 2, l: 3 };
function spacingProps(props) {
    var _a;
    var computed = {};
    if (props.mg != null && props.pd != null)
        return computed;
    for (var _i = 0, _b = Object.keys(props); _i < _b.length; _i++) {
        var key = _b[_i];
        if (!key.startsWith("mg") && !key.startsWith("pd"))
            continue;
        var match = spacingKey.exec(key);
        if (!match || !props[key])
            continue;
        var kind = match[1];
        if (props[kind] != null)
            continue;
        var value = Number(match[3]);
        if (!Number.isFinite(value))
            continue;
        var sides = (_a = computed[kind]) !== null && _a !== void 0 ? _a : (computed[kind] = [0, 0, 0, 0]);
        if (match[2]) {
            sides[sideIndex[match[2]]] += value;
        }
        else {
            for (var i = 0; i < sides.length; i++)
                sides[i] += value;
        }
    }
    return computed;
}
function StylePropsParser(props) {
    var _a, _b;
    var spacing = spacingProps(props);
    var style = {
        cursor: cursorParser(props),
        color: props.color,
        backgroundColor: props.bgColor,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        border: props.border,
        boxShadow: props.boxShadow,
        zIndex: props.zIndex,
        position: props.position,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
        display: props.display,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        width: props.w,
        height: props.h,
        padding: paddingParser((_a = props.pd) !== null && _a !== void 0 ? _a : spacing.pd),
        margin: marginParser((_b = props.mg) !== null && _b !== void 0 ? _b : spacing.mg),
        rotate: RotateParser(props.rotate),
        gap: valParser(props.gap),
        transform: props.transform,
        transition: props.transition,
        scale: props.scale === undefined ? undefined : String(props.scale),
    };
    if (props.style) {
        for (var _i = 0, _c = Object.entries(props.style); _i < _c.length; _i++) {
            var _d = _c[_i], key = _d[0], value = _d[1];
            if (value !== undefined)
                style[key] = value;
        }
    }
    return style;
}

export { StylePropsParser as default };
