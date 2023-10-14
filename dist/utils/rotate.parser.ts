export default function RotateParser(rotate?: string | number) {
  if (!rotate) {
    return "0deg";
  }
  if (typeof rotate === "string") {
    return rotate;
  }
  return `${rotate}deg`;
}
