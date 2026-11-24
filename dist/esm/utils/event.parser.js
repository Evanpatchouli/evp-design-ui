var eventParser = function (props) {
    if (!props) {
        return {};
    }
    var onKeyDown = function (e) {
        switch (e.key.toLowerCase()) {
            case "esc": {
                if (props.$esc && typeof props.$esc === "function") {
                    props.$esc(e);
                }
                break;
            }
            case "del": {
                if (props.$del && typeof props.$del === "function") {
                    props.$del(e);
                }
                break;
            }
            case "backspace": {
                if (props.$del && typeof props.$del === "function") {
                    props.$del(e);
                }
                break;
            }
            case "enter": {
                if (props.$enter && typeof props.$enter === "function") {
                    props.$enter(e);
                }
                break;
            }
            case "space": {
                if (props.$space && typeof props.$space === "function") {
                    props.$space(e);
                }
                break;
            }
        }
    };
    function convert(e) {
        if (!e) {
            return undefined;
        }
        if (typeof e === "boolean") {
            return undefined;
        }
        if (typeof e === "function") {
            return e;
        }
    }
    return {
        /** Applied to `onMouseEnter` Event */
        onMouseEnter: convert(props.$in),
        /** Applied to `onMouseOver` Event */
        onMouseOver: convert(props.$on),
        /** Applied to `onFocus` Event */
        onFocus: convert(props.$focus),
        /** Applied to `onMouseDown` Event */
        onMouseDown: convert(props.$click),
        /** Applied to `onDoubleClick` Event */
        onDoubleClick: convert(props.$doubleClick),
        /** Applied to `onContextMenu` Event */
        onContextMenu: convert(props.$context),
        /** Applied to `onMouseUp` Event */
        onMouseUp: convert(props.$loose),
        /** Applied to `onMouseMove` Event */
        onMouseMove: convert(props.$move),
        /** Applied to `onScroll` Event */
        onScroll: convert(props.$scroll),
        /** Applied to `onMouseOut` Event */
        onMouseOut: convert(props.$off),
        /** Applied to `onMouseLeave` Event */
        onMouseLeave: convert(props.$out),
        /** Applied to `onKeyDown` Event */
        onKeyDown: onKeyDown,
    };
};

export { eventParser as default };
