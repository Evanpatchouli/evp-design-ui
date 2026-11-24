export function positiveInteger(value: number | undefined, fallback: number) {
  if (value === undefined || !Number.isFinite(value)) return fallback;
  const integer = Math.floor(value);
  return integer > 0 && Number.isSafeInteger(integer) ? integer : fallback;
}

export function pageBounds(total: number, size?: number, current?: number) {
  const pageSize = positiveInteger(size, 10);
  const count = positiveInteger(total, 0);
  const pageCount = Math.max(1, Math.ceil(count / pageSize));
  const page = Math.min(positiveInteger(current, 1), pageCount);
  return { pageSize, pageCount, page };
}

export function visiblePages(page: number, pageCount: number, counters?: number) {
  const width = positiveInteger(counters, 5);
  const first = Math.floor((page - 1) / width) * width + 1;
  return Array.from({ length: Math.min(width, pageCount - first + 1) }, (_, i) => first + i);
}
