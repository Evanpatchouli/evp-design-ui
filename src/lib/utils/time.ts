export function parseDuration(time: number | string = "0s") {
  if (time === undefined || time == null) {
    return "0s";
  }
  if (typeof time === "number") {
    return `${time}s`;
  }
  return time;
}

export function parseDate(date: string): Date {
  return new Date(date);
}
export function parseDateToISO(date: string): string {
  return parseDate(date).toISOString();
}
export function parseDateToLocale(date: string): string {
  return parseDate(date).toLocaleDateString();
}
export function parseDateToLocaleTime(date: string): string {
  return parseDate(date).toLocaleTimeString();
}
export function parseDateToLocaleTimeWithSeconds(date: string): string {
  return parseDate(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
export function parseDateToLocaleTimeWithSecondsAndMilliseconds(date: string): string {
  return parseDate(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3,
  });
}

const TimeUtils = {
  parseDate,
  parseDateToISO,
  parseDateToLocale,
  parseDateToLocaleTime,
  parseDateToLocaleTimeWithSeconds,
  parseDateToLocaleTimeWithSecondsAndMilliseconds,
};

export default TimeUtils;
