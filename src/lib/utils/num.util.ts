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
  return num.toFixed(precision);
};

interface RangeOptions {
  inclusiveStart?: boolean;
  inclusiveEnd?: boolean;
}

export function range(start: number, end: number, options: RangeOptions = {}) {
  if (!Number.isFinite(start) || !Number.isFinite(end) || Math.max(Math.abs(start), Math.abs(end)) > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("Range bounds must be finite and within safe numeric limits");
  }
  if (start > end) {
    throw new Error("The proped start must be smaller than or equal to end");
  }
  const { inclusiveStart = true, inclusiveEnd = true } = options;
  if (end - start >= 0xffffffff) throw new RangeError("Range exceeds the array length limit");
  const result = [];
  for (let i = start; i <= end; i++) {
    if ((i !== start || inclusiveStart) && (i !== end || inclusiveEnd)) result.push(i);
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
