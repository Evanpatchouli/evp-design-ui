import { useContext, useEffect, useRef, useState } from "react";
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

  const [val, setVal] = useState<typeof props.value>();
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className={`evp input evp-radio ${props.class ?? ""} ${props.disabled ? "evp-disabled" : ""}`.trim()}>
      <input
        className="evp input-radio"
        name={name}
        ref={inputRef}
        type="radio"
        value={props.value as string | number | undefined}
        defaultChecked={props.defaultChecked}
        // onChange={(e) => {
        //   setVal(e.target.value);
        // }}
        onClick={(e) => {
          setVal(props.value);
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
    </div>
  );
}
