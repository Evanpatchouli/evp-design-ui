'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var model = require('./model.js');

var createReactiveContext = function (initialValue) {
    var reactiveObject = new model.Reactive(initialValue);
    return React.createContext(reactiveObject);
};
var ReactiveCtx = createReactiveContext();

exports.createReactiveContext = createReactiveContext;
exports["default"] = ReactiveCtx;
