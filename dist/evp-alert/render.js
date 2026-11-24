'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var client = require('react-dom/client');

var root;
function render(dom) {
    if (!root) {
        var host = document.createElement("div");
        document.body.appendChild(host);
        root = client.createRoot(host);
    }
    root.render(dom);
}
function clearAlert() {
    root === null || root === void 0 ? void 0 : root.render(null);
}

exports.clearAlert = clearAlert;
exports["default"] = render;
