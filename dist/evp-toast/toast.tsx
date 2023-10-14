import classNames from "classnames";
import { Color } from "../constant";
import EvpIcon from "../evp-icon";
import { IndexableFuzzy } from "../typings";

export type EvpToastType = "info" | "warn" | "error" | "success";

export interface ToastProps {
  text?: string;
  keep?: number;
  delay?: number;
  type?: EvpToastType;
  key: any;
  id: any;
  firstRendered?: boolean;
  lastRendered?: boolean;
}

function Toast(props: ToastProps) {
  const icon = {
    info: "info",
    warn: "warn",
    error: "error",
    success: "true_circle",
  };

  const color: IndexableFuzzy<Color> = {
    info: Color.Gray,
    warn: Color.Orange,
    error: Color.Red,
    success: Color.Green,
  };

  return (
    <div
      key={`evp-toast:${props.id}`}
      className={classNames(
        "evp",
        "evp-toast",
        props.firstRendered ? "evp-toast-appear" : "",
        props.lastRendered ? "evp-toast-leave" : ""
      )}
    >
      <EvpIcon name={icon[props.type ?? "info"]} color={color[props.type ?? "info"]} />
      <div children={props.text} />
    </div>
  );
}

export interface EvpToastCreate {
  (
    key: any,
    type?: EvpToastType,
    text?: string,
    keep?: number,
    delay?: number,
    firstRendered?: boolean,
    lastRendered?: boolean
  ): JSX.Element;
}

export default Toast;
