'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useHasOpened(open) {
    var opened = React.useRef(false);
    React.useEffect(function () {
        if (open)
            opened.current = true;
    }, [open]);
    return Boolean(open || opened.current);
}

exports["default"] = useHasOpened;
