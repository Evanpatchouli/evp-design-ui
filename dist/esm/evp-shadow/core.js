import BezierEasing from 'bezier-easing';

var EvpShadow = /** @class */ (function () {
    function EvpShadow() {
        this.config = {
            shadowLayers: {
                value: 6,
                default: 6,
                min: 1,
                max: 10,
                step: 1,
            },
            alpha: {
                value: 0.07,
                default: 0.07,
                min: 0,
                max: 1,
                step: 0.01,
            },
            xOffset: {
                value: 100,
                default: 100,
                min: 0,
                max: 500,
                step: 1,
            },
            yOffset: {
                value: 100,
                default: 100,
                min: 0,
                max: 500,
                step: 1,
            },
            blur: {
                value: 80,
                default: 80,
                min: 0,
                max: 500,
                step: 1,
            },
            spread: {
                value: 0,
                default: 0,
                min: -100,
                max: 0,
                step: 1,
            },
            invertAlpha: { value: false, default: false }
        };
        /** Left spot - Right spot */
        this.alphaEasingValue = [
            0.1, 0.5, 0.9, 0.5,
        ];
        /** Left spot - Right spot */
        this.offsetEasingValue = [
            0.7, 0.1, 0.9, 0.3,
        ];
        /** Left spot - Right spot */
        this.blurEasingValue = [
            0.7, 0.1, 0.9, 0.3,
        ];
        // @ts-ignore
        this.alphaEasing = BezierEasing.apply(void 0, this.alphaEasingValue);
        // @ts-ignore
        this.offsetEasing = BezierEasing.apply(void 0, this.offsetEasingValue);
        // @ts-ignore
        this.blurEasing = BezierEasing.apply(void 0, this.blurEasingValue);
        this.easedAlphaValues = [];
        this.easedOffsetValues = [];
        this.easedBlurValues = [];
    }
    /** @todo options should not be set as config */
    EvpShadow.prototype.configure = function (options) {
        if (!options)
            return;
        options.layer ? this.config.shadowLayers.value = options.layer : void 0;
        options.blur ? this.config.blur.value = options.blur : void 0;
        options.opacity ? this.config.alpha.value = options.opacity : void 0;
        options.xOffset ? this.config.xOffset.value = options.xOffset : void 0;
        options.yOffset ? this.config.yOffset.value = options.yOffset : void 0;
        options.reverse ? this.config.invertAlpha.value = options.reverse : void 0;
    };
    EvpShadow.prototype.getSimpleConfig = function (options) {
        var _a, _b, _c, _d, _e, _f, _g;
        var config = {
            shadowLayers: (_a = options === null || options === void 0 ? void 0 : options.layer) !== null && _a !== void 0 ? _a : this.config.shadowLayers.value,
            alpha: (_b = options === null || options === void 0 ? void 0 : options.opacity) !== null && _b !== void 0 ? _b : this.config.alpha.value,
            xOffset: (_c = options === null || options === void 0 ? void 0 : options.xOffset) !== null && _c !== void 0 ? _c : this.config.xOffset.value,
            yOffset: (_d = options === null || options === void 0 ? void 0 : options.yOffset) !== null && _d !== void 0 ? _d : this.config.yOffset.value,
            blur: (_e = options === null || options === void 0 ? void 0 : options.blur) !== null && _e !== void 0 ? _e : this.config.blur.value,
            spread: (_f = options === null || options === void 0 ? void 0 : options.spread) !== null && _f !== void 0 ? _f : this.config.spread.value,
            invertAlpha: (_g = options === null || options === void 0 ? void 0 : options.reverse) !== null && _g !== void 0 ? _g : this.config.invertAlpha.value
        };
        return config;
    };
    EvpShadow.prototype.resetConfig = function () {
        this.config.alpha.value = this.config.alpha.default;
        this.config.blur.value = this.config.blur.default;
        this.config.xOffset.value = this.config.xOffset.default;
        this.config.yOffset.value = this.config.yOffset.default;
        this.config.shadowLayers.value = this.config.shadowLayers.default;
        this.config.invertAlpha.value = this.config.invertAlpha.default;
    };
    EvpShadow.prototype.easedBeziering = function () {
        for (var i = 1; i <= this.config.shadowLayers.value; i++) {
            var fraction = i / this.config.shadowLayers.value;
            if (this.config.invertAlpha) {
                this.easedAlphaValues.unshift(this.alphaEasing(fraction));
            }
            else {
                this.easedAlphaValues.push(this.alphaEasing(fraction));
            }
            this.easedOffsetValues.push(this.offsetEasing(fraction));
            this.easedBlurValues.push(this.blurEasing(fraction));
        }
    };
    EvpShadow.prototype.fixed = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        return parseFloat(num.toFixed(precision));
    };
    EvpShadow.prototype.calc = function (precision) {
        this.easedBeziering();
        var boxShadowValues = [];
        for (var i = 0; i < this.config.shadowLayers.value; i++) {
            boxShadowValues.push([
                this.fixed(this.easedOffsetValues[i] * this.config.xOffset.value, precision),
                this.fixed(this.easedOffsetValues[i] * this.config.yOffset.value, precision),
                this.fixed(this.easedBlurValues[i] * this.config.blur.value, precision),
                this.fixed(this.config.spread.value, precision),
                this.fixed(this.easedAlphaValues[i] * this.config.alpha.value, precision),
            ]);
        }
        var boxShadow = boxShadowValues
            .map(function (_a) {
            var leftOffset = _a[0], topOffset = _a[1], blur = _a[2], spread = _a[3], alpha = _a[4];
            return shadow(leftOffset, topOffset, blur, spread, rgba(0, 0, 0, alpha));
        })
            .join(',\n');
        return boxShadow;
    };
    EvpShadow.prototype.build = function (options, output) {
        if (output === void 0) { output = false; }
        output ? console.log('[EvpDesignUI::EvpShadow] Going to build with config as ', this.getSimpleConfig()) : void 0;
        this.configure(options);
        var boxShadow = this.calc(options === null || options === void 0 ? void 0 : options.precision);
        this.resetConfig();
        output ? console.log('[EvpDesignUI::EvpShadow] Shadow finally got built is ', boxShadow) : void 0;
        return boxShadow;
    };
    EvpShadow.prototype.new = function () {
        return new EvpShadow();
    };
    EvpShadow.prototype.clone = function () {
        var cloned = new EvpShadow();
        return Object.assign(cloned, this);
    };
    return EvpShadow;
}());
var rgba = function (r, g, b, a) { return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"); };
/** single-layer shadow slice */
var shadow = function (left, top, blur, spread, color) {
    return "".concat(left, "px ").concat(top, "px ").concat(blur, "px ").concat(spread, "px ").concat(color);
};
var boxShadowFactoryInstance = new EvpShadow();

export { boxShadowFactoryInstance as default };
