'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var client = require('react-dom/client');
var index = require('../evp-icon/index.js');
var constant = require('../constant.js');
var close = require('../evp-icon/close.js');
var nanoid = require('nanoid');
var store = require('./store.js');

function closeMessage(id) {
    var msg = store["default"].getMessageById(id);
    if (!msg)
        return;
    clearTimeout(msg.timer.start);
    clearTimeout(msg.timer.clean);
    msg.root.unmount();
    msg.dom.remove();
    store["default"].delMessageByid(id);
}
function render(id, text, dom, keep, delay) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var root = client.createRoot(div);
    var startTimer = setTimeout(function () {
        root.render(dom);
        var msg = store["default"].getMessageById(id);
        if (msg)
            msg.timer.clean = setTimeout(function () { return closeMessage(id); }, keep !== null && keep !== void 0 ? keep : 8000);
    }, delay !== null && delay !== void 0 ? delay : 0);
    store["default"].addMessage({
        id: id,
        dom: div,
        root: root,
        text: text,
        timer: {
            start: startTimer
        }
    });
}
function EvpMessage(props) {
    var _a, _b;
    var icon = {
        'info': 'info',
        'warn': 'warn',
        'error': 'error',
        'success': 'true_circle'
    };
    var color = {
        'info': constant.Color.Gray,
        'warn': constant.Color.Orange,
        'error': constant.Color.Red,
        'success': constant.Color.Green
    };
    function undisplay() {
        closeMessage(props.id);
    }
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("div", tslib.__assign({ className: "evp evp-msg" }, { children: [jsxRuntime.jsxs("div", tslib.__assign({ className: 'evp-msg-content' }, { children: [jsxRuntime.jsx(index["default"], { name: icon[(_a = props.type) !== null && _a !== void 0 ? _a : 'info'], color: color[(_b = props.type) !== null && _b !== void 0 ? _b : 'info'] }), jsxRuntime.jsx("div", { children: props.text })] })), jsxRuntime.jsx(close["default"], { onClick: undisplay, pointer: true })] })) }));
}
var createInfoMsg = function (id, type, text, keep, delay) {
    var msg = EvpMessage({
        id: id,
        text: text,
        type: type,
        keep: keep,
        delay: delay
    });
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: msg }));
};
/**
 * Render a global info message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
var renderInfo = function (text, keep, delay) {
    var id = nanoid.nanoid();
    render(id, text !== null && text !== void 0 ? text : '', createInfoMsg(id, 'info', text, keep, delay), keep, delay);
};
/**
 * Render a global warn message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
var renderWarn = function (text, keep, delay) {
    var id = nanoid.nanoid();
    render(id, text !== null && text !== void 0 ? text : '', createInfoMsg(id, 'warn', text, keep, delay), keep, delay);
};
/**
 * Render a global error message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
var renderError = function (text, keep, delay) {
    var id = nanoid.nanoid();
    render(id, text !== null && text !== void 0 ? text : '', createInfoMsg(id, 'error', text, keep, delay), keep, delay);
};
/**
 * Render a global success message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
var renderSuccess = function (text, keep, delay) {
    var id = nanoid.nanoid();
    render(id, text !== null && text !== void 0 ? text : '', createInfoMsg(id, 'success', text, keep, delay), keep, delay);
};
var EvpMsg = {
    info: renderInfo,
    warn: renderWarn,
    error: renderError,
    success: renderSuccess
};

exports.EvpMessage = EvpMessage;
exports.createInfoMsg = createInfoMsg;
exports["default"] = EvpMsg;
exports.renderError = renderError;
exports.renderInfo = renderInfo;
exports.renderSuccess = renderSuccess;
exports.renderWarn = renderWarn;
