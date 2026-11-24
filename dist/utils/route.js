'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var linkTo = function (path, hash) {
    var _a;
    if (path) {
        if (typeof path === "string" && path) {
            if (window.location.hash || hash) {
                window.location.hash = path;
            }
            else {
                window.location.assign(path);
            }
        }
        else if (typeof path === "object" && path.path) {
            if (window.location.hash || ((_a = path.hash) !== null && _a !== void 0 ? _a : hash)) {
                window.location.hash = path.path;
            }
            else {
                window.location.assign(path.path);
            }
        }
    }
};

exports.linkTo = linkTo;
