import { useEffect, useRef, useState } from "react";
import EvpRow from "../evp-row";
import EvpCol from "../evp-col";
import { Icon } from "..";
import { Color } from "../constant";
import CheckedBox from "../evp-icon/checked-box";
import UncheckedBox from "../evp-icon/unchecked-box";

export type EvpCheckBoxRule = {
  /** default color is "red" */
  color?: string;
  /** **required:** If required.on is `false`, all the rules **will not work!**. `on` means to enable this rule, `val` means whether the value input can be empty, `msg` means the warnning message */
  required?: { on: boolean; val: boolean; msg?: string };
  /**
   * When to trigger the rule, default is `onEnter`
   */
  trigger?: "onChange" | "onEnter" | "onSubmit" | "Never";
  /** **Smart Trigger:** default is `true`. Initially, it will keep to be `onChange` `until the value is valid`,
   * and then the trigger will be `temporarily` set to the `props.rule.trigger`,
   * and `at next time` when it get invalid results under `props.rule.trigger` ,
   * it will reset the trigger to `onChange` until is valid*/
  smartTrigger?: boolean;
  custom?: (value: string) => string | undefined | null | void;
};

export type EvpCheckBoxProps = {
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  name?: string;
  placeholder?: string;
  /** defaultValue assigned to input box*/
  default?: string | number;
  /** Reactive value assigned to input box */
  value?: string | number;
  hint?: {
    text?: string;
    color?: string;
  };
  children?: React.ReactNode;
  rule?: EvpCheckBoxRule;
  warnReader?: {
    ref?: Readonly<string>;
    setWarn: React.Dispatch<React.SetStateAction<string>>;
  };
  resultIcon?: boolean;
};

export default function EvpCheckBox(props: EvpCheckBoxProps) {
  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  const [validateTrigger, setValidateTrigger] = useState("onChange");
  const [warning_msg, setWarning_msg] = useState<string | undefined>(
    props.warnReader?.ref
  );
  const warnColor = props.rule?.color ?? "red";
  const hintColor = props.hint?.color ?? "grey";
  const [isValid, setIsValid] = useState(false);
  const smartTrigger = props.rule?.smartTrigger ?? true;
  const showRightIcon = props.resultIcon ?? false;

  const [msgColor, setMsgColor] = useState(hintColor);
  useEffect(() => {
    if (!isValid) {
      setMsgColor(warnColor);
      if (!warning_msg) {
        setMsgColor(hintColor);
      }
    }
  }, [isValid, warnColor, warning_msg, hintColor]);
  const calcMsgLeft = () => {
    return `${labelRef.current?.offsetWidth ?? 0}px`;
  };
  const [val, setVal] = useState(props.value);
  const [checked, setChecked] = useState<boolean>(false);
  const deChecked = () => {
    if (checked) {
      setVal('');
    } else {
      setVal(props.value)
    }
    setChecked(!checked);
    return void 0;
  };
  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start">
      <EvpRow>
        <div className="evp input">
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
          {checked ? (
            <CheckedBox
              fill={Color.Blue}
              color={Color.Blue}
              radius={21}
              cursor="pointer"
              onClick={deChecked}
            />
          ) : (
            <UncheckedBox
              color={Color.PaleBlue}
              strokeWidth={2}
              radius={21}
              cursor="pointer"
              onClick={deChecked}
            />
          )}
          <input
            hidden
            className={`evp input-checkbox`}
            type="checkbox"
            name={props.name}
            value={val}
            checked={checked}
            defaultValue={props.default}
          />
          {showRightIcon ? (
            <div className="evp input icon">
              <Icon
                name="true_circle"
                color={Color.HeavyGreen}
                $visibleSync={isValid}
              />
            </div>
          ) : null}
        </div>
      </EvpRow>
      <div
        className="evp-input-msg"
        style={{
          color: msgColor,
          paddingLeft: calcMsgLeft(),
        }}
      >
        {isValid ? "" : warning_msg ? warning_msg : props.hint?.text}
      </div>
    </EvpCol>
  );
}