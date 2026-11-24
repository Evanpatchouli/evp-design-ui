import { __assign } from 'tslib';
import { jsx, Fragment } from 'react/jsx-runtime';
import { Prism } from 'react-syntax-highlighter';
import * as Theme from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';

function EvpCode(props) {
    var _a, _b, _c, _d, _e, _f;
    // @ts-ignore
    var theme = Theme[(_a = props.theme) !== null && _a !== void 0 ? _a : "vscDarkPlus"];
    var $show = (_b = props.show) !== null && _b !== void 0 ? _b : true;
    return (jsx(Fragment, { children: $show ? (jsx(Prism, __assign({ language: (_c = props.lang) !== null && _c !== void 0 ? _c : "text", PreTag: (_d = props.PreTag) !== null && _d !== void 0 ? _d : "div", style: theme, customStyle: __assign({ borderRadius: 6 }, props.style), codeTagProps: __assign({ className: props.class }, props.codeTagProps), showLineNumbers: props.showLineNumbers, showInlineLineNumbers: props.showLineNumbers, startingLineNumber: props.startingLineNumber, lineNumberContainerStyle: props.lineNumberContainerStyle, lineNumberStyle: props.lineNumberStyle, wrapLines: props.wrapLines, wrapLongLines: props.wrapLongLines, lineProps: props.lineProps, renderer: props.renderer, CodeTag: props.CodeTag }, { children: (_f = (_e = props.children) === null || _e === void 0 ? void 0 : _e.replace(/^\r?\n/, "")) !== null && _f !== void 0 ? _f : "" }))) : (void 0) }));
}

export { EvpCode as default };
