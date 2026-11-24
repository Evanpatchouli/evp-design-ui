var state = {
    messages: []
};
var addMessage = function (msg) {
    state.messages.push(msg);
};
var getMessageById = function (id) {
    return state.messages.find(function (msg) { return msg.id === id; });
};
var delMessageByid = function (id) {
    state.messages = state.messages.filter(function (msg) { return msg.id !== id; });
};
var store = {
    state: state,
    get messages() { return state.messages; },
    addMessage: addMessage,
    getMessageById: getMessageById,
    delMessageByid: delMessageByid
};

export { addMessage, store as default, delMessageByid, getMessageById };
