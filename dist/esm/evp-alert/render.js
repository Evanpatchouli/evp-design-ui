import { createRoot } from 'react-dom/client';

var root;
function render(dom) {
    if (!root) {
        var host = document.createElement("div");
        document.body.appendChild(host);
        root = createRoot(host);
    }
    root.render(dom);
}
function clearAlert() {
    root === null || root === void 0 ? void 0 : root.render(null);
}

export { clearAlert, render as default };
