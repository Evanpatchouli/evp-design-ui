import React from "react";
import AllParser from "../utils/props.parser";
import EvpBaseProps from "../props";
import { linkTo } from "../utils/route";
import EvpLoading from "../evp-loading";
import classNames from "classnames";

export type EvpButtonProps = EvpButtonSpecProps & EvpBaseProps;

interface EvpButtonSpecProps {
  /** The button text, it will be overrided by props.children if that exists */
  text?: string;
  /** Default type is 'button' */
  type?: "button" | "reset" | "submit";
  /** Default theme is 'primary' */
  theme?:
    | "white"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "dark"
    | "text";
  plain?: boolean;
  size?: "mini" | "small" | "middle" | "large" | "huge";
  /** default is undefined, square will has 0 border-radius */
  shape?: "circle" | "round" | "square";
  /** default is false : whether to show preserved box-shadow */
  shadow?: boolean;
  link?: string | { path?: string; hash?: boolean };
  hash?: boolean;
  loading?: boolean;
}

const EvpButton: React.FC<EvpButtonProps> = (props: EvpButtonProps) => {
  // const default_clickHandler = () => undefined;
  const $props = AllParser(props);

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const clickHandler = (e: React.MouseEvent) => {
    $props.event.onMouseDown?.(e);
    props.link ? linkTo(props.link, props.hash) : void 0;
  };

  const theme = props.theme ?? "primary";
  const shadow = props.shadow ? "evp-pale-shadow" : "";
  const size = props.size ?? "middle";
  const plain = props.plain ? "plain" : "";
  const shape = props.shape ?? "";
  const $class = props.class ?? "";
  return (
    <button
      className={`evp evp-button ${theme} ${shadow} ${size} ${plain} ${shape} ${$class} ${
        props.loading ? "evp-disabled" : ""
      }`.trim()}
      id={$props.id}
      onClick={clickHandler}
      style={$props.style}
      type={props.type ?? "button"}
    >
      <div className="evp-button-content">
        {
          <EvpLoading.Text
            className={classNames("btn-loading", props.loading ? "" : "hidden")}
            style={{
              marginRight:
                props.loading === true
                  ? props.children ?? props.text
                    ? 14
                    : 0
                  : 0,
            }}
          />
        }
        {props.children ?? props.text ?? ""}
      </div>
    </button>
  );
};

export default EvpButton;
