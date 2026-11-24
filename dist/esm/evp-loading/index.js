import { __rest, __assign } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import classNames from 'classnames';

function WaveLoading(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsxs("div", __assign({ className: "wave" }, { children: [jsx("span", {}), jsx("span", {}), jsx("span", {}), jsx("span", {})] })) })));
}
function BreatheSpin(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsx("div", { className: "breathe-spin" }) })));
}
function Grid(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsxs("div", __assign({ className: "grid" }, { children: [jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {}), jsx("div", {})] })) })));
}
function Spin(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsx("div", { className: "spin" }) })));
}
function Spin2(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsx("div", { className: "spin2" }) })));
}
function SpinDot(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsxs("div", __assign({ className: "spin-dot" }, { children: [jsx("div", { className: "sk-circle1 sk-child" }), jsx("div", { className: "sk-circle2 sk-child" }), jsx("div", { className: "sk-circle3 sk-child" }), jsx("div", { className: "sk-circle4 sk-child" }), jsx("div", { className: "sk-circle5 sk-child" }), jsx("div", { className: "sk-circle6 sk-child" }), jsx("div", { className: "sk-circle7 sk-child" }), jsx("div", { className: "sk-circle8 sk-child" }), jsx("div", { className: "sk-circle9 sk-child" }), jsx("div", { className: "sk-circle10 sk-child" }), jsx("div", { className: "sk-circle11 sk-child" }), jsx("div", { className: "sk-circle12 sk-child" })] })) })));
}
function Chase(props) {
    var className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsxs("div", __assign({ className: "sk-chase" }, { children: [jsx("div", { className: "sk-chase-dot" }), jsx("div", { className: "sk-chase-dot" }), jsx("div", { className: "sk-chase-dot" }), jsx("div", { className: "sk-chase-dot" }), jsx("div", { className: "sk-chase-dot" }), jsx("div", { className: "sk-chase-dot" })] })) })));
}
function Text(props) {
    var weight = props.weight, className = props.className, color = props.color, style = props.style, size = props.size, rest = __rest(props, ["weight", "className", "color", "style", "size"]);
    return (jsx("div", __assign({ className: classNames("evp-loading", className), style: __assign(__assign({}, style), { fontSize: size
                ? typeof size === "number"
                    ? "".concat(size, "px")
                    : size
                : undefined, 
            // @ts-ignore
            "--loading-color": color !== null && color !== void 0 ? color : "#3cefff" }) }, rest, { children: jsx("div", { className: classNames("text", weight !== null && weight !== void 0 ? weight : "normal") }) })));
}
var EvpLoading = {
    Wave: WaveLoading,
    BreatheSpin: BreatheSpin,
    Grid: Grid,
    Spin: Spin,
    Spin2: Spin2,
    SpinDot: SpinDot,
    Chase: Chase,
    Text: Text,
};

export { EvpLoading as default };
