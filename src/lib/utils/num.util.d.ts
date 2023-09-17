/**
 * To fix a number with certain precision strictly with zero added at the end
 * @param num
 * @param precision default is 2
 * @returns
 */
export declare const toFixedStrictly: (num: number, precision?: number) => string;
declare const NumUtils: {
    toFixedStrictly: (num: number, precision?: number) => string;
};
export default NumUtils;
