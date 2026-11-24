const historyLimit = 10;

export function recentRoutes(): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem("routes") ?? "null");
    if (Array.isArray(stored?.history)) {
      return stored.history.filter((path: unknown): path is string =>
        typeof path === "string" && /^\/(?!\/)/.test(path)
      ).slice(-historyLimit);
    }
  } catch {
    // Storage can be unavailable or contain an older, invalid value.
  }
  return [];
}

export function rememberRoute(path: string) {
  const history = recentRoutes();
  if (history[history.length - 1] !== path) history.push(path);
  try {
    localStorage.setItem("routes", JSON.stringify({ current: path, history: history.slice(-historyLimit) }));
  } catch {
    // Navigation still works when storage is unavailable.
  }
}
