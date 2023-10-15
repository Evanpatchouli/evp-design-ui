import React from "react";
import { BounceOptions } from "./bounce";
export type EvpAnimationProps = {
    trigger?: "click" | "hover" | Array<"click" | "hover">;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & BounceOptions;
declare const EvpAnimation: {
    (props: EvpAnimationProps): import("react/jsx-runtime").JSX.Element;
    Bounce({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Twinkle({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    BounceIn({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Flip({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
    Shake({ duration, delay, ...props }: Omit<EvpAnimationFCProps, "animationName">): import("react/jsx-runtime").JSX.Element;
};
export type EvpAnimationFCProps = EvpAnimationProps & {
    animationName: string;
    cancelOnLeave?: boolean;
};
export default EvpAnimation;
