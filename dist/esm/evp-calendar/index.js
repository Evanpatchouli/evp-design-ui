import { __rest, __assign } from 'tslib';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import EvpDom from '../evp-dom/index.js';
import CalendarDate from 'react-calendar';
import { useState, useEffect } from 'react';
import moment from 'moment';

var defaultTimeFormat = "YYYY / MM / DD \xa0 hh : mm : ss";
function Clock(_a) {
    var format = _a.format;
    var _b = useState(Date.now), now = _b[0], setNow = _b[1];
    useEffect(function () {
        var timer = setInterval(function () { return setNow(Date.now()); }, 1000);
        return function () { return clearInterval(timer); };
    }, []);
    return jsx(Fragment, { children: moment(now).format(format) });
}
function Calendar(props) {
    var date = props.date, setDate = props.setDate, className = props.class, timeClass = props.timeClass, dateClass = props.dateClass, readonly = props.readonly, time = props.time, timeFormat = props.timeFormat, style = props.style, timeStyle = props.timeStyle, timeAlign = props.timeAlign, showTime = props.showTime, containerProps = props.containerProps, rest = __rest(props, ["date", "setDate", "class", "timeClass", "dateClass", "readonly", "time", "timeFormat", "style", "timeStyle", "timeAlign", "showTime", "containerProps"]);
    var ContainerProps = function () {
        var _a = containerProps !== null && containerProps !== void 0 ? containerProps : {}; _a.class; var rest = __rest(_a, ["class"]);
        return rest;
    };
    return (jsxs(EvpDom, __assign({ class: classNames("evp", "evp-calendar", (containerProps === null || containerProps === void 0 ? void 0 : containerProps.class) || className, readonly ? "evp-readonly" : ""), style: style }, ContainerProps(), { children: [showTime !== false ? (jsx("div", __assign({ className: classNames("evp-calendar-time", timeClass), style: __assign({ textAlign: timeAlign !== null && timeAlign !== void 0 ? timeAlign : "center" }, timeStyle) }, { children: time == null ? jsx(Clock, { format: timeFormat !== null && timeFormat !== void 0 ? timeFormat : defaultTimeFormat }) : moment(time).format(timeFormat !== null && timeFormat !== void 0 ? timeFormat : defaultTimeFormat) }))) : (void 0), jsx(CalendarDate, __assign({ className: classNames("evp-calendar-date", dateClass), value: date, onChange: setDate }, rest))] })));
}

export { Calendar as default };
