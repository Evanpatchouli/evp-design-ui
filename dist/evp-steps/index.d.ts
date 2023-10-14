import React from "react";
import { type EvpButtonProps } from "../evp-button";
import EvpBaseProps from "../props";
import { Pretify } from "../utils";
export type Step = {
    key?: number;
    title?: React.ReactNode;
    desc?: React.ReactNode;
    content?: React.ReactNode;
};
export type EvpStepsProps = {
    /** Customize the header render */
    header?: (step?: Pretify<Step>, index?: number, steps?: Pretify<Step>[]) => React.ReactNode;
    steps?: Pretify<Step>[];
    defaultStep?: number;
    step?: number;
    setStep?: React.Dispatch<React.SetStateAction<number>>;
    /**
     * @description on step change event handler
     */
    onChange?: (step: number) => void;
    /**
     * @description The height of the step window.
     * @defaultValue 400px
     */
    windowWidth?: number | string;
    /**
     * @description The width of the step window.
     * @defaultValue 100%
     */
    windowHeight?: number | string;
    style?: React.CSSProperties;
    windowProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    /**
     * @defaultValue false
     */
    hideLastAtStepOne?: boolean;
    /**
     * @defaultValue true
     */
    hideNextAtLastStep?: boolean;
    lastProps?: EvpButtonProps;
    nextProps?: EvpButtonProps;
    confirmProps?: EvpButtonProps;
    onLast?: () => void;
    onNext?: () => void;
    onConfirm?: () => void;
} & EvpBaseProps;
declare const EvpSteps: React.FC<EvpStepsProps>;
export default EvpSteps;
