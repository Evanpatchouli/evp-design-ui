import { useRef, useEffect } from 'react';

function useHasOpened(open) {
    var opened = useRef(false);
    useEffect(function () {
        if (open)
            opened.current = true;
    }, [open]);
    return Boolean(open || opened.current);
}

export { useHasOpened as default };
