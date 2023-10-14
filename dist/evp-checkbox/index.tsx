import { useContext, useEffect, useRef, useState } from "react";
import EvpRow from "../evp-row";
import EvpCol from "../evp-col";
import Icon from "../evp-icon";
import { Color } from "../constant";
import CheckedBox from "../evp-icon/checked-box";
import UncheckedBox from "../evp-icon/unchecked-box";
import EvpFormContext from "../evp-form-v2/context";
import GroupContext from "../evp-checkbox-group/context";

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
  defaultChecked?: boolean;
  /** Reactive value assigned to input box */
  value: string;
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
  radius?: number;
  disabled?: boolean;
};

export default function EvpCheckBox(props: EvpCheckBoxProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);
  const val = props.value;

  useEffect(() => {
    if (formCtx) {
      const state = formCtx.get(name) as Array<string> | undefined;
      if (!state) {
        formCtx.register({
          name: name as string,
          value: [],
        });
      }
    }
  }, [formCtx, name]);

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

  const [checked, setChecked] = useState<boolean>(
    props.defaultChecked ?? false
  );
  const deChecked = () => {
    setChecked(!checked);
    return void 0;
  };

  useEffect(() => {
    if (formCtx) {
      const state = formCtx.get(name) as Array<string>;
      if (checked) {
        state.push(props.value as string);
        formCtx.set(name as string, state);
      } else {
        state.splice(state.indexOf(props.value as string), 1);
        formCtx.set(name as string, state);
      }
    }
  }, [checked, formCtx, name, props.value]);

  return (
    <EvpCol
      mg={[4, 0, 4, 0]}
      alignItems="flex-start"
      class={`${props.disabled ? "evp-disabled" : ""}`.trim()}
    >
      <EvpRow>
        <div className="evp input">
          {checked ? (
            <CheckedBox
              class="input-checkbox"
              fill={Color.Blue}
              color={Color.Blue}
              radius={props.radius ?? 21}
              cursor={props.disabled? 'not-allowed' : 'pointer'}
              onClick={deChecked}
            />
          ) : (
            <UncheckedBox
              class="input-checkbox"
              color={Color.PaleBlue}
              strokeWidth={2}
              radius={props.radius ?? 21}
              cursor={props.disabled? 'not-allowed' : 'pointer'}
              onClick={deChecked}
            />
          )}
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
            </div>
          ) : null}
          <input
            hidden
            type="checkbox"
            name={name}
            value={val}
            checked={checked}
            defaultChecked={props.defaultChecked}
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
