import { useEffect, useLayoutEffect, useRef } from 'react';

// Form data and its submit handler must be ready before descendants' passive effects.
var useFormLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
var FormStore = /** @class */ (function () {
    function FormStore() {
        var _this = this;
        this.store = new Map();
        this.set$Submit = function (handler) {
            _this.$submit = handler;
        };
        this.register = function (entity) {
            var _a;
            var field = (_a = _this.store.get(entity.name)) !== null && _a !== void 0 ? _a : { value: entity.value, owners: 0 };
            field.owners++;
            _this.store.set(entity.name, field);
            var registered = true;
            return function () {
                if (!registered)
                    return;
                registered = false;
                if (--field.owners === 0)
                    _this.store.delete(entity.name);
            };
        };
        this.get = function (name) {
            var _a;
            return name === undefined ? undefined : (_a = _this.store.get(name)) === null || _a === void 0 ? void 0 : _a.value;
        };
        this.set = function (name, value) {
            var item = _this.store.get(name);
            if (item) {
                item.value = value;
            }
            else {
                throw new Error("Field ".concat(name, " not exists on form"));
            }
        };
        this.gets = function (names) {
            var keys = (names === null || names === void 0 ? void 0 : names.length) ? names : Array.from(_this.store.keys());
            return Object.fromEntries(keys.map(function (key) { var _a; return [key, (_a = _this.store.get(key)) === null || _a === void 0 ? void 0 : _a.value]; }));
        };
        this.sets = function (map) {
            if (map) {
                Object.keys(map).forEach(function (key) {
                    _this.set(key, map[key]);
                });
            }
        };
        this.submit = function () {
            var _a;
            var formData = _this.gets();
            (_a = _this.$submit) === null || _a === void 0 ? void 0 : _a.call(_this, formData);
        };
    }
    return FormStore;
}());
var useForm = function () {
    var formRef = useRef();
    if (!formRef.current) {
        var formStore = new FormStore();
        formRef.current = formStore;
    }
    return formRef;
};
function useFormField(form, name, value) {
    useFormLayoutEffect(function () {
        if (form && name)
            return form.register({ name: name });
    }, [form, name]);
    useFormLayoutEffect(function () {
        if (form && name)
            form.set(name, value);
    }, [form, name, value]);
}

export { FormStore, useForm as default, useFormField, useFormLayoutEffect };
