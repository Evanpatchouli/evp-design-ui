'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Catch error handling for a given function.
 * @param fn
 * @param catchHanlder
 * @param finallyHandler
 */
var useCatch = function (fn, catchHandler, finallyHandler) {
    var fnProtected = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            fn.apply(void 0, args);
        }
        catch (error) {
            if (catchHandler) {
                catchHandler(error);
            }
            else {
                console.error(error);
            }
        }
        finally {
            finallyHandler === null || finallyHandler === void 0 ? void 0 : finallyHandler();
        }
    });
    return fnProtected;
};

exports["default"] = useCatch;
exports.useCatch = useCatch;
