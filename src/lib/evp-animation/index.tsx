import React, { useState } from "react";
import {
  EvpAnimationDirection as AnimationDirection,
  EvpAnimationFillMode as AnimationFillMode,
  EvpAnimationDirection,
  EvpAnimationTimeFunction as TimeFunction,
} from "./../typings";
import classNames from "classnames";
import { Nullable, Pretify } from "../utils";
import { Animation } from "../utils/animation";

export type AnimationConfig = {
  duration?: AnimationDirection;
  timingFunction?: TimeFunction;
  delay?: string;
  iterationCount?: number;
  direction?: EvpAnimationDirection;
  fillMode?: AnimationFillMode;
};

export type EvpAnimationProps = {
  trigger?: "click" | "hover" | Array<"click" | "hover">;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  AnimationConfig;

export type ActiveStateWithAnimation<T = any> = Pretify<{
  state?: T | undefined;
  setState?: React.Dispatch<React.SetStateAction<T | undefined>>;
  activeValue?: T | undefined;
  inactiveValue?: T | undefined;
}>;

const EvpAnimation = (props: EvpAnimationProps) => {
  return <div>{props.children}</div>;
};

export type EvpAnimationFCProps<T = any> = EvpAnimationProps & {
  animationName: string;
  cancelOnLeave?: boolean;
  /** `${num}ms, default is 50ms` */
  activeGap?: number;
  activeState?: ActiveStateWithAnimation<T>;
  onActive?: () => void;
  onInactive?: () => void;
};

/**
 *
 * `@version 0.0.1`
 * - default 50ms animation delay to make it reactive
 * - whether to play animation decides on the animationName not className
 * @returns
 */
const AnimationDomFC = ({
  animationName,
  duration,
  delay,
  timingFunction,
  fillMode,
  direction,
  iterationCount,
  className,
  style,
  trigger,
  cancelOnLeave,
  activeGap,
  activeState,
  onActive,
  onInactive,
  ...props
}: EvpAnimationFCProps) => {
  const animation = Animation.fromObject({
    name: animationName,
    duration,
    delay,
    timingFunction,
    fillMode,
    direction,
    iterationCount,
  });

  const [animated, setAnimated] = useState<string | undefined>("");
  const [timer, setTimer] = React.useState<{
    current: Nullable<NodeJS.Timeout>;
  }>({
    current: null,
  });

  const $trigger: Array<"click" | "hover"> = ((trigger: EvpAnimationProps["trigger"]) => {
    if (Array.isArray(trigger)) {
      if (trigger.length === 0) {
        return ["hover"];
      } else {
        return trigger;
      }
    } else {
      return [trigger ?? "hover"];
    }
  })(trigger);

  React.useEffect(() => {
    if (animated !== "") {
      activeState?.setState?.(activeState.activeValue);
      // active
      onActive?.();
    } else {
      // inactive
      activeState?.setState?.(activeState.inactiveValue);
      onInactive?.();
    }
  }, [animated]);

  const dispatchAnimation = () => {
    setTimeout(() => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      setAnimated("");
      setTimeout(
        () => {
          setAnimated(animation.animationName);
        },
        typeof activeGap === "number" ? activeGap : 50
      ); // to make the css animation stateful for a gap of 50ms
      setTimer({
        current: setTimeout(() => setAnimated(""), Number(animation.animationDuration)),
      });
    }, Number(animation.animationDelay));
  };

  return (
    <div
      tabIndex={-1}
      className={classNames(animation.animationName, className)}
      onMouseEnter={() => {
        if ($trigger.includes("hover")) {
          dispatchAnimation();
        }
      }}
      onMouseLeave={() => {
        if (cancelOnLeave) {
          if (timer.current) {
            clearTimeout(timer.current);
          }
          setAnimated("");
          setTimer({
            current: null,
          });
        }
      }}
      onClick={() => {
        if ($trigger.includes("click")) {
          dispatchAnimation();
        }
      }}
      style={{
        // ...bounce.style,
        width: "fit-content",
        height: "fit-content",
        animationName: animated ? animated : "none",
        ...style,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

EvpAnimation.Bounce = ({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">) => {
  return (
    <AnimationDomFC
      duration={duration ?? "500"}
      delay={delay ?? "0"}
      animationName={"evp-animation__bounce"}
      {...props}
    />
  );
};

EvpAnimation.Twinkle = ({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">) => {
  return (
    <AnimationDomFC
      duration={duration ?? "1000"}
      delay={delay ?? "0"}
      animationName={"evp-animation__Twinkle"}
      {...props}
    />
  );
};

EvpAnimation.BounceIn = ({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">) => {
  return (
    <AnimationDomFC
      duration={duration ?? "1000"}
      delay={delay ?? "0"}
      animationName={"evp-animation__BounceIn"}
      {...props}
    />
  );
};

EvpAnimation.Flip = ({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">) => {
  return (
    <AnimationDomFC
      duration={duration ?? "500"}
      delay={delay ?? "0"}
      animationName={"evp-animation__Flip"}
      {...props}
    />
  );
};

EvpAnimation.Shake = ({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">) => {
  return (
    <AnimationDomFC
      duration={duration ?? "1000"}
      delay={delay ?? "0"}
      animationName={"evp-animation__Shake"}
      {...props}
    />
  );
};

export default EvpAnimation;
