import { useContext, useEffect, useRef, useState } from "react";
import EvpToolTip from "../evp-tooltip";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import EvpCol from "../evp-col";
import { ArrayLengthed } from "../utils";
import NumUtils from "../utils/num.util";
import valParser from "../utils/val.parser";

export type EvpSliderProps = {
  name: string;
  class?: string;
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Default is false */
  labelColon?: boolean | React.ReactNode;
  /** Whether to show a required \`*\` character, this is \`only\` a character not a validation! */
  required?: boolean;

  value?: number;
  setValue?: (value: number) => void;
  /** default is 0 */
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** start (default 0) to end (default 100) */
  range?: ArrayLengthed<number | undefined, 2>;
  /** min limit, default is 0 */
  min?: number;
  /** max limit, default is max */
  max?: number;
  /** value precision, default is 0 */
  precision?: number;
  /** max width (number, px, em...) of slider bar */
  width?: number | string;
  /** whether to show etc, default is true */
  showEtc?: boolean;
  style?: React.CSSProperties;
  /**
   * @Todo unstart now
   * @Exterminal unsupport now */
  step?: number;
};

export default function EvpSliderV2(props: EvpSliderProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);
  const width = props.width ?? "200px";
  const length = (props.range?.[1] ?? 100) - (props.range?.[0] ?? 0);
  const min = props.min ?? props.range?.[0] ?? 0;
  const max = props.max ?? (props.range?.[0] ?? 0) + length;
  const [val, setVal] = useState(
    (props.value ?? props.defaultValue ?? min) >= min ? props.value ?? props.defaultValue ?? min : min
  );

  const rate = (val - (props.range?.[0] ?? 0)) / length;

  const CompDidMount = useRef(false);

  useEffect(() => {
    if (CompDidMount.current) {
      props.onChange?.(val);
    } else {
      CompDidMount.current = true;
    }
  }, [val]);

  useEffect(() => {
    if (formCtx) {
      const state = formCtx.get(name) as string | number | undefined;
      if (!state) {
        formCtx.register({
          name: name as string,
          value: undefined,
        });
      }
    }
  }, [formCtx, name]);

  useEffect(() => {
    if (formCtx) {
      formCtx.set(name as string, val);
    }
  }, [formCtx, name, val]);

  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  const tooltipText = NumUtils.toFixedStrictly(val, props.precision ?? 0);

  const [hiddenTip, setHiddenTip] = useState(true);

  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start" class="evp-form-item">
      <div
        className={`evp evp-slider ${props.class ?? ""}`.trim()}
        onMouseOver={() => {
          setHiddenTip(false);
        }}
        onMouseOut={() => {
          setHiddenTip(true);
        }}
        onMouseLeave={() => {
          setHiddenTip(true);
        }}
        style={{
          ...props.style,
          // @ts-ignore
          "--rate": `${rate * 100}%`,
          "--etcColor": props.showEtc !== false ? "#eee" : "transparent",
        }}
      >
        {props.label ? (
          <div
            ref={labelRef}
            className="evp input label"
            style={{
              fontSize: props.labelSize,
              width: labelWidth,
              justifyContent: labelAlign,
            }}
          >
            {props.required ? <div className="evp-required">*</div> : void 0}
            {props.label}
            {props.labelColon === true ? ":" : props.labelColon ?? void 0}
          </div>
        ) : null}
        <EvpToolTip content={tooltipText} hidden={hiddenTip}>
          <input
            type="range"
            name={props.name}
            style={{ width: valParser(width) }}
            min={props.range?.[0] ?? 0}
            max={props.range?.[1] ?? 100}
            onInput={(e) => {
              if (props.value !== undefined && props.setValue === undefined) {
                e.preventDefault();
                return;
              }
              const step = props.step ?? 1;
              let newVal = Number(e.currentTarget.value);
              newVal = Number(parseInt(`${(newVal ?? val) / step}`)) * step;
              if (newVal >= max) {
                newVal = max;
              } else if (newVal <= min) {
                newVal = min;
              }
              setVal(newVal);
              props.setValue?.(newVal);
              formCtx?.set(name, newVal);
            }}
            value={props.value ?? val}
            className="evp-slider-input"
            id="myRange"
          />
        </EvpToolTip>
      </div>
    </EvpCol>
  );
}
