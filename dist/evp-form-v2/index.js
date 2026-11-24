'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var hooks = require('./hooks.js');
var context = require('./context.js');

function EvpForm(props) {
    var _a;
    var ownedRef = hooks["default"]();
    var formRef = (_a = props.formRef) !== null && _a !== void 0 ? _a : ownedRef;
    var form = formRef.current;
    hooks.useFormLayoutEffect(function () {
        form.set$Submit(props.$submit);
        return function () { return form.set$Submit(undefined); };
    }, [form, props.$submit]);
    return (jsxRuntime.jsx("form", tslib.__assign({ onSubmit: function (e) {
            e.preventDefault();
            form.submit();
        }, style: props.style }, { children: jsxRuntime.jsx(context["default"].Provider, tslib.__assign({ value: form }, { children: props.children })) })));
}

exports["default"] = EvpForm;
