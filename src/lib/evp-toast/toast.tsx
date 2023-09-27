import { Color } from "../constant";
import EvpIcon from "../evp-icon";
import { nanoid } from "nanoid";
import { IndexableFuzzy } from "../typings";

export type EvpToastType = "info" | "warn" | "error" | "success";

export interface ToastProps {
  text?: string;
  keep?: number;
  delay?: number;
  type?: EvpToastType;
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
    <div key={`evp-toast:${nanoid()}`} className="evp evp-toast">
      <EvpIcon name={icon[props.type ?? "info"]} color={color[props.type ?? "info"]} />
      <div children={props.text} />
    </div>
  );
}

export interface EvpToastCreate {
  (type?: EvpToastType, text?: string, keep?: number, delay?: number): JSX.Element;
}

export default Toast;
