/**
 * To fix a number with certain precision strictly with zero added at the end
 * @param num
 * @param precision default is 2
 * @returns
 */
export const toFixedStrictly = (num: number, precision: number = 2) => {
  if (typeof num !== "number") {
    throw new Error("The proped num must be a number");
  }
  let s = num.toFixed(precision);
  // Deal with the case where the number is negative
  if (precision > 0 && !s.includes(".")) {
    s = s + ".";
  }
  s = s.padEnd(s.length + precision - 1, "0");
  return s;
};

interface RangeOptions {
  inclusiveStart?: boolean;
  inclusiveEnd?: boolean;
}

export function range(start: number, end: number, options: RangeOptions = {}) {
  if (typeof start !== "number" || typeof end !== "number") {
    throw new Error("The proped start and end must be numbers");
  }
  if (start > end) {
    throw new Error("The proped start must be smaller than or equal to end");
  }
  if (start === end) return [start];
  const { inclusiveStart = true, inclusiveEnd = true } = options;
  const result = [];
  const step = start <= end ? 1 : -1;
  if (start === end) return [start];
  for (let i = start; i !== end + step; i += step) {
    if ((i === start && inclusiveStart) || (i === end && inclusiveEnd)) {
      result.push(i);
    } else if (i !== start && i !== end) {
      result.push(i);
    }
  }
  return result;
}

const pickNum = (value?: string | number) => {
  if (!value) {
    return {
      value: 0,
      unit: "px",
    };
  }
  if (typeof value === "number") {
    return {
      value,
      unit: "px",
    };
  }
  const match = value.match(/-?\d+(\.\d+)?/);
  if (match) {
    return {
      value: parseFloat(match[0]),
      unit: value.replace(match[0], ""),
    };
  }
  return {
    value: 0,
    unit: "px",
  };
};

const NumUtils = {
  toFixedStrictly,
  range,
  pickNum,
};

export default NumUtils;
