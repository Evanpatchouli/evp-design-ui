import classNames from "classnames";
import Button, { EvpButtonProps } from "../evp-button";
import React from "react";
import valParser from "../utils/val.parser";
import RotateParser from "../utils/rotate.parser";

export type EvpGhostButtonGroupProps = {
  items?: EvpButtonProps[];
  direction?: "up" | "down" | "left" | "right";
  gap?: number;
  /** Only rotate the buttons group expaned. String should format `${number}deg`.
   * If you really want to only rotate the buttons group, you can first rotate the whole component, then rotate the content back.
   * @experimental unrecommended
   */
  groupRotate?: string | number;
  reverse?: boolean;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & EvpButtonProps;

const EvpGhostButtonGroup: React.FC<EvpGhostButtonGroupProps> = ({
  class: className,
  items,
  children,
  direction,
  gap,
  style,
  groupRotate,
  reverse,
  shadow,
  boxShadow,
  open,
  setOpen,
  ...props
}) => {
  const [opened, openSet] = React.useState(false);

  const realOpen = open !== undefined ? open : opened;

  const queneAdapter = (direction: EvpGhostButtonGroupProps["direction"]): React.CSSProperties => {
    switch (direction) {
      case "up":
        return {
          flexDirection: reverse ? "column" : "column-reverse",
          top: `-${valParser(gap) ?? "12px"}`,
          left: "50%",
          transform: `translateY(-100%) translateX(-50%) rotate(${RotateParser(groupRotate)})`,
        };
      case "down":
        return {
          flexDirection: reverse ? "column-reverse" : "column",
          top: `calc(100% + ${valParser(gap) ?? "12px"})`,
          left: "50%",
          transform: `translateX(-50%) rotate(${RotateParser(groupRotate)}`,
        };
      case "left":
        return {
          left: `-${valParser(gap) ?? "12px"}`,
          flexDirection: reverse ? "row" : "row-reverse",
          top: "50%",
          transform: `translateY(-50%) translateX(-100%) rotate(${RotateParser(groupRotate)}`,
        };
      case "right":
        return {
          left: `calc(100% + ${valParser(gap) ?? "12px"})`,
          flexDirection: reverse ? "row-reverse" : "row",
          top: "50%",
          transform: `translateY(-50%) rotate(${RotateParser(groupRotate)}`,
        };
      default:
        return {
          flexDirection: "column",
        };
    }
  };

  return (
    <Button
      theme="white"
      shape="circle"
      position="relative"
      style={{
        overflow: "visible",
        // @ts-ignore
        "--show-pre-boxshadow": shadow !== false ? boxShadow ?? "8px 10px 25px 0px rgba(0, 0, 0, 0.17)" : "none",
        ...style,
      }}
      class={classNames({
        "evp-ghost-buttons-group": true,
        "evp-ghost-buttons-group--opened": realOpen,
        className: true,
      })}
      {...props}
      $click={() => {
        openSet(!realOpen);
        setOpen && setOpen(!realOpen);
      }}
    >
      {/* ghost button group */}
      <div
        className="evp-ghost-buttons-group__items-quene"
        style={{
          ...queneAdapter(direction),
          pointerEvents: realOpen ? "all" : "none",
          gap: valParser(gap) ?? "12px",
        }}
      >
        {items?.map(({ class: className, ...item }, index) => (
          <Button
            class={classNames("evp-ghost-buttons-group__items-quene__item", className)}
            theme="white"
            shape="circle"
            {...item}
            style={{
              // position: "absolute",
              opacity: realOpen ? "1" : "0",
              scale: realOpen ? "1" : "0",
              transition: "all 0.2s ease, scale 0.2s ease-in-out",
            }}
          />
        ))}
      </div>
      {children}
    </Button>
  );
};

export default EvpGhostButtonGroup;
