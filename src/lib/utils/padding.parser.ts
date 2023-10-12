import { ArrayLengthed } from "./index";
import { PropsParserFunc } from "./typing";

/**
 * @param pd This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px`
 * @returns
 */
export const paddingParser: PropsParserFunc = (
  pd?: ArrayLengthed<string | number | undefined | null, 4>
) => {
  function parse(val: string | number | undefined | null) {
    return typeof val === "number" ? `${val}px` : val ?? "";
  }
  if (pd) {
    if (typeof pd === "number") {
      return `${pd}px`;
    } else {
      const result = `${parse(pd[0])} ${parse(pd[1])} ${parse(pd[2])} ${parse(
        pd[3]
      )}`;
      return result.trim() === "" ? undefined : result;
    }
  } else {
    return undefined;
  }
};