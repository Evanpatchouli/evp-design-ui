export declare function parseDuration(time?: number | string): string;
export declare function parseDate(date: string): Date;
export declare function parseDateToISO(date: string): string;
export declare function parseDateToLocale(date: string): string;
export declare function parseDateToLocaleTime(date: string): string;
export declare function parseDateToLocaleTimeWithSeconds(date: string): string;
export declare function parseDateToLocaleTimeWithSecondsAndMilliseconds(date: string): string;
declare const TimeUtils: {
    parseDate: typeof parseDate;
    parseDateToISO: typeof parseDateToISO;
    parseDateToLocale: typeof parseDateToLocale;
    parseDateToLocaleTime: typeof parseDateToLocaleTime;
    parseDateToLocaleTimeWithSeconds: typeof parseDateToLocaleTimeWithSeconds;
    parseDateToLocaleTimeWithSecondsAndMilliseconds: typeof parseDateToLocaleTimeWithSecondsAndMilliseconds;
};
export default TimeUtils;
