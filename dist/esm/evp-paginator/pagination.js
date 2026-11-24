function positiveInteger(value, fallback) {
    if (value === undefined || !Number.isFinite(value))
        return fallback;
    var integer = Math.floor(value);
    return integer > 0 && Number.isSafeInteger(integer) ? integer : fallback;
}
function pageBounds(total, size, current) {
    var pageSize = positiveInteger(size, 10);
    var count = positiveInteger(total, 0);
    var pageCount = Math.max(1, Math.ceil(count / pageSize));
    var page = Math.min(positiveInteger(current, 1), pageCount);
    return { pageSize: pageSize, pageCount: pageCount, page: page };
}
function visiblePages(page, pageCount, counters) {
    var width = positiveInteger(counters, 5);
    var first = Math.floor((page - 1) / width) * width + 1;
    return Array.from({ length: Math.min(width, pageCount - first + 1) }, function (_, i) { return first + i; });
}

export { pageBounds, positiveInteger, visiblePages };
