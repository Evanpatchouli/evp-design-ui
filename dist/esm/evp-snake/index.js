import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpDom from '../evp-dom/index.js';
import React from 'react';

var EvpSnake = function (_a) {
    var classname = _a.class, props = __rest(_a, ["class"]);
    var children = props.children, _b = props.startFrom, startFrom = _b === void 0 ? "left" : _b;
    var getDirectionClass = function (index) {
        var isEvenRow = Math.floor(index / 3) % 2 === 0;
        if (startFrom === "left" || startFrom === "top") {
            return isEvenRow ? "row-left" : "row-right";
        }
        else {
            return isEvenRow ? "row-right" : "row-left";
        }
    };
    return (jsx(EvpDom, __assign({ class: classNames("evp-snake evp-snake-from-".concat(startFrom), classname) }, props, { children: React.Children.map(children, function (child, index) { return (jsx("div", __assign({ className: "evp-snake-item ".concat(getDirectionClass(index)) }, { children: child }), index)); }) })));
};

export { EvpSnake as default };
