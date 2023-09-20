import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { boolStringfy } from "../utils";
import EvpFormContext from "../evp-form-v2/context";

interface IEvpSwitchProp {
  class?: string;
  /** If name exists, the component will be a formItem and try to register to formContext */
  name?: string;
  active?: boolean;
  defaultActive?: boolean;
  label?: React.ReactNode;
  labelSize?: string;
  labelWidth?: number | string;
  labelAlign?: "left" | "center" | "right";
  /** Whether to show a required `*` character, this is `only` a character not a validation! */
  required?: boolean;
  style?: React.CSSProperties;
}

// export type EvpSwitchProps = Pretify<
//   PartialByKeys<
//     IEvpSwitchProp,
//     | "active"
//     | "defaultActive"
//     | "class"
//     | "name"
//     | "label"
//     | "labelSize"
//     | "labelWidth"
//     | "labelAlign"
//     | "required"
//     | "style"
//   >
// >;

export type EvpSwitchProps = IEvpSwitchProp;

const EvpSwitch: React.FC<EvpSwitchProps> = (props) => {
  const formCtx = useContext(EvpFormContext);

  const [active, setActive] = useState<boolean>(props.defaultActive ?? false);
  function Active() {
    return props.active !== undefined ? props.active : active;
  }

  const [val, setVal] = useState<"true" | "false" | undefined>(
    boolStringfy(Active())
  );

  useEffect(() => {
    if (formCtx && props.name) {
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
    if (formCtx && props.name) {
      formCtx.set(props.name, val);
    }
  }, [formCtx, props.name, val]);

  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{ display: "flex", alignItems: "center", justifyContent: "left" }}
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
        </div>
      ) : null}
      <div
        className={classNames(
          "evp",
          "evp-switch",
          active === true ? "active" : ""
        )}
        onClick={() => {
          setActive(!active);
          setVal(boolStringfy(!active));
        }}
        style={props.style}
      >
        <div
          className="evp-switch-btn"
          style={{
            left: Active() ? "100%" : "0%",
            // right: (js === 'right') ? 0 : void 0,
            transform: Active() ? "translateX(-100%)" : "translateX(0%)",
          }}
        >
          <div className="evp-switch-btn-content"></div>
        </div>
        {props.name ? (
          <input name={props.name} hidden value={boolStringfy(Active())} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EvpSwitch;
