import { __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import AllParser from '../utils/props.parser.js';
import valParser from '../utils/val.parser.js';

function EvpRow(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var $props = AllParser(props);
    var event = $props.event;
    var style = __assign({ display: props.hidden ? "none" : "flex", flexDirection: (_a = props.flexDirection) !== null && _a !== void 0 ? _a : "row", justifyContent: (_b = props.justifyContent) !== null && _b !== void 0 ? _b : "flex-start", alignItems: (_c = props.alignItems) !== null && _c !== void 0 ? _c : "center", width: (_d = props.w) !== null && _d !== void 0 ? _d : "100%", height: (_e = props.h) !== null && _e !== void 0 ? _e : "100%" }, $props.style);
    return (jsx("div", __assign({ className: "evp evp-row ".concat((_f = props.class) !== null && _f !== void 0 ? _f : "").trim(), id: props.id, style: __assign({ 
            // @ts-ignore
            "gap": (_g = valParser(props.gap)) !== null && _g !== void 0 ? _g : "6px" }, style), onMouseEnter: event.onMouseEnter, onMouseOver: event.onMouseOver, onFocus: event.onFocus, onMouseDown: event.onMouseDown, onDoubleClick: event.onDoubleClick, onContextMenu: event.onContextMenu, onMouseUp: event.onMouseUp, onMouseMove: event.onMouseMove, onScroll: event.onScroll, onMouseOut: event.onMouseOut, onMouseLeave: event.onMouseLeave, onKeyDown: event.onKeyDown }, { children: props.children })));
}

export { EvpRow as default };
