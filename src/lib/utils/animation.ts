import { EvpAnimationTimeFunction, EvpAnimationDirection, EvpAnimationFillMode } from "../typings";
import { parseDuration } from "./time";

export class Animation {
  animationName: string | undefined = "evp-animation__bounce";
  animationDuration = "0.5s";
  animationTimingFunction: EvpAnimationTimeFunction = "ease-in-out";
  animationDelay = "0s";
  animationIterationCount = 1;
  animationDirection: EvpAnimationDirection = "normal";
  animationFillMode: EvpAnimationFillMode = "none";

  constructor(name?: string, duration: number | string | undefined = "0.5s") {
    this.animationName = name;
    this.animationDuration = parseDuration(duration);
  }

  json() {
    return {
      animationNme: this.animationName,
      animationDuration: this.animationDuration,
      animationTimingFunction: this.animationTimingFunction,
      animationDelay: this.animationDelay,
      animationIterationCount: this.animationIterationCount,
      animationDirection: this.animationDirection,
      animationFillMode: this.animationFillMode,
    };
  }

  toJsonWithoutName() {
    return {
      animationDuration: this.animationDuration,
      animationTimingFunction: this.animationTimingFunction,
      animationDelay: this.animationDelay,
      animationIterationCount: this.animationIterationCount,
      animationDirection: this.animationDirection,
      animationFillMode: this.animationFillMode,
    };
  }

  stringify() {
    return JSON.stringify(this.json());
  }
  // static fromString(str: string) {
  //   const [name, value] = str.split(":");
  //   return new Var(name.trim(), value.trim());
  // }
  static fromObject(obj: any) {
    const instance = new Animation(obj.name);
    instance.animationDuration = (obj.animationDuration ?? obj.duration) || instance.animationDuration;
    instance.animationTimingFunction =
      (obj.animationTimingFunction ?? obj.timingFunction) || instance.animationTimingFunction;
    instance.animationDelay = (obj.animationDelay ?? obj.delay) || instance.animationDelay;
    instance.animationIterationCount =
      (obj.animationIterationCount ?? obj.iterationCount) || instance.animationIterationCount;
    instance.animationDirection = (obj.animationDirection ?? obj.direction) || instance.animationDirection;
    instance.animationFillMode = (obj.animationFillMode ?? obj.fillMode) || instance.animationFillMode;
    return instance;
  }
  toString() {
    return `${this.animationName} ${this.animationDuration} ${this.animationTimingFunction} ${this.animationDelay} ${this.animationIterationCount} ${this.animationDirection} ${this.animationFillMode}`;
  }
}
