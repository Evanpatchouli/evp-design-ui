import cursorParser$1 from './cursor.parser.js';
import eventParser$1 from './event.parser.js';
import StylePropsParser from './style.parser.js';
import { shift } from './index.js';
import { paddingParser } from './padding.parser.js';
import { marginParser } from './margin.parser.js';

var propsParser = new Map();
var cursorParser = cursorParser$1;
propsParser.set("cursor", cursorParser);
var eventParser = eventParser$1;
propsParser.set("event", eventParser);
propsParser.set("pd", paddingParser);
propsParser.set("mg", marginParser);
// export default propsParser;
function AllParser(props) {
    var style = props ? StylePropsParser(props) : undefined;
    var event = props ? eventParser(props) : {};
    var children = props ? props.children : undefined;
    return {
        style: shift(style),
        event: event,
        children: children,
        id: props === null || props === void 0 ? void 0 : props.id,
        class: props === null || props === void 0 ? void 0 : props.class,
        key: props && Object.prototype.propertyIsEnumerable.call(props, "key") ? props.key : undefined,
        loading: props === null || props === void 0 ? void 0 : props.loading,
        hidden: props === null || props === void 0 ? void 0 : props.hidden,
    };
}

export { cursorParser, AllParser as default, eventParser, propsParser };
