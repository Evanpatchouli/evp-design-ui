import { createRoot, type Root } from "react-dom/client";

let root: Root | undefined;

export default function render(dom: JSX.Element) {
  if (!root) {
    const host = document.createElement("div");
    document.body.appendChild(host);
    root = createRoot(host);
  }
  root.render(dom);
}

export function clearAlert() {
  root?.render(null);
}
