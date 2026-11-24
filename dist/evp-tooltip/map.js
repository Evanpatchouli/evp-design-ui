'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var transformMap = {
    vertical: {
        top: "0%",
        center: "-50%",
        bottom: "-100%",
    },
    horizontal: {
        left: "-100%",
        center: "-50%",
        right: "0%",
    },
};
var OffsetMap = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77;
    return {
        top: {
            top: "0%",
            left: "50%",
            transform: "translate(".concat((_c = transformMap.horizontal[(_b = (_a = props.transform) === null || _a === void 0 ? void 0 : _a.horizontal) !== null && _b !== void 0 ? _b : "center"]) !== null && _c !== void 0 ? _c : (_d = props.transform) === null || _d === void 0 ? void 0 : _d.horizontal, ", calc(").concat(transformMap.vertical[(_f = (_e = props.transform) === null || _e === void 0 ? void 0 : _e.vertical) !== null && _f !== void 0 ? _f : "bottom"], " - 4px))"),
        },
        topLeft: {
            top: "0%",
            left: "20%",
            transform: "translate(".concat((_j = transformMap.horizontal[(_h = (_g = props.transform) === null || _g === void 0 ? void 0 : _g.horizontal) !== null && _h !== void 0 ? _h : "center"]) !== null && _j !== void 0 ? _j : (_k = props.transform) === null || _k === void 0 ? void 0 : _k.horizontal, ", calc(").concat(transformMap.vertical[(_m = (_l = props.transform) === null || _l === void 0 ? void 0 : _l.vertical) !== null && _m !== void 0 ? _m : "bottom"], " - 4px))"),
        },
        topLeftCorner: {
            top: "0%",
            left: "0%",
            transform: "translate(".concat((_q = transformMap.horizontal[(_p = (_o = props.transform) === null || _o === void 0 ? void 0 : _o.horizontal) !== null && _p !== void 0 ? _p : "left"]) !== null && _q !== void 0 ? _q : (_r = props.transform) === null || _r === void 0 ? void 0 : _r.horizontal, ", calc(").concat(transformMap.vertical[(_t = (_s = props.transform) === null || _s === void 0 ? void 0 : _s.vertical) !== null && _t !== void 0 ? _t : "bottom"], " - 4px))"),
        },
        topRight: {
            top: "0%",
            left: "80%",
            transform: "translate(".concat((_w = transformMap.horizontal[(_v = (_u = props.transform) === null || _u === void 0 ? void 0 : _u.horizontal) !== null && _v !== void 0 ? _v : "center"]) !== null && _w !== void 0 ? _w : (_x = props.transform) === null || _x === void 0 ? void 0 : _x.horizontal, ", calc(").concat(transformMap.vertical[(_z = (_y = props.transform) === null || _y === void 0 ? void 0 : _y.vertical) !== null && _z !== void 0 ? _z : "bottom"], " - 4px))"),
        },
        topRightCorner: {
            top: "0%",
            left: "100%",
            transform: "translate(".concat((_2 = transformMap.horizontal[(_1 = (_0 = props.transform) === null || _0 === void 0 ? void 0 : _0.horizontal) !== null && _1 !== void 0 ? _1 : "right"]) !== null && _2 !== void 0 ? _2 : (_3 = props.transform) === null || _3 === void 0 ? void 0 : _3.horizontal, ", calc(").concat(transformMap.vertical[(_5 = (_4 = props.transform) === null || _4 === void 0 ? void 0 : _4.vertical) !== null && _5 !== void 0 ? _5 : "bottom"], " - 4px))"),
        },
        left: {
            left: "0%",
            top: "50%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_7 = (_6 = props.transform) === null || _6 === void 0 ? void 0 : _6.horizontal) !== null && _7 !== void 0 ? _7 : "left"]
                ? transformMap.horizontal[(_9 = (_8 = props.transform) === null || _8 === void 0 ? void 0 : _8.horizontal) !== null && _9 !== void 0 ? _9 : "left"] + " - 4px"
                : (_10 = props.transform) === null || _10 === void 0 ? void 0 : _10.horizontal, "), ").concat(transformMap.vertical[(_12 = (_11 = props.transform) === null || _11 === void 0 ? void 0 : _11.vertical) !== null && _12 !== void 0 ? _12 : "center"], ")"),
        },
        leftTop: {
            left: "0%",
            top: "20%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_14 = (_13 = props.transform) === null || _13 === void 0 ? void 0 : _13.horizontal) !== null && _14 !== void 0 ? _14 : "left"]
                ? transformMap.horizontal[(_16 = (_15 = props.transform) === null || _15 === void 0 ? void 0 : _15.horizontal) !== null && _16 !== void 0 ? _16 : "left"] + " - 4px"
                : (_17 = props.transform) === null || _17 === void 0 ? void 0 : _17.horizontal, "), ").concat(transformMap.vertical[(_19 = (_18 = props.transform) === null || _18 === void 0 ? void 0 : _18.vertical) !== null && _19 !== void 0 ? _19 : "center"], ")"),
        },
        leftBottom: {
            left: "0%",
            top: "80%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_21 = (_20 = props.transform) === null || _20 === void 0 ? void 0 : _20.horizontal) !== null && _21 !== void 0 ? _21 : "left"]
                ? transformMap.horizontal[(_23 = (_22 = props.transform) === null || _22 === void 0 ? void 0 : _22.horizontal) !== null && _23 !== void 0 ? _23 : "left"] + " - 4px"
                : (_24 = props.transform) === null || _24 === void 0 ? void 0 : _24.horizontal, "), ").concat(transformMap.vertical[(_26 = (_25 = props.transform) === null || _25 === void 0 ? void 0 : _25.vertical) !== null && _26 !== void 0 ? _26 : "center"], ")"),
        },
        right: {
            left: "100%",
            top: "50%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_28 = (_27 = props.transform) === null || _27 === void 0 ? void 0 : _27.horizontal) !== null && _28 !== void 0 ? _28 : "right"]
                ? transformMap.horizontal[(_30 = (_29 = props.transform) === null || _29 === void 0 ? void 0 : _29.horizontal) !== null && _30 !== void 0 ? _30 : "right"] + " + 4px"
                : (_31 = props.transform) === null || _31 === void 0 ? void 0 : _31.horizontal, "), ").concat(transformMap.vertical[(_33 = (_32 = props.transform) === null || _32 === void 0 ? void 0 : _32.vertical) !== null && _33 !== void 0 ? _33 : "center"], ")"),
        },
        rightTop: {
            left: "100%",
            top: "20%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_35 = (_34 = props.transform) === null || _34 === void 0 ? void 0 : _34.horizontal) !== null && _35 !== void 0 ? _35 : "right"]
                ? transformMap.horizontal[(_37 = (_36 = props.transform) === null || _36 === void 0 ? void 0 : _36.horizontal) !== null && _37 !== void 0 ? _37 : "right"] + " + 4px"
                : (_38 = props.transform) === null || _38 === void 0 ? void 0 : _38.horizontal, "), ").concat(transformMap.vertical[(_40 = (_39 = props.transform) === null || _39 === void 0 ? void 0 : _39.vertical) !== null && _40 !== void 0 ? _40 : "center"], ")"),
        },
        rightBottom: {
            left: "100%",
            top: "80%",
            transform: "translate(calc(".concat(transformMap.horizontal[(_42 = (_41 = props.transform) === null || _41 === void 0 ? void 0 : _41.horizontal) !== null && _42 !== void 0 ? _42 : "right"]
                ? transformMap.horizontal[(_44 = (_43 = props.transform) === null || _43 === void 0 ? void 0 : _43.horizontal) !== null && _44 !== void 0 ? _44 : "right"] + " + 4px"
                : (_45 = props.transform) === null || _45 === void 0 ? void 0 : _45.horizontal, "), ").concat(transformMap.vertical[(_47 = (_46 = props.transform) === null || _46 === void 0 ? void 0 : _46.vertical) !== null && _47 !== void 0 ? _47 : "center"], ")"),
        },
        bottom: {
            top: "100%",
            left: "50%",
            transform: "translate(".concat((_50 = transformMap.horizontal[(_49 = (_48 = props.transform) === null || _48 === void 0 ? void 0 : _48.horizontal) !== null && _49 !== void 0 ? _49 : "center"]) !== null && _50 !== void 0 ? _50 : (_51 = props.transform) === null || _51 === void 0 ? void 0 : _51.horizontal, ", calc(-").concat(transformMap.vertical[(_53 = (_52 = props.transform) === null || _52 === void 0 ? void 0 : _52.vertical) !== null && _53 !== void 0 ? _53 : "top"], " + 4px))"),
        },
        bottomLeft: {
            top: "100%",
            left: "20%",
            transform: "translate(".concat((_56 = transformMap.horizontal[(_55 = (_54 = props.transform) === null || _54 === void 0 ? void 0 : _54.horizontal) !== null && _55 !== void 0 ? _55 : "center"]) !== null && _56 !== void 0 ? _56 : (_57 = props.transform) === null || _57 === void 0 ? void 0 : _57.horizontal, ", calc(-").concat(transformMap.vertical[(_59 = (_58 = props.transform) === null || _58 === void 0 ? void 0 : _58.vertical) !== null && _59 !== void 0 ? _59 : "top"], " + 4px))"),
        },
        bottomLeftCorner: {
            top: "100%",
            left: "0%",
            transform: "translate(".concat((_62 = transformMap.horizontal[(_61 = (_60 = props.transform) === null || _60 === void 0 ? void 0 : _60.horizontal) !== null && _61 !== void 0 ? _61 : "left"]) !== null && _62 !== void 0 ? _62 : (_63 = props.transform) === null || _63 === void 0 ? void 0 : _63.horizontal, ", calc(-").concat(transformMap.vertical[(_65 = (_64 = props.transform) === null || _64 === void 0 ? void 0 : _64.vertical) !== null && _65 !== void 0 ? _65 : "top"], " + 4px))"),
        },
        bottomRight: {
            top: "100%",
            left: "80%",
            transform: "translate(".concat((_68 = transformMap.horizontal[(_67 = (_66 = props.transform) === null || _66 === void 0 ? void 0 : _66.horizontal) !== null && _67 !== void 0 ? _67 : "center"]) !== null && _68 !== void 0 ? _68 : (_69 = props.transform) === null || _69 === void 0 ? void 0 : _69.horizontal, ", calc(-").concat(transformMap.vertical[(_71 = (_70 = props.transform) === null || _70 === void 0 ? void 0 : _70.vertical) !== null && _71 !== void 0 ? _71 : "top"], " + 4px))"),
        },
        bottomRightCorner: {
            top: "100%",
            left: "100%",
            transform: "translate(".concat((_74 = transformMap.horizontal[(_73 = (_72 = props.transform) === null || _72 === void 0 ? void 0 : _72.horizontal) !== null && _73 !== void 0 ? _73 : "right"]) !== null && _74 !== void 0 ? _74 : (_75 = props.transform) === null || _75 === void 0 ? void 0 : _75.horizontal, ", calc(-").concat(transformMap.vertical[(_77 = (_76 = props.transform) === null || _76 === void 0 ? void 0 : _76.vertical) !== null && _77 !== void 0 ? _77 : "top"], " + 4px))"),
        },
    };
};

exports.OffsetMap = OffsetMap;
exports.transformMap = transformMap;
