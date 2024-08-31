import classNames from "classnames";
import Dom, { EvpDomProps } from "../evp-dom";
import React from "react";

export type EvpSnakeProps = {
  children?: React.ReactNode;
  startFrom?: "left" | "right" | "top" | "bottom";
} & EvpDomProps;

const EvpSnake: React.FC<EvpSnakeProps> = ({ class: classname, ...props }) => {
  const { children, startFrom = "left" } = props;

  const getDirectionClass = (index: number) => {
    const isEvenRow = Math.floor(index / 3) % 2 === 0;
    if (startFrom === "left" || startFrom === "top") {
      return isEvenRow ? "row-left" : "row-right";
    } else {
      return isEvenRow ? "row-right" : "row-left";
    }
  };

  return (
    <Dom class={classNames(`evp-snake evp-snake-from-${startFrom}`, classname)} {...props}>
      {React.Children.map(children, (child, index) => (
        <div className={`evp-snake-item ${getDirectionClass(index)}`} key={index}>
          {child}
        </div>
      ))}
    </Dom>
  );
};

export default EvpSnake;
