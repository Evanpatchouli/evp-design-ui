import React, { useState } from "react";
import { BounceOptions } from "./bounce";
import classNames from "classnames";
import { Nullable } from "../utils";
import { Animation } from "../utils/animation";

export type EvpAnimationProps = {
  trigger?: "click" | "hover" | Array<"click" | "hover">;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
  BounceOptions;

const EvpAnimation = (props: EvpAnimationProps) => {
  return <div>{props.children}</div>;
};

export type EvpAnimationFCProps = EvpAnimationProps & { animationName: string; cancelOnLeave?: boolean };

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

  const dispatchAnimation = () => {
    setTimeout(() => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      setAnimated("");
      setTimeout(() => {
        setAnimated(animation.animationName);
      }, 50); // to make the css animation stateful for a gap of 20ms
      setTimer({
        current: setTimeout(() => setAnimated(""), Number(animation.animationDuration)),
      });
    }, Number(animation.animationDelay));
  };

  return (
    <div
      tabIndex={-1}
      className={classNames(animated, className)}
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
