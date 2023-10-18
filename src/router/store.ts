const CONFIG = {
  LIMIT: 10,
};

export const getRouteStore = (): {
  current: string;
  history: string[];
} => {
  return JSON.parse(
    localStorage.getItem("routes") ??
      JSON.stringify({
        current: "/",
        history: [],
      })
  );
};

export const updateRouteCurrent = (pathname: string) => {
  const routesStorage = getRouteStore();
  localStorage.setItem(
    "routes",
    JSON.stringify({
      history: [...(routesStorage.history ?? []), pathname]
        .filter((value, index, array) => {
          return index === 0 || value !== array[index - 1];
        })
        .slice(-1 * CONFIG.LIMIT),
      current: pathname,
    })
  );
};

export const linkTo = (path?: string | { path?: string; hash?: boolean }, hash?: boolean) => {
  if (path) {
    if (typeof path === "string" && path) {
      if (window.location.hash || hash) {
        window.location.hash = path;
      } else {
        window.location.assign(path);
      }
    } else if (typeof path === "object" && path.path) {
      if (window.location.hash || (path.hash ?? hash)) {
        window.location.hash = path.path;
      } else {
        window.location.assign(path.path);
      }
    }
  }
};
