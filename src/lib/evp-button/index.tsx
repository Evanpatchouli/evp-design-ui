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
  theme?: "white" | "primary" | "success" | "warning" | "danger" | "info" | "dark" | "text";
  plain?: boolean;
  size?: "mini" | "small" | "middle" | "large" | "huge";
  /** default is undefined, square will has 0 border-radius */
  shape?: "circle" | "round" | "square";
  /** default is false : whether to show preserved box-shadow */
  shadow?: boolean;
  link?: string | { path?: string; hash?: boolean };
  hash?: boolean;
  loading?: boolean;
  fade?: boolean;
  ripple?: boolean;
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

  function positionRipple(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const { clientWidth, clientHeight } = button;
    button.style.setProperty("--ripple-x", `${event.nativeEvent.offsetX}px`);
    button.style.setProperty("--ripple-y", `${event.nativeEvent.offsetY}px`);
    button.style.setProperty("--ripple-w", `${clientWidth * 3}px`);
    button.style.setProperty("--ripple-h", `${clientHeight * 3}px`);
  }

  return (
    <button
      // `evp evp-button ${theme} ${shadow} ${size} ${plain} ${shape} ${$class} ${
      //   props.loading ? "evp-disabled" : ""
      // }`.trim()
      className={classNames({
        evp: true,
        "evp-button": true,
        [theme]: true,
        [shadow]: true,
        [size]: true,
        [plain]: true,
        [shape]: true,
        "evp-btn-fade": props.fade ?? true,
        ripple: props.ripple ?? false,
        "evp-disabled": props.loading ?? false,
        [$class]: true,
      })}
      id={$props.id}
      onClick={clickHandler}
      onClickCapture={props.ripple ? positionRipple : undefined}
      style={$props.style}
      type={props.type ?? "button"}
    >
      <div className="evp-button-content">
        {
          <EvpLoading.Text
            className={classNames("btn-loading", props.loading ? "" : "hidden")}
            style={{
              marginRight: props.loading === true ? (props.children ?? props.text ? 14 : 0) : 0,
            }}
          />
        }
        {props.children ?? props.text ?? ""}
        {/* {JSON.stringify(clickSite)} */}
      </div>
    </button>
  );
};

export default EvpButton;
