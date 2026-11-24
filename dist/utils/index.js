'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var hook = require('./hook.js');
var context = require('./reactive/context.js');
var hooks = require('./reactive/hooks.js');
var model = require('./reactive/model.js');
var index$1 = require('./useCatch/index.js');

/* eslint-disable @typescript-eslint/no-unused-vars */
/** This func is to unassign undefined properties from an indexable object, especially invoked during parsing props */
function shift(obj) {
    if (obj && typeof obj === "object") {
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            if (obj[key] === undefined) {
                delete obj[key];
            }
        });
    }
    return obj;
}
function boolStringfy(value) {
    if (value === void 0) { value = false; }
    return value ? "true" : "false";
}
/**
 * Is a given value a hex color lengthed 7
 * @returns
 */
function isSixBitHexColor(color) {
    var _isHexColor = color.startsWith("#") && // to check is it a 7 lengthed hex color
        color.length === 7;
    return _isHexColor;
}
function hexAlpha(color, alpha) {
    if (isSixBitHexColor(color)) {
        return color + alpha;
    }
    return color;
}
var Var = /** @class */ (function () {
    function Var(name, value) {
        if (value === void 0) { value = void 0; }
        this.name = name;
        this.value = value;
    }
    Var.prototype.json = function () {
        var _a;
        return _a = {},
            _a[this.name] = this.value,
            _a;
    };
    Var.prototype.stringify = function () {
        return JSON.stringify(this.json());
    };
    Var.fromString = function (str) {
        var _a = str.split(":"), name = _a[0], value = _a[1];
        return new Var(name.trim(), value.trim());
    };
    Var.fromObject = function (obj) {
        return new Var(obj.name, obj.value);
    };
    Var.prototype.toString = function () {
        return "var(".concat(this.name, ")");
    };
    return Var;
}());
/**
 * Bing variables from `source Object` to `target Function`
 * @returns
 */
var bindFC = function (source, target) {
    if (source === void 0) { source = {}; }
    Object.keys(source).forEach(function (key) {
        // @ts-ignore
        target[key] = source[key];
    });
    // @ts-ignore
    return target;
};

exports.useStore = hook.useStore;
exports.useSync = hook.useSync;
exports.ReactiveCtx = context["default"];
exports.createReactiveContext = context.createReactiveContext;
exports.Reactify = hooks.Reactify;
exports.ReactifyMemo = hooks.ReactifyMemo;
exports.listen = hooks.listen;
exports.reactive = hooks.reactive;
exports.reactiveMemo = hooks.reactiveMemo;
exports.useReactive = hooks.useReactive;
exports.useReactiveRef = hooks.useReactiveRef;
exports.useReativeContext = hooks.useReativeContext;
exports.Reactive = model.Reactive;
exports.useCatch = index$1.useCatch;
exports.Var = Var;
exports.bindFC = bindFC;
exports.boolStringfy = boolStringfy;
exports.hexAlpha = hexAlpha;
exports.isSixBitHexColor = isSixBitHexColor;
exports.shift = shift;
