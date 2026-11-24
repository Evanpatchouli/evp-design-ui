import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import useForm, { useFormLayoutEffect } from './hooks.js';
import EvpFormContext from './context.js';

function EvpForm(props) {
    var _a;
    var ownedRef = useForm();
    var formRef = (_a = props.formRef) !== null && _a !== void 0 ? _a : ownedRef;
    var form = formRef.current;
    useFormLayoutEffect(function () {
        form.set$Submit(props.$submit);
        return function () { return form.set$Submit(undefined); };
    }, [form, props.$submit]);
    return (jsx("form", __assign({ onSubmit: function (e) {
            e.preventDefault();
            form.submit();
        }, style: props.style }, { children: jsx(EvpFormContext.Provider, __assign({ value: form }, { children: props.children })) })));
}

export { EvpForm as default };
