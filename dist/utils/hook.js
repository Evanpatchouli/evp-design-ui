'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('./reactive/context.js');
var model = require('./reactive/model.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

var useStore = function (initialState) {
    var _a = React__default["default"].useState(initialState), state = _a[0], setState = _a[1];
    return {
        state: state,
        setState: setState,
    };
};
var useSync = function (store) {
    var useSyncEffect = function (callbacks) {
        React__default["default"].useEffect(function () {
            var dispose = store.setState;
            store.setState = function (newState) {
                dispose(newState);
                callbacks.forEach(function (callback) { return callback(newState); });
            };
            return function () {
                store.setState = dispose;
            };
        }, [store, callbacks]);
    };
    return {
        then: useSyncEffect,
    };
};

exports.Reactive = model.Reactive;
exports.useStore = useStore;
exports.useSync = useSync;
