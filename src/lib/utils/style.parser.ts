import { shift } from ".";
import EvpStyleProps from "../props/evp.style.prop";
import { EvpCursorRule, EvpPosition } from "../typings";
import cursorParser from "./cursor.parser";
import { marginParser } from "./margin.parser";
import { paddingParser } from "./padding.parser";
import RotateParser from "./rotate.parser";
import valParser from "./val.parser";

export default function StylePropsParser(props: EvpStyleProps): React.CSSProperties {
  const keys: string[] = Object.keys(props);

  let padding: string | undefined = undefined;
  let margin: string | undefined = undefined;

  let paddingComputed: number[] = [0, 0, 0, 0];
  let marginComputed: number[] = [0, 0, 0, 0];

  if (props.mg) {
    margin = marginParser<string>(props.mg);
  } else {
    keys.forEach((key) => {
      // if props.pd not exist, parse quick props
      handleMargin(key);
    });
    margin = marginParser(isValidMgPdArray(marginComputed) ? marginComputed : [null, null, null, null]);
  }
  if (props.pd) {
    padding = paddingParser<string>(props.pd);
  } else {
    keys.forEach((key) => {
      // if props.mg not exist, parse quick props
      handlePadding(key);
    });
    padding = paddingParser(isValidMgPdArray(paddingComputed) ? paddingComputed : [null, null, null, null]);
  }

  let font = {
    size: props.fontSize,
    weight: props.fontWeight,
  };

  const cursor = cursorParser<EvpCursorRule>(props);
  return {
    cursor: cursor,
    color: props.color,
    backgroundColor: props.bgColor,
    fontSize: font.size,
    fontWeight: font.weight,
    border: props.border,
    boxShadow: props.boxShadow,
    zIndex: props.zIndex,
    position: props.position as EvpPosition,
    top: props.top,
    right: props.right,
    bottom: props.bottom,
    left: props.left,
    display: props.display,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    width: props.w,
    height: props.h,
    padding: padding,
    margin: margin,
    rotate: RotateParser(props.rotate) as any,
    gap: valParser(props.gap),
    transform: props.transform,
    transition: props.transition,
    scale: props.scale === undefined ? undefined : String(props.scale),
    ...shift(props.style),
  };

  function isValidMgPdArray(array: number[]) {
    return JSON.stringify(array) === "[0,0,0,0]" ? false : true;
  }

  function handleMargin(key: string): boolean {
    if (key.startsWith("mg") && props[key]) {
      const slices = key.split("_");
      if (slices.length !== 2) {
        return true;
      }
      switch (slices[0]) {
        case "mg": {
          marginComputed[0] += Number(slices[1]);
          marginComputed[1] += Number(slices[1]);
          marginComputed[2] += Number(slices[1]);
          marginComputed[3] += Number(slices[1]);
          break;
        }
        case "mgt": {
          marginComputed[0] += Number(slices[1]);
          break;
        }
        case "mgr": {
          marginComputed[1] += Number(slices[1]);
          break;
        }
        case "mgb": {
          marginComputed[2] += Number(slices[1]);
          break;
        }
        case "mgl": {
          marginComputed[3] += Number(slices[1]);
          break;
        }
        default: {
          // @ignore
        }
      }
      return true;
    }
    return false;
  }

  function handlePadding(key: string): boolean {
    if (key.startsWith("pd") && props[key]) {
      const slices = key.split("_");
      if (slices.length !== 2) {
        return true;
      }
      switch (slices[0]) {
        case "pd": {
          paddingComputed[0] += Number(slices[1]);
          paddingComputed[1] += Number(slices[1]);
          paddingComputed[2] += Number(slices[1]);
          paddingComputed[3] += Number(slices[1]);
          break;
        }
        case "pdt": {
          paddingComputed[0] += Number(slices[1]);
          break;
        }
        case "pdr": {
          paddingComputed[1] += Number(slices[1]);
          break;
        }
        case "pdb": {
          paddingComputed[2] += Number(slices[1]);
          break;
        }
        case "pdl": {
          paddingComputed[3] += Number(slices[1]);
          break;
        }
        default: {
          // @ignore
        }
      }
      return true;
    }
    return false;
  }
}
