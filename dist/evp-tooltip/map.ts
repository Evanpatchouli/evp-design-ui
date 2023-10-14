import { Hintable } from "../utils";
import { EvpToolTipProps } from "./index";

export const transformMap: {
  vertical: Record<Hintable<"top" | "center" | "bottom" | number>, string>;
  horizontal: Record<Hintable<"left" | "center" | "right" | number>, string>;
} = {
  vertical: {
    top: "0%",
    center: "-50%",
    bottom: "-100%",
  },
  horizontal: {
    left: "-100%",
    center: "-50%",
    right: "0%",
  },
};

export const OffsetMap = (props: EvpToolTipProps) => {
  return {
    top: {
      top: "0%",
      left: "50%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(${transformMap.vertical[props.transform?.vertical ?? "bottom"]} - 4px))`,
    },
    topLeft: {
      top: "0%",
      left: "20%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(${transformMap.vertical[props.transform?.vertical ?? "bottom"]} - 4px))`,
    },
    topLeftCorner: {
      top: "0%",
      left: "0%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "left"] ?? props.transform?.horizontal
      }, calc(${transformMap.vertical[props.transform?.vertical ?? "bottom"]} - 4px))`,
    },
    topRight: {
      top: "0%",
      left: "80%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(${transformMap.vertical[props.transform?.vertical ?? "bottom"]} - 4px))`,
    },
    topRightCorner: {
      top: "0%",
      left: "100%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "right"] ?? props.transform?.horizontal
      }, calc(${transformMap.vertical[props.transform?.vertical ?? "bottom"]} - 4px))`,
    },
    left: {
      left: "0%",
      top: "50%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "left"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "left"] + " - 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    leftTop: {
      left: "0%",
      top: "20%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "left"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "left"] + " - 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    leftBottom: {
      left: "0%",
      top: "80%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "left"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "left"] + " - 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    right: {
      left: "100%",
      top: "50%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "right"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "right"] + " + 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    rightTop: {
      left: "100%",
      top: "20%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "right"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "right"] + " + 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    rightBottom: {
      left: "100%",
      top: "80%",
      transform: `translate(calc(${
        transformMap.horizontal[props.transform?.horizontal ?? "right"]
          ? transformMap.horizontal[props.transform?.horizontal ?? "right"] + " + 4px"
          : props.transform?.horizontal
      }), ${transformMap.vertical[props.transform?.vertical ?? "center"]})`,
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(-${transformMap.vertical[props.transform?.vertical ?? "top"]} + 4px))`,
    },
    bottomLeft: {
      top: "100%",
      left: "20%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(-${transformMap.vertical[props.transform?.vertical ?? "top"]} + 4px))`,
    },
    bottomLeftCorner: {
      top: "100%",
      left: "0%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "left"] ?? props.transform?.horizontal
      }, calc(-${transformMap.vertical[props.transform?.vertical ?? "top"]} + 4px))`,
    },
    bottomRight: {
      top: "100%",
      left: "80%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "center"] ?? props.transform?.horizontal
      }, calc(-${transformMap.vertical[props.transform?.vertical ?? "top"]} + 4px))`,
    },
    bottomRightCorner: {
      top: "100%",
      left: "100%",
      transform: `translate(${
        transformMap.horizontal[props.transform?.horizontal ?? "right"] ?? props.transform?.horizontal
      }, calc(-${transformMap.vertical[props.transform?.vertical ?? "top"]} + 4px))`,
    },
  };
};
