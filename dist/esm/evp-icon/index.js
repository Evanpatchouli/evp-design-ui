import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import SvgIcons from './svg.icons.js';
import { propsParser } from '../utils/props.parser.js';

var IconMap = {
    "": "",
    TRUE_CIRCLE: "TrueCircle",
    SUCCESS: "Success",
    FALSE_CIRCLE: "FalseCircle",
    CLOSE_CIRCLE: "CloseCircle",
    ERROR: "Error",
    UNKNOWN: "Unknown",
    CLOSE: "Close",
    HELP: "Help",
    WARN: "Warn",
    INFO: "Info",
    USER: "User",
    LOCK: "Lock",
    PASSWORDS: "Lock",
    ALL: "All",
    WATERFALLS_H: "WaterfallsH",
    WATERFALLS_V: "WaterfallsV",
    UP: "Up",
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
    UNCHECKEDBOX: "UncheckedBox",
    CHECKEDBOX: "CheckedBox",
    MALE: "Male",
    FEMALE: "Female",
    COMPONENT: "Component",
    GITHUB: "Github",
    GITEE: "Gitee",
    EVP: "Evp",
    STAR: "Star",
};
/** EvpIcon: not raw SVG but with a `<div><div/>` wrapper, key's value is props.name or the unique icon key
 * @param props.name this can override the icon key
 * @param props`[key]` should be valid incon keys like "true_circle", "false_circle ...
 */
var EvpIcon = function (props) {
    var _a, _b, _c;
    // let _props: {[x:string]:string} = props as {[x:string]:string};
    var key = "";
    var keyFilter = [
        "$click",
        "style",
        "strokeWidth",
        "color",
        "fill",
        "radius",
        "pointer",
        "cursor",
        "w",
        "h",
        "pd",
        "mg",
    ];
    if (props.name) {
        key = props.name.toUpperCase();
    }
    else {
        var keys = Object.keys(props).filter(function (k) { return props[k] && !keyFilter.includes(k); });
        if (keys.length === 0) {
            throw new Error("EvpIcon should have name attribute or one valid icon key!");
        }
        else if (keys.length > 1) {
            throw new Error("EvpIcon should have only one valid icon key!");
        }
        else {
            key = keys[0].toUpperCase();
        }
    }
    // console.log('key:', IconMap[key])
    var svgType = IconMap[key];
    var Icon = SvgIcons[svgType];
    if (!Icon) {
        throw new Error("SvgIcon is undefined");
    }
    return (jsx(Icon, { onClick: props.$click, class: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), "$visibleSync": props.$visibleSync, "$displaySync": props.$displaySync, strokeWidth: props.strokeWidth, color: props.color, fill: props.fill, radius: props.radius, pointer: props.pointer, cursor: props.cursor, style: __assign({ width: props.w, height: props.h, padding: (_b = propsParser.get("pd")) === null || _b === void 0 ? void 0 : _b(props.pd), margin: (_c = propsParser.get("mg")) === null || _c === void 0 ? void 0 : _c(props.mg) }, props.style) }));
};

export { EvpIcon as default };
