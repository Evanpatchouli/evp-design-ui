import { useContext, useEffect, useRef } from "react";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";


export type EvpRadioProps = {
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  name?: string;
  value: string | number | undefined;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  class?: string;
};

export default function EvpRadio(props: EvpRadioProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);
  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const { value, disabled } = props;
  const group = name === groupContext.name ? groupContext : undefined;
  const controlled = group?.value !== undefined;
  const checked = controlled ? group?.value === value : undefined;
  const defaultChecked = group?.default !== undefined ? group.default === value : props.defaultChecked;

  useEffect(() => {
    if (!formCtx || !name || disabled) return;
    const unregister = formCtx.register({ name });
    if (inputRef.current?.checked) formCtx.set(name, value);
    return () => {
      if (formCtx.get(name) === value) formCtx.set(name, undefined);
      unregister();
    };
  }, [formCtx, name, value, disabled]);
  useEffect(() => {
    if (!controlled || !formCtx || !name || disabled) return;
    if (checked) formCtx.set(name, value);
    else if (formCtx.get(name) === value) formCtx.set(name, undefined);
  }, [controlled, checked, formCtx, name, value, disabled]);

  return (
    <label className={`evp input evp-radio ${props.class ?? ""} ${props.disabled ? "evp-disabled" : ""}`.trim()}>
      <input
        className="evp input-radio"
        name={name}
        ref={inputRef}
        type="radio"
        value={props.value as string | number | undefined}
        disabled={disabled}
        checked={checked}
        defaultChecked={controlled ? undefined : defaultChecked}
        onChange={(event) => {
          if (!controlled && formCtx && name && event.currentTarget.checked) formCtx.set(name, value);
        }}
        style={{
          cursor: props.disabled ? "not-allowed" : "pointer",
        }}
      />
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
      ) : (
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
          {props.children}
        </div>
      )}
    </label>
  );
}
