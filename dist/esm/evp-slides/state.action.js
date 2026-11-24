import { __assign } from 'tslib';

var actions = [
    {
        type: "READ_EFFECT",
        // @ts-ignore
        handler: function (state, action) {
            var _a;
            (_a = action.payload) === null || _a === void 0 ? void 0 : _a.call(action, state);
            return state;
        },
    },
    {
        type: "SET_CURRENT",
        // @ts-ignore
        handler: function (state, action) {
            var _a;
            return __assign(__assign({}, state), { current: (_a = action.payload) !== null && _a !== void 0 ? _a : state.current });
        },
    },
    {
        type: "CURRENT_PLUS",
        // @ts-ignore
        handler: function (state, action) {
            var _a, _b;
            var newCur = state.current + 1;
            var max = (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : action.payload.max;
            if (max && newCur > max) {
                return state;
            }
            return __assign(__assign({}, state), { current: newCur });
        },
    },
    {
        type: "CURRENT_MINUS",
        // @ts-ignore
        handler: function (state, action) {
            var _a, _b;
            var newCur = state.current - 1;
            var min = (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.limit) !== null && _b !== void 0 ? _b : 0;
            if (newCur < min) {
                return state;
            }
            return __assign(__assign({}, state), { current: newCur });
        },
    },
    {
        type: "CURRENT_TO_FIRST",
        // @ts-ignore
        handler: function (state, action) {
            return __assign(__assign({}, state), { current: 0 });
        },
    },
    {
        type: "CURRENT_TO_LAST",
        // @ts-ignore
        handler: function (state, action) {
            return __assign(__assign({}, state), { current: action.payload });
        },
    },
];

export { actions as default };
