import classNames from "classnames";
import { useState } from "react";

const EvpSwitchPropsExample = {
  active: false
}

export type EvpSwitchProps = Pretify<typeof EvpSwitchPropsExample>;

type Pretify<T> = { [P in keyof T]: T[P] } & ( {} );

export default function EvpSwitch(props: EvpSwitchProps) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={classNames(
        "evp",
        "evp-switch",
        active === true ? "active" : ""
      )}
    >
      <div
        className="evp-switch-btn"
        onClick={() => {
          setActive(!active);
        }}
        style={{
          left: active ? "0%" : "100%",
          // right: (js === 'right') ? 0 : void 0,
          transform: active ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="evp-switch-btn-content"></div>
      </div>
    </div>
  );
}
