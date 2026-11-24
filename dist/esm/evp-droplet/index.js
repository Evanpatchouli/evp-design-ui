import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { range } from '../utils/num.util.js';
import EvpDom from '../evp-dom/index.js';

var EvpDroplet = function (_a) {
    var className = _a.class, borderRadius = _a.borderRadius, wave = _a.wave, lightSpot = _a.lightSpot, lightSpotSize = _a.lightSpotSize, style = _a.style, children = _a.children, props = __rest(_a, ["class", "borderRadius", "wave", "lightSpot", "lightSpotSize", "style", "children"]);
    var _b = [Math.random() * 10, Math.random() * 10], ran1 = _b[0], ran2 = _b[1];
    var min = Math.min(Math.floor(ran1), Math.floor(ran2));
    var max = Math.max(Math.floor(ran1), Math.floor(ran2));
    var spotSetting = typeof lightSpotSize === "number" ? { min: lightSpotSize, max: lightSpotSize } : lightSpotSize;
    return (jsxs(EvpDom, __assign({ class: "evp-droplet ".concat(className !== null && className !== void 0 ? className : "").trim(), style: __assign({ borderRadius: borderRadius !== null && borderRadius !== void 0 ? borderRadius : "61% 39% 57% 43% / 46% 67% 33% 54%", 
            // @ts-ignore
            "--border-radius": borderRadius !== null && borderRadius !== void 0 ? borderRadius : "61% 39% 57% 43% / 46% 67% 33% 54%", animationName: wave === true ? void 0 : "none" }, style) }, props, { children: [children, lightSpot !== false &&
                (typeof lightSpot === "number" ? range(1, lightSpot) : range(min, max)).map(function () {
                    var _a, _b;
                    return (jsx("div", { className: "light-spot", style: {
                            left: "".concat(Math.random() * 100, "%"),
                            top: "".concat(Math.random() * 100, "%"),
                            width: "".concat(((Math.random() * ((_a = spotSetting === null || spotSetting === void 0 ? void 0 : spotSetting.min) !== null && _a !== void 0 ? _a : 4)) / 10) * ((_b = spotSetting === null || spotSetting === void 0 ? void 0 : spotSetting.max) !== null && _b !== void 0 ? _b : 12), "px"),
                            animationDuration: "".concat(2, "s"),
                            animationDelay: "".concat(Math.random() * 10, "s"),
                        } }));
                })] })));
};

export { EvpDroplet as default };
