var Reactive = /** @class */ (function () {
    function Reactive(state, _setState) {
        this._setState = _setState;
        this._listeners = [];
        this._state = state;
    }
    Object.defineProperty(Reactive.prototype, "value", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            var _a;
            this._state = newState;
            (_a = this._setState) === null || _a === void 0 ? void 0 : _a.call(this, newState);
            this._listeners.forEach(function (listener) { return listener(newState); });
        },
        enumerable: false,
        configurable: true
    });
    Reactive.prototype.subscribe = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (l) { return l !== listener; });
        };
    };
    Reactive.isReactive = function (obj) {
        return Reactive.prototype.isPrototypeOf(obj);
    };
    return Reactive;
}());

export { Reactive };
