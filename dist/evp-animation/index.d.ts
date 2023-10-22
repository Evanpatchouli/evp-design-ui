import React from "react";
import { EvpAnimationDirection as AnimationDirection, EvpAnimationFillMode as AnimationFillMode, EvpAnimationDirection, EvpAnimationTimeFunction as TimeFunction } from "./../typings";
import { Pretify } from "../utils";
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
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & AnimationConfig;
export type ActiveStateWithAnimation<T = any> = Pretify<{
    state?: T | undefined;
    setState?: React.Dispatch<React.SetStateAction<T | undefined>>;
    activeValue?: T | undefined;
    inactiveValue?: T | undefined;
}>;
declare const EvpAnimation: {
    ({ duration, delay, name, ...props }: {
        trigger?: "click" | "hover" | ("click" | "hover")[] | undefined;
    } & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & AnimationConfig & {
        name?: string | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    Bounce({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Twinkle({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    BounceIn({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Flip({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Shake({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
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
export default EvpAnimation;
