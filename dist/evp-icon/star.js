'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var props_parser = require('../utils/props.parser.js');

var Star = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    return (jsxRuntime.jsx("div", tslib.__assign({ className: "evp icon ".concat((_a = props.class) !== null && _a !== void 0 ? _a : "").trim(), onClick: props.onClick, style: tslib.__assign({ visibility: ((_b = props.$visibleSync) !== null && _b !== void 0 ? _b : true) ? "visible" : "hidden", display: ((_c = props.$displaySync) !== null && _c !== void 0 ? _c : true) ? "flex" : "none", strokeWidth: (_d = props.strokeWidth) !== null && _d !== void 0 ? _d : 4, stroke: (_e = props.color) !== null && _e !== void 0 ? _e : "#333", fill: (_f = props.fill) !== null && _f !== void 0 ? _f : "#333", cursor: (_g = props.cursor) !== null && _g !== void 0 ? _g : (props.pointer ? "pointer" : "unset"), width: props.w, height: props.h, padding: (_h = props_parser.propsParser.get("pd")) === null || _h === void 0 ? void 0 : _h(props.pd), margin: (_j = props_parser.propsParser.get("mg")) === null || _j === void 0 ? void 0 : _j(props.mg), border: props.border }, props.style) }, { children: jsxRuntime.jsx("svg", tslib.__assign({ viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", width: (_k = props.radius) !== null && _k !== void 0 ? _k : 24, height: (_l = props.radius) !== null && _l !== void 0 ? _l : 24 }, { children: jsxRuntime.jsx("path", { d: "M957.111079 403.480424c-3.927449-11.669784-14.447037-19.86442-26.723641-20.816095L647.68068 360.749204 540.183388 84.126003c-4.586458-11.803837-15.951297-19.579941-28.614711-19.579941s-24.02723 7.776104-28.614711 19.579941L375.458719 360.749204l-282.708803 21.915126c-12.276604 0.951675-22.796192 9.146311-26.723641 20.816095-3.927449 11.669784-0.50142 24.557302 8.701173 32.737612l217.547735 193.358823-67.980277 291.298436c-2.848884 12.20702 2.009773 24.919553 12.273535 32.114418 10.264784 7.195889 23.87271 7.42818 34.375925 0.586354l240.624313-156.709111 240.625336 156.709111c5.099135 3.320629 10.92891 4.974291 16.752546 4.974291 6.173606 0 12.342096-1.858324 17.623379-5.561669 10.263761-7.194866 15.122419-19.907399 12.273535-32.114418l-67.980277-291.299459L948.409906 436.218036C957.613522 428.037726 961.037505 415.150208 957.111079 403.480424z", fill: (_m = props.fill) !== null && _m !== void 0 ? _m : "#333" }) })) })));
};

exports["default"] = Star;
