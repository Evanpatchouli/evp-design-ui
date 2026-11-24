import { createContext } from 'react';
import { Reactive } from './model.js';

var createReactiveContext = function (initialValue) {
    var reactiveObject = new Reactive(initialValue);
    return createContext(reactiveObject);
};
var ReactiveCtx = createReactiveContext();

export { createReactiveContext, ReactiveCtx as default };
