import React from "react";
import { EvpAnimationDirection as AnimationDirection, EvpAnimationFillMode as AnimationFillMode, EvpAnimationDirection, EvpAnimationTimeFunction as TimeFunction } from "./../typings";
import { Hintable, Pretify } from "../utils";
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
        name?: Hintable<"evp-animation__bounce" | "evp-animation__BounceIn" | "evp-animation__Twinkle" | "evp-animation__Flip" | "evp-animation__Shake" | "evp-animation__ZoomIn" | "evp-animation__Fade" | "evp-animation__FadeIn" | "evp-animation__FadeInOut"> | undefined;
    }): import("react/jsx-runtime").JSX.Element;
    Bounce({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Twinkle({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    BounceIn({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Flip({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Shake({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    ZoomIn({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Fade({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    FadeIn({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    FadeOut({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
};
export type EvpAnimationFCProps<T = any> = EvpAnimationProps & {
    animationName: Hintable<"evp-animation__bounce" | "evp-animation__BounceIn" | "evp-animation__Twinkle" | "evp-animation__Flip" | "evp-animation__Shake" | "evp-animation__ZoomIn" | "evp-animation__Fade" | "evp-animation__FadeIn" | "evp-animation__FadeInOut">;
    cancelOnLeave?: boolean;
    /** `${num}ms, default is 50ms` */
    activeGap?: number;
    activeState?: ActiveStateWithAnimation<T>;
    onActive?: () => void;
    onInactive?: () => void;
};
export default EvpAnimation;
