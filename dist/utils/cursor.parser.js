'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// cursor: props.cursor??(props.pointer?'pointer': 'unset')
var preservedCursors = [
    'pointer',
    'not-allowed',
    'col-resize',
    'row-resize',
    'all-scroll',
    'wait',
    'grab',
    'grabbing',
    'none',
];
var cursorParser = function (props) {
    var _a;
    var cursor = undefined;
    if (props) {
        for (var _i = 0, preservedCursors_1 = preservedCursors; _i < preservedCursors_1.length; _i++) {
            var key = preservedCursors_1[_i];
            if (Object.prototype.hasOwnProperty.call(props, key) && props[key]) {
                if (cursor !== undefined) {
                    throw new Error('Evp design ui component can only have one valid cursor prop');
                }
                cursor = key;
            }
        }
        return (_a = props.cursor) !== null && _a !== void 0 ? _a : cursor;
    }
    return cursor;
};

exports["default"] = cursorParser;
