import { bindFC } from '../utils/index.js';

var Centred_default = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    verticalAlign: "middle",
};
var CenteredFC = function () {
    return {
        style: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "middle",
        },
    };
};
var Centred = bindFC(Centred_default, CenteredFC);

export { Centred as default };
