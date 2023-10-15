import {
  EvpAnimationDirection as AnimationDirection,
  EvpAnimationFillMode as AnimationFillMode,
  EvpAnimationDirection,
  EvpAnimationTimeFunction as TimeFunction,
} from "./../typings";
import { bindFC } from "../utils/index";
import { CommonCSS } from "../evp-css/typing";
import { Animation } from "../utils/animation";

export type BounceOptions = {
  duration?: AnimationDirection;
  timingFunction?: TimeFunction;
  delay?: string;
  iterationCount?: number;
  direction?: EvpAnimationDirection;
  fillMode?: AnimationFillMode;
};

const Bounce_default = Animation.fromObject({
  animationName: "evp-animation__bounce",
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out" as TimeFunction,
  animationDelay: "0s",
  animationIterationCount: 1,
  animationDirection: "normal" as AnimationDirection,
  animationFillMode: "none" as AnimationFillMode,
});

const BounceFC = (
  options: BounceOptions = {
    duration: "0.5s",
    timingFunction: "ease-in-out",
    delay: "0s",
    iterationCount: 1,
    direction: "normal",
    fillMode: "none",
  }
): Omit<CommonCSS, "id"> => {
  const animationInstance = new Animation("evp-animation__bounce");
  if (options.direction) {
    animationInstance.animationDirection = options.direction;
  }
  if (options.fillMode) {
    animationInstance.animationFillMode = options.fillMode;
  }
  if (options.iterationCount) {
    animationInstance.animationIterationCount = options.iterationCount;
  }
  if (options.delay) {
    animationInstance.animationDelay = options.delay;
  }
  if (options.timingFunction) {
    animationInstance.animationTimingFunction = options.timingFunction;
  }

  if (options.duration) {
    animationInstance.animationDuration = options.duration;
  }
  return {
    className: animationInstance.animationName,
    style: {
      ...animationInstance.toJsonWithoutName(),
    },
  };
};

const Bounce = bindFC(
  {
    className: Bounce_default.animationName,
    style: {
      ...Bounce_default.toJsonWithoutName(),
    },
  },
  BounceFC
);

export default Bounce;
