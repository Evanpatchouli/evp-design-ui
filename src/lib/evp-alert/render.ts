import { createRoot } from "react-dom/client";

let div = document.createElement("div");
document.body.appendChild(div);
const root = createRoot(div);

export default function render(dom: JSX.Element) {
  root.render(dom);
}