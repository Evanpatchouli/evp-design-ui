import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import valParser from '../utils/val.parser.js';
import { parseSize } from './parser.js';

var EvpTitle = function (_a) {
    var _b;
    var className = _a.className, id = _a.id, stressed = _a.stressed, stressLineColor = _a.stressLineColor, size = _a.size, weight = _a.weight, fontSize = _a.fontSize, underline = _a.underline, style = _a.style, props = __rest(_a, ["className", "id", "stressed", "stressLineColor", "size", "weight", "fontSize", "underline", "style"]);
    var _fontSize = (_b = style === null || style === void 0 ? void 0 : style.fontSize) !== null && _b !== void 0 ? _b : fontSize;
    return (jsxs("div", __assign({ className: classNames("evp", "evp-title", className), id: id, style: {
            // @ts-ignore
            "--fontSize": valParser(_fontSize !== null && _fontSize !== void 0 ? _fontSize : parseSize(size)),
        } }, { children: [stressed ? (jsx("div", { className: "evp-title__left-stresses-line", style: {
                    // @ts-ignore
                    "--bgColor": stressLineColor,
                } })) : null, jsx("div", __assign({ className: "evp-title__main", style: (function () {
                    var _a = style !== null && style !== void 0 ? style : {}; _a.fontSize; var rest = __rest(_a, ["fontSize"]);
                    return __assign({ textDecorationLine: underline === true ? "underline" : underline || "none", fontWeight: weight !== null && weight !== void 0 ? weight : "bold" }, rest);
                })() }, props))] })));
};

export { EvpTitle as default };
