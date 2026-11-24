import EvpStyleProps from "../props/evp.style.prop";
import { EvpCursorRule, EvpPosition } from "../typings";
import cursorParser from "./cursor.parser";
import { marginParser } from "./margin.parser";
import { paddingParser } from "./padding.parser";
import RotateParser from "./rotate.parser";
import valParser from "./val.parser";

const spacingKey = /^(mg|pd)([trbl]?)_([^_]+)$/;
const sideIndex: Record<string, number> = { t: 0, r: 1, b: 2, l: 3 };

function spacingProps(props: EvpStyleProps) {
  const computed: { mg?: number[]; pd?: number[] } = {};
  if (props.mg != null && props.pd != null) return computed;

  for (const key of Object.keys(props)) {
    if (!key.startsWith("mg") && !key.startsWith("pd")) continue;
    const match = spacingKey.exec(key);
    if (!match || !props[key]) continue;
    const kind = match[1] as "mg" | "pd";
    if (props[kind] != null) continue;
    const value = Number(match[3]);
    if (!Number.isFinite(value)) continue;
    const sides = computed[kind] ?? (computed[kind] = [0, 0, 0, 0]);
    if (match[2]) {
      sides[sideIndex[match[2]]] += value;
    } else {
      for (let i = 0; i < sides.length; i++) sides[i] += value;
    }
  }
  return computed;
}

export default function StylePropsParser(props: EvpStyleProps): React.CSSProperties {
  const spacing = spacingProps(props);
  const style: React.CSSProperties & Record<string, unknown> = {
    cursor: cursorParser<EvpCursorRule>(props),
    color: props.color,
    backgroundColor: props.bgColor,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
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
    padding: paddingParser(props.pd ?? spacing.pd),
    margin: marginParser(props.mg ?? spacing.mg),
    rotate: RotateParser(props.rotate),
    gap: valParser(props.gap),
    transform: props.transform,
    transition: props.transition,
    scale: props.scale === undefined ? undefined : String(props.scale),
  };
  if (props.style) {
    for (const [key, value] of Object.entries(props.style)) {
      if (value !== undefined) style[key] = value;
    }
  }
  return style;
}
