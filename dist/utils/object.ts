export function isReactive(obj: any) {
  if (typeof obj === "object") {
    return Object.prototype.constructor.name === "Reactive";
  }
  return false;
}
