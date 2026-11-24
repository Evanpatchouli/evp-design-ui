'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var model = require('./model.js');
var context = require('./context.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

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
    var subscribe = React__default["default"].useCallback(function (notify) { return store.subscribe(notify); }, [store]);
    var read = React__default["default"].useCallback(function () { return store.value; }, [store]);
    React__default["default"].useSyncExternalStore(subscribe, read, read);
}
function useLocalStore(initialValue) {
    var store = React__default["default"].useState(function () { return new model.Reactive(initialValue); })[0];
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
    var inherited = React__default["default"].useContext(context["default"]);
    var store = initialValue == null && inherited ? inherited : local;
    useSnapshot(store);
    return store;
}
function useReativeContext(context$1) {
    var inherited = React__default["default"].useContext(context$1 || context["default"]);
    var fallback = useLocalStore(undefined);
    var store = inherited !== null && inherited !== void 0 ? inherited : fallback;
    useSnapshot(store);
    return store;
}
function useReactiveRef(initialValue) {
    var store = useReactive(initialValue);
    var ref = React__default["default"].useRef(store);
    ref.current = store;
    return ref;
}

exports.Reactify = Reactify;
exports.ReactifyMemo = ReactifyMemo;
exports.listen = listen;
exports.reactive = reactive;
exports.reactiveMemo = reactiveMemo;
exports.useReactive = useReactive;
exports.useReactiveRef = useReactiveRef;
exports.useReativeContext = useReativeContext;
