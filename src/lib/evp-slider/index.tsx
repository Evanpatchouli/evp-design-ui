import { useContext, useEffect, useRef, useState } from "react";
import { Color } from "../constant";
import { default as Thumb } from "../evp-icon/radio";
import EvpToolTip from "../evp-tooltip";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import { emptyImg } from "../utils/img.utils";
import EvpCol from "../evp-col";
import { ArrayLengthed } from "../utils";
import NumUtils from "../utils/num.util";

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
  /** max width (px) or slider bar */
  width?: number;
  /** whether to show etc, default is true */
  showEtc?: boolean;
  style?: React.CSSProperties;
  /**
   * @Todo unstart now
   * @Exterminal unsupport now */
  step?: number;
};

export default function EvpSlider(props: EvpSliderProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);
  const width = props.width ?? 200;
  const length = (props.range?.[1] ?? 100) - (props.range?.[0] ?? 0);
  const min = props.min ?? props.range?.[0] ?? 0;
  const max = props.max ?? (props.range?.[0] ?? 0) + length;
  const [val, setVal] = useState(
    (props.value ?? props.defaultValue ?? min) >= min ? props.value ?? props.defaultValue ?? min : min
  );

  const CompDidMount = useRef(false);

  useEffect(() => {
    if (CompDidMount.current) {
      props.onChange?.(val);
    } else {
      CompDidMount.current = true;
    }
  }, [val]);

  const [hiddenTip, setHiddenTip] = useState(true);
  const prgsRef = useRef<HTMLDivElement>(null);

  const [thumbColors, setThumbColors] = useState({
    color: Color.LightBlue,
    fill: Color.LightBlue,
  });

  const recoverThumb = () => {
    setThumbColors({
      color: Color.PaleBlue,
      fill: Color.PaleBlue,
    });
  };

  const stressThumb = () => {
    setThumbColors({
      color: Color.Blue,
      fill: Color.Blue,
    });
  };

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

  const thumbRef = useRef<HTMLDivElement>(null);

  const step = () => width / length;

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
        onDragStart={(e) => {
          e.nativeEvent.dataTransfer?.setDragImage(emptyImg, 0, 0);
          if (e.nativeEvent.dataTransfer?.effectAllowed) {
            e.nativeEvent.dataTransfer.effectAllowed = "move";
          }
        }}
        onDragEnter={(e) => {
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        style={{
          ...props.style,
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
        <div
          className="evp-slider-bar"
          style={{
            width: `calc(${width}px + ${thumbRef.current?.clientWidth ?? "24px"} + 0px)`,
          }}
        >
          <div
            className="evp-slider-progress"
            ref={prgsRef}
            style={{
              // width: `${calcRate()}%`,
              width: (val - (props.range?.[0] ?? 0)) * step(),
            }}
          ></div>
          <div
            draggable
            className="evp-draggable"
            ref={thumbRef}
            tabIndex={-1}
            onMouseOver={stressThumb}
            onBlur={recoverThumb}
            onDrag={(e) => {
              const deltaX = e.clientX - e.currentTarget.getBoundingClientRect().x;
              if (e.clientX) {
                let newVal = val + deltaX / step();

                if (newVal >= max) {
                  newVal = max;
                } else if (newVal <= min) {
                  newVal = min;
                }
                newVal = Number(newVal.toFixed(props.precision ?? 0));
                setVal(newVal);
                props.setValue?.(newVal);
                formCtx?.set(name, newVal);
                return false;
              }
            }}
          >
            <EvpToolTip content={NumUtils.toFixedStrictly(val, props.precision ?? 0)} hidden={hiddenTip}>
              <Thumb class="evp-slider-thumb" {...thumbColors} cursor={"pointer"} />
            </EvpToolTip>
          </div>
          <div hidden={!(props.showEtc === false ? false : true)} className="evp-slider-progress-etc"></div>
        </div>
      </div>
    </EvpCol>
  );
}
