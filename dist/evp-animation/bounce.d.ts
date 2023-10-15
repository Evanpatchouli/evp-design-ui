import { EvpAnimationDirection as AnimationDirection, EvpAnimationFillMode as AnimationFillMode, EvpAnimationDirection, EvpAnimationTimeFunction as TimeFunction } from "./../typings";
import { CommonCSS } from "../evp-css/typing";
export type BounceOptions = {
    duration?: AnimationDirection;
    timingFunction?: TimeFunction;
    delay?: string;
    iterationCount?: number;
    direction?: EvpAnimationDirection;
    fillMode?: AnimationFillMode;
};
declare const Bounce: ((options?: BounceOptions) => Omit<CommonCSS, "id">) & {
    className: string;
    style: {
        animationDuration: string;
        animationTimingFunction: TimeFunction;
        animationDelay: string;
        animationIterationCount: number;
        animationDirection: AnimationDirection;
        animationFillMode: AnimationFillMode;
    };
};
export default Bounce;
