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

const Trigger = (trigger: EvpAnimationProps["trigger"], animationName: string = "none") => {
  switch (trigger) {
    case "click":
      return {
        "--hover-animation-name": "none",
        "--click-animation-name": animationName,
      };
    case "hover":
      return {
        "--hover-animation-name": animationName,
        "--click-animation-name": "none",
      };
    default:
      return {
        "--hover-animation-name": animationName,
        "--click-animation-name": "none",
      };
  }
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

  React.useEffect(() => {
    if (animated) {
      timer.current = setTimeout(() => {
        setAnimated("");
        setTimer({
          current: null,
        });
      }, Number(animation.animationDuration));
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
        setTimer({
          current: null,
        });
      }
    }
  }, [animated]);

  const dispatchAnimation = () => {
    setTimeout(() => {
      setAnimated("");
      setAnimated(animation.animationName);
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
          setAnimated("");
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
