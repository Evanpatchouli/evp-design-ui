import { EvpAnimationTimeFunction, EvpAnimationDirection, EvpAnimationFillMode } from "../typings";
export declare class Animation {
    animationName: string | undefined;
    animationDuration: string;
    animationTimingFunction: EvpAnimationTimeFunction;
    animationDelay: string;
    animationIterationCount: number;
    animationDirection: EvpAnimationDirection;
    animationFillMode: EvpAnimationFillMode;
    constructor(name?: string, duration?: number | string | undefined);
    json(): {
        animationNme: string | undefined;
        animationDuration: string;
        animationTimingFunction: EvpAnimationTimeFunction;
        animationDelay: string;
        animationIterationCount: number;
        animationDirection: EvpAnimationDirection;
        animationFillMode: EvpAnimationFillMode;
    };
    toJsonWithoutName(): {
        animationDuration: string;
        animationTimingFunction: EvpAnimationTimeFunction;
        animationDelay: string;
        animationIterationCount: number;
        animationDirection: EvpAnimationDirection;
        animationFillMode: EvpAnimationFillMode;
    };
    stringify(): string;
    static fromObject(obj: any): Animation;
    toString(): string;
}
