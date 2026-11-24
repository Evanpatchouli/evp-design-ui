import React from 'react';
import './reactive/context.js';
export { Reactive } from './reactive/model.js';

var useStore = function (initialState) {
    var _a = React.useState(initialState), state = _a[0], setState = _a[1];
    return {
        state: state,
        setState: setState,
    };
};
var useSync = function (store) {
    var useSyncEffect = function (callbacks) {
        React.useEffect(function () {
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

export { useStore, useSync };
