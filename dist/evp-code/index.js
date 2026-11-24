'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var reactSyntaxHighlighter = require('react-syntax-highlighter');
var Theme = require('react-syntax-highlighter/dist/cjs/styles/prism/index.js');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var Theme__namespace = /*#__PURE__*/_interopNamespace(Theme);

function EvpCode(props) {
    var _a, _b, _c, _d, _e, _f;
    // @ts-ignore
    var theme = Theme__namespace[(_a = props.theme) !== null && _a !== void 0 ? _a : "vscDarkPlus"];
    var $show = (_b = props.show) !== null && _b !== void 0 ? _b : true;
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: $show ? (jsxRuntime.jsx(reactSyntaxHighlighter.Prism, tslib.__assign({ language: (_c = props.lang) !== null && _c !== void 0 ? _c : "text", PreTag: (_d = props.PreTag) !== null && _d !== void 0 ? _d : "div", style: theme, customStyle: tslib.__assign({ borderRadius: 6 }, props.style), codeTagProps: tslib.__assign({ className: props.class }, props.codeTagProps), showLineNumbers: props.showLineNumbers, showInlineLineNumbers: props.showLineNumbers, startingLineNumber: props.startingLineNumber, lineNumberContainerStyle: props.lineNumberContainerStyle, lineNumberStyle: props.lineNumberStyle, wrapLines: props.wrapLines, wrapLongLines: props.wrapLongLines, lineProps: props.lineProps, renderer: props.renderer, CodeTag: props.CodeTag }, { children: (_f = (_e = props.children) === null || _e === void 0 ? void 0 : _e.replace(/^\r?\n/, "")) !== null && _f !== void 0 ? _f : "" }))) : (void 0) }));
}

exports["default"] = EvpCode;
