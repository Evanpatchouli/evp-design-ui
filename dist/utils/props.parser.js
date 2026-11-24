'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cursor_parser = require('./cursor.parser.js');
var event_parser = require('./event.parser.js');
var style_parser = require('./style.parser.js');
var index = require('./index.js');
var padding_parser = require('./padding.parser.js');
var margin_parser = require('./margin.parser.js');

var propsParser = new Map();
var cursorParser = cursor_parser["default"];
propsParser.set("cursor", cursorParser);
var eventParser = event_parser["default"];
propsParser.set("event", eventParser);
propsParser.set("pd", padding_parser.paddingParser);
propsParser.set("mg", margin_parser.marginParser);
// export default propsParser;
function AllParser(props) {
    var style = props ? style_parser["default"](props) : undefined;
    var event = props ? eventParser(props) : {};
    var children = props ? props.children : undefined;
    return {
        style: index.shift(style),
        event: event,
        children: children,
        id: props === null || props === void 0 ? void 0 : props.id,
        class: props === null || props === void 0 ? void 0 : props.class,
        key: props && Object.prototype.propertyIsEnumerable.call(props, "key") ? props.key : undefined,
        loading: props === null || props === void 0 ? void 0 : props.loading,
        hidden: props === null || props === void 0 ? void 0 : props.hidden,
    };
}

exports.cursorParser = cursorParser;
exports["default"] = AllParser;
exports.eventParser = eventParser;
exports.propsParser = propsParser;
