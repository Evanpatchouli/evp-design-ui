import React from "react";
import Button, { type EvpButtonProps } from "../evp-button";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import EvpDom from "../evp-dom/index";
import classNames from "classnames";
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

const EvpSteps: React.FC<EvpStepsProps> = (props: EvpStepsProps) => {
  const didMounted = React.useRef<boolean>(false);

  const { setStep } = props;
  let [_step, _setStep] = React.useState<number>(props.defaultStep ?? 1);

  function step() {
    return props.step ?? _step;
  }

  React.useEffect(() => {
    if (didMounted.current) {
      props.onChange?.(step());
    } else {
      didMounted.current = true;
    }
  }, [step]);

  const $props = AllParser(props);
  return (
    <EvpDom
      class={classNames("evp", "evp-steps", $props.class)}
      id={$props.id}
      style={{
        ...$props.style,
        height: typeof props.h === "number" ? `${props.h}px` : props.h ?? "100%",
      }}
      loading={$props.loading}
      {...$props.event}
      hidden={$props.hidden}
    >
      {props.header ? (
        props.header(
          {
            ...(props.steps?.[step() - 1] ?? {}),
          },
          props.steps?.findIndex((item) => item === props.steps?.[step() - 1]) ?? -1,
          props.steps ?? []
        )
      ) : (
        <div className="evp-steps-header">
          <span className="evp-steps-header-title">{props.steps?.[step() - 1]?.title}</span>
          <span className="evp-steps-header-desc">{props.steps?.[step() - 1]?.desc}</span>
        </div>
      )}
      <div
        {...props.windowProps}
        className={classNames("evp-steps-window", props.windowProps?.className)}
        style={{
          // @ts-ignore
          "--windowWidth":
            typeof props.windowWidth === "number" ? `${props.windowWidth}px` : props.windowWidth ?? "400px",
          height: typeof props.windowHeight === "number" ? `${props.windowHeight}px` : props.windowHeight ?? "100%",
          ...props.windowProps?.style,
        }}
      >
        <div
          className="evp-steps-list"
          style={{
            width: `${100 * (props.steps?.length ?? 1)}%`,
            left: `${(step() - 1) * -100}%`,
          }}
        >
          {props.steps?.map((item) => {
            return (
              <>
                <div className="evp-steps-item">{item.content}</div>
              </>
            );
          })}
        </div>
      </div>
      <div className="evp-steps-btns">
        {props.hideLastAtStepOne === true && step() === 1 ? (
          void 0
        ) : (
          <Button
            theme="white"
            $click={() => {
              if (step() === 1) return;
              _setStep(step() - 1);
              setStep?.(step() - 1);
              props.onLast?.();
            }}
            class={classNames({ "evp-disabled": step() === 1 })}
            mgr_8
            {...props.lastProps}
          >
            Last Step
          </Button>
        )}
        {props.hideNextAtLastStep !== false && step() === (props.steps?.length ?? 1) ? (
          void 0
        ) : (
          <Button
            $click={() => {
              if (step() === (props.steps?.length ?? 0)) return;
              _setStep(step() + 1);
              setStep?.(step() + 1);
              props.onNext?.();
            }}
            class={classNames({ "evp-disabled": step() === props.steps?.length ?? 1 })}
            mgr_8
            {...props.nextProps}
          >
            Next Step
          </Button>
        )}
        {step() === props.steps?.length ? (
          <Button
            mgr_8
            $click={() => {
              props.onConfirm?.();
            }}
            {...props.confirmProps}
          >
            Confirm
          </Button>
        ) : (
          void 0
        )}
      </div>
    </EvpDom>
  );
};

export default EvpSteps;
