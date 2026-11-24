import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import React from 'react';

var EvpWaterfalls = function (_a) {
    var className = _a.className; _a.style; var children = _a.children, props = __rest(_a, ["className", "style", "children"]);
    var columns = props.columns || 4;
    var nodes = React.Children.toArray(children);
    // split nodes into every column
    var columnsNodes = new Array(columns).fill(0).map(function () { return []; });
    nodes.forEach(function (node, index) {
        columnsNodes[index % columns].push(node);
    });
    console.log(columnsNodes[0]);
    return (jsx("div", __assign({ className: classNames("evp", "evp-waterfalls", className), style: {
            // @ts-ignore
            "--evp-waterfalls-columns": columns,
            "--gap": props.gap ? (typeof props.gap === "number" ? "".concat(props.gap, "px") : props.gap) : "8px",
        } }, props, { children: columnsNodes.map(function (nodes, index) { return (jsx("div", __assign({ className: "evp-waterfalls-column" }, { children: nodes }), index)); }) })));
};

export { EvpWaterfalls as default };
