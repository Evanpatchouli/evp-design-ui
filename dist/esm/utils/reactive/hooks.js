import React from 'react';
import { Reactive } from './model.js';
import ReactiveCtx from './context.js';

function listen(target) {
    return {
        then: function () {
            var listeners = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                listeners[_i] = arguments[_i];
            }
            return target.subscribe(function (value) { return listeners.forEach(function (listener) { return listener(value); }); });
        },
    };
}
function useSnapshot(store) {
    var subscribe = React.useCallback(function (notify) { return store.subscribe(notify); }, [store]);
    var read = React.useCallback(function () { return store.value; }, [store]);
    React.useSyncExternalStore(subscribe, read, read);
}
function useLocalStore(initialValue) {
    var store = React.useState(function () { return new Reactive(initialValue); })[0];
    return store;
}
function Reactify(initialValue) {
    var store = useLocalStore(initialValue);
    useSnapshot(store);
    return store;
}
var ReactifyMemo = Reactify;
var reactive = Reactify;
var reactiveMemo = Reactify;
function useReactive(initialValue) {
    var local = useLocalStore(initialValue);
    var inherited = React.useContext(ReactiveCtx);
    var store = initialValue == null && inherited ? inherited : local;
    useSnapshot(store);
    return store;
}
function useReativeContext(context) {
    var inherited = React.useContext(context || ReactiveCtx);
    var fallback = useLocalStore(undefined);
    var store = inherited !== null && inherited !== void 0 ? inherited : fallback;
    useSnapshot(store);
    return store;
}
function useReactiveRef(initialValue) {
    var store = useReactive(initialValue);
    var ref = React.useRef(store);
    ref.current = store;
    return ref;
}

export { Reactify, ReactifyMemo, listen, reactive, reactiveMemo, useReactive, useReactiveRef, useReativeContext };
