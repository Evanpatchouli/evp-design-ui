import { range } from "../utils/num.util";
import Star from "../evp-icon/star";
import React, { useEffect, useState } from "react";
import { Color } from "../constant";
import classNames from "classnames";
import EvpBaseProps from "../props";
import Dom from "../evp-dom";

export type EvpRateProps = {
  class?: string;
  /** 星星数量 */
  count?: number;
  value?: number;
  setValue?: (value: number) => void;
  defaultValue?: number;
  onStarClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, order?: number) => void;
  onChange?: (order?: number) => void;
  starColor?: {
    unselected?: string;
    unselectedOpacity?: string | number;
    selected?: string;
    selectedOpacity?: string | number;
  };
} & EvpBaseProps;

function adjustValue(value: number, count: number) {
  if (value < 0) {
    return 0;
  } else if (value > count) {
    return count;
  } else {
    return value;
  }
}

const EvpRate: React.FC<EvpRateProps> = ({
  class: className,
  count,
  value,
  setValue,
  defaultValue,
  onStarClick,
  onChange,
  starColor,
  ...props
}) => {
  if (count !== undefined && count < 1) {
    throw new Error("EvpStar count must be greater than 0 !");
  }
  const [val, setVal] = useState(defaultValue ?? 0);
  const [last, setLast] = useState(val);

  const realVal = value !== undefined ? adjustValue(value, count ?? 5) : val;

  useEffect(() => {
    onChange?.(realVal);
  }, [realVal]);

  return (
    <Dom class={classNames("evp-rate", className ?? "")} {...props}>
      {range(1, count ?? 5).map((i) => (
        <Star
          class="evp-rate__star"
          style={{
            transition: "all 0.2s ease-in-out",
            opacity:
              i <= realVal && realVal !== last
                ? `${starColor?.selectedOpacity ?? 1}`
                : `${starColor?.unselectedOpacity ?? 0.3}`,
          }}
          pointer
          key={i}
          fill={
            i <= realVal && realVal !== last
              ? starColor?.selected ?? Color.DeepYellow
              : starColor?.unselected ?? Color.Gray
          }
          onClick={(e) => {
            if (onStarClick) {
              onStarClick(e);
            } else {
              if (!(value !== undefined && value !== null && !setValue)) {
                setLast(realVal);
              }
              setValue?.(i);
              setVal(i);
              if (realVal === last) {
                // clean last
                setLast(-1);
              }
            }
          }}
        />
      ))}
    </Dom>
  );
};

export default EvpRate;
