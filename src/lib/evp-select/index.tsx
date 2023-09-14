import { useContext, useEffect, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import GroupContext from "../evp-radio-group/context";
import EvpFormContext from "../evp-form-v2/context";
import { Toast } from "..";

export type EvpSelectProps = {
  name?: string;
  options?: Array<{ label: string; value: any; key: React.Key }>;
  value?: any;
  /** label should be a string or EvpIcon */
  label?: string | JSX.Element;
  /** **Label font-Size:** default value is 14px */
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  rows?: number;
};

export default function EvpSelect(props: EvpSelectProps) {
  const groupContext = useContext(GroupContext);
  const name = props.name ?? groupContext.name;
  const formCtx = useContext(EvpFormContext);

  const [val, setVal] = useState<typeof props.value>();
  const [label, setLabel] = useState<string>();

  const [closeDelay, setCloseDelay] = useState("0s");

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

  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [expand, setExpand] = useState(false);

  const [cur, setCur] = useState<React.Key>();

  const optionSelected = (option: {
    label: string;
    value: any;
    key: React.Key;
  }) => {
    return option.key === cur ? "evp-select-option-selected" : "";
  };

  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  return (
    <EvpCol mg={[4, 0, 4, 0]} alignItems="flex-start">
      <EvpRow>
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
        <div className="evp evp-select">
          <input
            placeholder="Select"
            ref={inputRef}
            className="evp input input-box evp-select-input"
            value={label}
            readOnly
            onClick={() => {
              optionsRef.current?.focus();
              setCloseDelay("0.3s");
              setExpand(!expand);
            }}
            onBlur={(e) => {
              setCloseDelay("0.1s");
              if (expand) {
                setExpand(false);
              }
            }}
          ></input>
          <div
            className={`evp-select-options ${expand ? "" : "evp-close"}`.trim()}
            tabIndex={-1}
            ref={optionsRef}
            onBlur={(e) => {
              if (expand) {
                setExpand(false);
              }
            }}
            style={{
              width: inputRef.current?.clientWidth,
              cursor: "pointer",
              animationDelay: closeDelay,
              height: props.rows ? props.rows * (24 + 8) + 4 * 2 + 0 : void 0,
            }}
          >
            {props.options?.map((option) => (
              <div
                className={`evp-select-option ${optionSelected(option)}`.trim()}
                key={option.value}
                onMouseUp={() => {
                  setCloseDelay("0.3s");
                  setCur(option.key);
                  setVal(option.value);
                  setLabel(option.label);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
          <select name={name} hidden>
            {props.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </EvpRow>
    </EvpCol>
  );
}
