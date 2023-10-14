import { ArrayLengthed } from "./index";
import { PropsParserFunc } from "./typing";

export const marginParser: PropsParserFunc = (
  mg?: ArrayLengthed<string | number | undefined | null, 4>
) => {
  function parse(val: string | number | undefined | null) {
    return typeof val === "number" ? `${val}px` : val ?? "";
  }
  if (mg) {
    if (typeof mg === "number") {
      return `${mg}px`;
    } else {
      const result = `${parse(mg[0])} ${parse(mg[1])} ${parse(mg[2])} ${parse(
        mg[3]
      )}`;
      return result.trim() === "" ? undefined : result;
    }
  } else {
    return undefined;
  }
};