
/**
 * To fix a number with certain precision strictly with zero added at the end
 * @param num 
 * @param precision default is 2
 * @returns 
 */
export const toFixedStrictly = (num: number, precision: number = 2) => {
  if (typeof num !== 'number') {
    throw new Error('The proped num must be a number');
  }
  let s = num.toFixed(precision);
  // Deal with the case where the number is negative
  if (precision > 0 && !s.includes(".")) {
    s = s + ".";
  }
  s = s.padEnd(s.length + precision, "0");
  return s;
};

const NumUtils = {
  toFixedStrictly,
};

export default NumUtils;
