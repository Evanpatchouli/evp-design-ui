import { __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import AllParser from '../utils/props.parser.js';
import EvpLoading from '../evp-loading/index.js';
import useHasOpened from '../utils/useHasOpened.js';

function EvpDom($props) {
    // console.log('EvpDom.props:', $props)
    var props = AllParser($props);
    // console.log('EvpDom.props after parsed:', props);
    var event = props.event;
    var mountModal = useHasOpened($props.modal);
    return (jsxs("div", __assign({ id: props.id, className: props.class, hidden: props.hidden, style: __assign({ position: "relative" }, props.style), onMouseEnter: event.onMouseEnter, onMouseOver: event.onMouseOver, onFocus: event.onFocus, onMouseDown: event.onMouseDown, onDoubleClick: event.onDoubleClick, onContextMenu: event.onContextMenu, onMouseUp: event.onMouseUp, onMouseMove: event.onMouseMove, onScroll: event.onScroll, onMouseOut: event.onMouseOut, onMouseLeave: event.onMouseLeave, onKeyDown: event.onKeyDown }, { children: [$props.children, $props.loading && (jsx("div", __assign({ className: "dom-loading__modal" }, { children: jsx(EvpLoading.SpinDot, { className: "dom-loading__elem" }) }))), mountModal && (jsx("div", __assign({ className: "dom__modal", hidden: !$props.modal }, { children: jsx("div", __assign({ className: "dom__modal__content" }, { children: $props.modalContent })) })))] })));
}

export { EvpDom as default };
