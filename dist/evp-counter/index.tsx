import { cloneDeep } from "lodash";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import Left from "../evp-icon/left";
import Right from "../evp-icon/right";
import EvpFormContext from "../evp-form-v2/context";
import EvpCol from "../evp-col";

export interface EvpCounterProps extends EvpBaseProps {
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Default is false */
  labelColon?: boolean | React.ReactNode;
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  min?: number;
  max?: number;
  /** Default is 1 */
  step?: number;
  value?: number;
  defaultValue?: number;
}

const isNumber = (val: any) => {
  return typeof val === "number" && !Number.isNaN(val);
};

const purifyProps = (props: EvpCounterProps) => {
  return cloneDeep(AllParser(props));
};

const EvpCounter: React.FC<EvpCounterProps> = (props) => {
  const formCtx = useContext(EvpFormContext);
  const [val, setVal] = useState<number>(
    props.value !== undefined ? props.value : 0
  );
  const step = props.step ?? 1;

  const banLeft = () => {
    if (props.min !== undefined && val - step < props.min) {
      return "evp-disabled";
    }
  };

  const banRight = () => {
    if (props.max !== undefined && val + step > props.max) {
      return "evp-disabled";
    }
  };

  useEffect(() => {
    if (formCtx) {
      const state = formCtx.get(props.name) as string | number | undefined;
      if (!state) {
        formCtx.register({
          name: props.name as string,
          value: undefined,
        });
      }
    }
  }, [formCtx, props.name]);

  useEffect(() => {
    if (formCtx) {
      formCtx.set(props.name as string, val);
    }
  }, [formCtx, props.name, val]);

  const pureProps = purifyProps(props);

  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  // const calcMsgLeft = () => {
  //   return `${labelRef.current?.offsetWidth ?? 0}px`;
  // };

  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start">
      <div
        {...pureProps.event}
        className={classNames("evp", "evp-counter", pureProps.class)}
        style={{
          ...pureProps.style,
        }}
      >
        {props.label ? (
          <div
            ref={labelRef}
            className="evp input label"
            id="nnn"
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
        <div className={classNames("evp-counter-main")}>
          <Left
            class={classNames("evp-counter-lefter", banLeft())}
            style={{
              pointerEvents: banLeft() ? "none" : void 0,
            }}
            radius={20}
            onClick={() => {
              if (props.value === undefined) {
                if (props.min !== undefined) {
                  if (val - step >= props.min) {
                    setVal(val - step);
                  }
                } else {
                  setVal(val - step);
                }
              }
            }}
            pointer
          />
          <input
            className={classNames("evp-counter-input")}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            onChange={(e) => {
              e.preventDefault();
              if (props.value === undefined) {
                const valueNumer = Number(e.currentTarget.value);
                if (isNumber(valueNumer) === true) {
                  setVal(valueNumer);
                }
              }
            }}
            value={props.value !== undefined ? props.value : val}
            defaultValue={props.defaultValue}
          ></input>
          <Right
            class={classNames("evp-counter-righter", banRight())}
            style={{
              pointerEvents: banRight() ? "none" : void 0,
            }}
            radius={20}
            onClick={() => {
              if (props.value === undefined) {
                if (props.max !== undefined) {
                  if (val - step <= props.max) {
                    setVal(val + step);
                  }
                } else {
                  setVal(val + step);
                }
              }
            }}
            pointer
          />
        </div>
      </div>
    </EvpCol>
  );
};

export default EvpCounter;
