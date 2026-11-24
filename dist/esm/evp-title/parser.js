import { Var } from '../utils/index.js';

function parseSize(size) {
    var sizeArray = ["mn", "sm", "md", "lg", "hg"];
    if (typeof size === "string") {
        if (sizeArray.includes(size)) {
            var $var = new Var("--title-text-".concat(size));
            if (sizeArray.includes(size)) {
                return $var.toString();
            }
        }
    }
    return size;
}

export { parseSize };
