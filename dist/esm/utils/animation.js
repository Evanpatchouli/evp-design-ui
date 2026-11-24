import { parseDuration } from './time.js';

var Animation = /** @class */ (function () {
    function Animation(name, duration) {
        if (duration === void 0) { duration = "0.5s"; }
        this.animationName = "evp-animation__bounce";
        this.animationDuration = "0.5s";
        this.animationTimingFunction = "ease-in-out";
        this.animationDelay = "0s";
        this.animationIterationCount = 1;
        this.animationDirection = "normal";
        this.animationFillMode = "none";
        this.animationName = name;
        this.animationDuration = parseDuration(duration);
    }
    Animation.prototype.json = function () {
        return {
            animationNme: this.animationName,
            animationDuration: this.animationDuration,
            animationTimingFunction: this.animationTimingFunction,
            animationDelay: this.animationDelay,
            animationIterationCount: this.animationIterationCount,
            animationDirection: this.animationDirection,
            animationFillMode: this.animationFillMode,
        };
    };
    Animation.prototype.toJsonWithoutName = function () {
        return {
            animationDuration: this.animationDuration,
            animationTimingFunction: this.animationTimingFunction,
            animationDelay: this.animationDelay,
            animationIterationCount: this.animationIterationCount,
            animationDirection: this.animationDirection,
            animationFillMode: this.animationFillMode,
        };
    };
    Animation.prototype.stringify = function () {
        return JSON.stringify(this.json());
    };
    // static fromString(str: string) {
    //   const [name, value] = str.split(":");
    //   return new Var(name.trim(), value.trim());
    // }
    Animation.fromObject = function (obj) {
        var _a, _b, _c, _d, _e, _f;
        var instance = new Animation(obj.name);
        instance.animationDuration = ((_a = obj.animationDuration) !== null && _a !== void 0 ? _a : obj.duration) || instance.animationDuration;
        instance.animationTimingFunction =
            ((_b = obj.animationTimingFunction) !== null && _b !== void 0 ? _b : obj.timingFunction) || instance.animationTimingFunction;
        instance.animationDelay = ((_c = obj.animationDelay) !== null && _c !== void 0 ? _c : obj.delay) || instance.animationDelay;
        instance.animationIterationCount =
            ((_d = obj.animationIterationCount) !== null && _d !== void 0 ? _d : obj.iterationCount) || instance.animationIterationCount;
        instance.animationDirection = ((_e = obj.animationDirection) !== null && _e !== void 0 ? _e : obj.direction) || instance.animationDirection;
        instance.animationFillMode = ((_f = obj.animationFillMode) !== null && _f !== void 0 ? _f : obj.fillMode) || instance.animationFillMode;
        return instance;
    };
    Animation.prototype.toString = function () {
        return "".concat(this.animationName, " ").concat(this.animationDuration, " ").concat(this.animationTimingFunction, " ").concat(this.animationDelay, " ").concat(this.animationIterationCount, " ").concat(this.animationDirection, " ").concat(this.animationFillMode);
    };
    return Animation;
}());

export { Animation };
