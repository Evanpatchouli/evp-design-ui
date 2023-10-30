import React from "react";
import core from "./core";

export type EvpAlertProps = {};

const EvpAlert: React.FC<EvpAlertProps> = (props) => {
  return (
    <div>
      <h1>EvpAlert</h1>
    </div>
  );
};

export { type AlertOptions } from "./core";

export { default as Alert } from "./alert";

const alert = core.alert;

export default alert;
