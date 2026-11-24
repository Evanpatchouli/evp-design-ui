import { __rest, __assign } from 'tslib';
import { jsx, Fragment } from 'react/jsx-runtime';
import CSS from '../evp-css/constant.js';

var Template = function (_a) {
    var children = _a.children;
    return jsx(Fragment, { children: children });
};
Template.FrostedGlass = function (_a) {
    var style = _a.style, background = _a.background, filterBlur = _a.filterBlur, radius = _a.radius, border = _a.border, borderWidth = _a.borderWidth, borderStyle = _a.borderStyle, borderColor = _a.borderColor, props = __rest(_a, ["style", "background", "filterBlur", "radius", "border", "borderWidth", "borderStyle", "borderColor"]);
    var FrostedGlassOptions = { background: background, filterBlur: filterBlur, radius: radius, border: border, borderWidth: borderWidth, borderStyle: borderStyle, borderColor: borderColor };
    return (jsx("div", __assign({}, props, { style: __assign(__assign({}, CSS.FrostedGlass(FrostedGlassOptions).style), style) }, { children: props.children })));
};
Template.Page = function (props) {
    // return <div {...CSS.Page()}>{props.children}</div>;
};

export { Template as default };
