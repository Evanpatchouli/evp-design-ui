'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var classNames = require('classnames');
var index = require('../evp-dom/index.js');
var CalendarDate = require('react-calendar');
var React = require('react');
var moment = require('moment');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var classNames__default = /*#__PURE__*/_interopDefault(classNames);
var CalendarDate__default = /*#__PURE__*/_interopDefault(CalendarDate);
var moment__default = /*#__PURE__*/_interopDefault(moment);

var defaultTimeFormat = "YYYY / MM / DD \xa0 hh : mm : ss";
function Clock(_a) {
    var format = _a.format;
    var _b = React.useState(Date.now), now = _b[0], setNow = _b[1];
    React.useEffect(function () {
        var timer = setInterval(function () { return setNow(Date.now()); }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: moment__default["default"](now).format(format) });
}
function Calendar(props) {
    var date = props.date, setDate = props.setDate, className = props.class, timeClass = props.timeClass, dateClass = props.dateClass, readonly = props.readonly, time = props.time, timeFormat = props.timeFormat, style = props.style, timeStyle = props.timeStyle, timeAlign = props.timeAlign, showTime = props.showTime, containerProps = props.containerProps, rest = tslib.__rest(props, ["date", "setDate", "class", "timeClass", "dateClass", "readonly", "time", "timeFormat", "style", "timeStyle", "timeAlign", "showTime", "containerProps"]);
    var ContainerProps = function () {
        var _a = containerProps !== null && containerProps !== void 0 ? containerProps : {}; _a.class; var rest = tslib.__rest(_a, ["class"]);
        return rest;
    };
    return (jsxRuntime.jsxs(index["default"], tslib.__assign({ class: classNames__default["default"]("evp", "evp-calendar", (containerProps === null || containerProps === void 0 ? void 0 : containerProps.class) || className, readonly ? "evp-readonly" : ""), style: style }, ContainerProps(), { children: [showTime !== false ? (jsxRuntime.jsx("div", tslib.__assign({ className: classNames__default["default"]("evp-calendar-time", timeClass), style: tslib.__assign({ textAlign: timeAlign !== null && timeAlign !== void 0 ? timeAlign : "center" }, timeStyle) }, { children: time == null ? jsxRuntime.jsx(Clock, { format: timeFormat !== null && timeFormat !== void 0 ? timeFormat : defaultTimeFormat }) : moment__default["default"](time).format(timeFormat !== null && timeFormat !== void 0 ? timeFormat : defaultTimeFormat) }))) : (void 0), jsxRuntime.jsx(CalendarDate__default["default"], tslib.__assign({ className: classNames__default["default"]("evp-calendar-date", dateClass), value: date, onChange: setDate }, rest))] })));
}

exports["default"] = Calendar;
