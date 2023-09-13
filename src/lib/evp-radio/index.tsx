import { useContext, useRef } from "react";
import GroupContext from "../evp-radio-group/context";
import { Booleanish, Hintable } from "../utils";

export type EvpRadioProps = {
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  name?: string;
  value?: Hintable<Booleanish> | number;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  class?: string;
};

export default function EvpRadio(props: EvpRadioProps) {
  const groupContext = useContext(GroupContext);
  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`evp input evp-radio ${props.class ?? ""} ${
        props.disabled ? "evp-disabled" : ""
      }`.trim()}
    >
      <input
        className="evp input-radio"
        name={props.name ?? groupContext.name}
        type="radio"
        value={props.value as string | number | undefined}
        defaultChecked={props.defaultChecked}
      />
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
      ) : (
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
          {props.children}
        </div>
      )}
    </div>
  );
}
