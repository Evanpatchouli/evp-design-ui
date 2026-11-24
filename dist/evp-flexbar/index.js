'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var contentFixed = require('./content-fixed.js');
var labelFixed = require('./label-fixed.js');

function EvpFlexbar(props) {
    var _a;
    var fixedMode = (_a = props.fixedMode) !== null && _a !== void 0 ? _a : 'default';
    var render = function () {
        switch (fixedMode) {
            case 'content': return contentFixed["default"](props);
            case 'label': return labelFixed["default"](props);
            case 'default': return contentFixed["default"](props);
            default: return contentFixed["default"](props);
        }
    };
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: render() }));
}

exports["default"] = EvpFlexbar;
