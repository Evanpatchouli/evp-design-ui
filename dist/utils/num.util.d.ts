/**
 * To fix a number with certain precision strictly with zero added at the end
 * @param num
 * @param precision default is 2
 * @returns
 */
export declare const toFixedStrictly: (num: number, precision?: number) => string;
interface RangeOptions {
    inclusiveStart?: boolean;
    inclusiveEnd?: boolean;
}
export declare function range(start: number, end: number, options?: RangeOptions): number[];
declare const NumUtils: {
    toFixedStrictly: (num: number, precision?: number) => string;
    range: typeof range;
};
export default NumUtils;
