import { useContext, useEffect, useRef, useState } from "react";
import { Color } from "../constant";
import { default as Thumb } from "../evp-icon/radio";
import EvpToolTip from "../evp-tooltip";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import { emptyImg } from "../utils/img.utils";
import EvpCol from "../evp-col";
import { ArrayLengthed } from "../utils";

export type EvpSliderProps = {
  name: string;
  class?: string;
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;

  value?: number;
  defaultValue?: number;
  max?: number;
  min?: number;
  range?: ArrayLengthed<number | undefined, 2>;
  precision?: number;
  step?: number;
  width?: number;
  style?: React.CSSProperties;
};

export default function EvpSlider(props: EvpSliderProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);
  const [width, setWidth] = useState(props.width ?? 200);
  const length = (props.range?.[1] ?? 100) - (props.range?.[0] ?? 0);
  const [min, setMin] = useState(props.min ?? props.range?.[0] ?? 0);
  const [max, setMax] = useState(props.max ?? ((props.range?.[0] ?? 0) + length));
  const [val, setVal] = useState(props.value ?? props.defaultValue ?? min);
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

  const step = () => width / length;

  /**
   * @deprecated
   * ~Used to use rate to controll width~
   */
  const calcRate = () => {
    return ((val >= min ? val : min) / length) * 100;
  };

  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start">
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
          width: `calc(${width}px + ${labelWidth} + ${32}px)`,
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
              textAlign: labelAlign,
            }}
          >
            {props.required ? <div className="evp-required">*</div> : void 0}
            {props.label}
          </div>
        ) : null}
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
          tabIndex={-1}
          onMouseOver={stressThumb}
          onBlur={recoverThumb}
          // onDragStart={(e) => {
          //   e.currentTarget.classList.add("evp-dragging");
          // }}
          onDrag={(e) => {
            const deltaX =
              e.clientX - e.currentTarget.getBoundingClientRect().x;
            if (e.clientX) {
              let newVal = val + deltaX / step();

              if (newVal >= max) {
                newVal = max;
              } else if (newVal <= min) {
                newVal = min;
              }
              newVal = Number(newVal.toFixed(props.precision ?? 0));
              setVal(newVal);
              formCtx?.set(name, newVal);
              return false;
            }
          }}
          // onDragEnd={(e) => {
          //   e.currentTarget.classList.remove("evp-dragging");
          // }}
        >
          <EvpToolTip content={val} hidden={hiddenTip}>
            <Thumb {...thumbColors} cursor={"pointer"} />
          </EvpToolTip>
        </div>
      </div>
    </EvpCol>
  );
}
