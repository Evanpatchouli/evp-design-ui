import classNames from "classnames";
import { useContext, useRef, useState } from "react";
import { boolStringfy } from "../utils";
import EvpFormContext from "../evp-form-v2/context";
import { useFormField } from "../evp-form-v2/hooks";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";

interface IEvpSwitchProp extends EvpBaseProps {
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
  size?: "mini" | "small" | "middle" | "large" | "huge";
  /** default is twice (2) of height */
  widthFactor?: number;
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

  const pureProps = AllParser(props);

  const [active, setActive] = useState<boolean>(props.defaultActive ?? false);
  function Active() {
    return props.active !== undefined ? props.active : active;
  }



  useFormField(formCtx, props.name, boolStringfy(Active()));

  const labelWidth = props.labelWidth
    ? typeof props.labelWidth === "number"
      ? `${props.labelWidth}px`
      : props.labelWidth
    : void 0;
  const labelAlign = props.labelAlign ?? "left";
  const labelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        ...pureProps.style,
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
        </div>
      ) : null}
      <div
        className={classNames(
          "evp",
          "evp-switch",
          props.size,
          active === true ? "active" : ""
        )}
        onClick={() => {
          setActive(!active);

        }}
        style={{
          // @ts-ignore
          "--width-factor": props.widthFactor ?? 2,
        }}
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
