import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Animation } from '../utils/animation.js';

var EvpAnimation = function (_a) {
    var duration = _a.duration, delay = _a.delay, name = _a.name, props = __rest(_a, ["duration", "delay", "name"]);
    console.log("animationName", name);
    return jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "1000", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: name !== null && name !== void 0 ? name : "" }, props));
};
/**
 *
 * `@version 0.0.1`
 * - default 50ms animation delay to make it reactive
 * - whether to play animation decides on the animationName not className
 * @returns
 */
var AnimationDomFC = function (_a) {
    var animationName = _a.animationName, duration = _a.duration, delay = _a.delay, timingFunction = _a.timingFunction, fillMode = _a.fillMode, direction = _a.direction, iterationCount = _a.iterationCount, className = _a.className, style = _a.style, trigger = _a.trigger, cancelOnLeave = _a.cancelOnLeave, activeGap = _a.activeGap, activeState = _a.activeState, onActive = _a.onActive, onInactive = _a.onInactive, props = __rest(_a, ["animationName", "duration", "delay", "timingFunction", "fillMode", "direction", "iterationCount", "className", "style", "trigger", "cancelOnLeave", "activeGap", "activeState", "onActive", "onInactive"]);
    var animation = Animation.fromObject({
        name: animationName,
        duration: duration,
        delay: delay,
        timingFunction: timingFunction,
        fillMode: fillMode,
        direction: direction,
        iterationCount: iterationCount,
    });
    var _b = useState(""), animated = _b[0], setAnimated = _b[1];
    var _c = React.useState({
        current: null,
    }), timer = _c[0], setTimer = _c[1];
    var $trigger = (function (trigger) {
        if (Array.isArray(trigger)) {
            if (trigger.length === 0) {
                return ["hover"];
            }
            else {
                return trigger;
            }
        }
        else {
            return [trigger !== null && trigger !== void 0 ? trigger : "hover"];
        }
    })(trigger);
    React.useEffect(function () {
        var _a, _b;
        if (animated !== "") {
            (_a = activeState === null || activeState === void 0 ? void 0 : activeState.setState) === null || _a === void 0 ? void 0 : _a.call(activeState, activeState.activeValue);
            // active
            onActive === null || onActive === void 0 ? void 0 : onActive();
        }
        else {
            // inactive
            (_b = activeState === null || activeState === void 0 ? void 0 : activeState.setState) === null || _b === void 0 ? void 0 : _b.call(activeState, activeState.inactiveValue);
            onInactive === null || onInactive === void 0 ? void 0 : onInactive();
        }
    }, [animated]);
    var dispatchAnimation = function () {
        setTimeout(function () {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            setAnimated("");
            setTimeout(function () {
                setAnimated(animation.animationName);
            }, typeof activeGap === "number" ? activeGap : 50); // to make the css animation stateful for a gap of 50ms
            setTimer({
                current: setTimeout(function () { return setAnimated(""); }, Number(animation.animationDuration)),
            });
        }, Number(animation.animationDelay));
    };
    return (jsx("div", __assign({ tabIndex: -1, className: classNames(animation.animationName, className), onMouseEnter: function () {
            if ($trigger.includes("hover")) {
                dispatchAnimation();
            }
        }, onMouseLeave: function () {
            if (cancelOnLeave) {
                if (timer.current) {
                    clearTimeout(timer.current);
                }
                setAnimated("");
                setTimer({
                    current: null,
                });
            }
        }, onClick: function () {
            if ($trigger.includes("click")) {
                dispatchAnimation();
            }
        }, style: __assign({ 
            // ...bounce.style,
            width: "fit-content", height: "fit-content", animationName: animated ? animated : "none" }, style) }, props, { children: props.children })));
};
EvpAnimation.Bounce = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__bounce" }, props)));
};
EvpAnimation.Twinkle = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "1000", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__Twinkle" }, props)));
};
EvpAnimation.BounceIn = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "1000", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__BounceIn" }, props)));
};
EvpAnimation.Flip = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__Flip" }, props)));
};
EvpAnimation.Shake = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "1000", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__Shake" }, props)));
};
EvpAnimation.ZoomIn = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__ZoomIn" }, props)));
};
EvpAnimation.Fade = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__Fade" }, props)));
};
EvpAnimation.FadeIn = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__FadeIn" }, props)));
};
EvpAnimation.FadeOut = function (_a) {
    var duration = _a.duration, delay = _a.delay, props = __rest(_a, ["duration", "delay"]);
    return (jsx(AnimationDomFC, __assign({ duration: duration !== null && duration !== void 0 ? duration : "500", delay: delay !== null && delay !== void 0 ? delay : "0", animationName: "evp-animation__FadeOut" }, props)));
};

export { EvpAnimation as default };
