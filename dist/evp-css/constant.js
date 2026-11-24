'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var frontedGlass = require('./fronted-glass.js');
var centered = require('./centered.js');

// import { Hintable, Indexable } from "../utils";
var Overspread = function () {
    return {
        style: {
            width: "100%",
            height: "100%",
        },
    };
};
Overspread.width = "100%";
Overspread.height = "100%";
var ShineText = function () {
    return {
        style: {
            textShadow: "\n        0 0 1px #fff,\n        0 0 2px #fff,\n        0 0 2px #fff,\n        0 0 3px #00a67c,\n        0 0 4px #00a67c,\n        0 0 5px #00a67c\n        ",
        },
    };
};
ShineText.textShadow = "\n0 0 1px #fff,\n0 0 2px #fff,\n0 0 2px #fff,\n0 0 3px #00a67c,\n0 0 4px #00a67c,\n0 0 5px #00a67c\n";
// @ts-ignore
// const CSS: Indexable<Hintable<CssOptions>, (...args: any[]) => React.CSSProperties> = {
var CSS = {
    FrostedGlass: frontedGlass["default"],
    ShineText: ShineText,
    Centred: centered["default"],
    Overspread: Overspread,
};

exports["default"] = CSS;
