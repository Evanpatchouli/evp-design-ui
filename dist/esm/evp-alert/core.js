import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import Alert from './alert.js';
import render from './render.js';

var core = {
    alert: function (content, options) {
        render(jsx(Alert, __assign({ content: content }, options)));
    },
};

export { core as default };
