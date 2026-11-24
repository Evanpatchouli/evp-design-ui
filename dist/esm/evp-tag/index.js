import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep.js';

var EvpTag = function (props) {
    var theme = props.theme, plain = props.plain, light = props.light, size = props.size, round = props.round;
    var children = props.children, text = props.text, className = props.class, rest = __rest(props, ["children", "text", "class"]);
    var $type = light ? "light" : plain ? "plain" : "deep";
    var classes = classNames("evp", "evp-tag", theme !== null && theme !== void 0 ? theme : "primary", $type, className);
    var sizer = function () {
        switch (size) {
            case "sm":
                return {
                    fontSize: "10px",
                    height: "22px",
                    lineHeight: "22px",
                };
            case "lg":
                return {
                    fontSize: "14px",
                    height: "26px",
                    lineHeight: "26px",
                };
            default:
                return {
                    fontSize: "12px",
                    height: "24px",
                    lineHeight: "24px",
                };
        }
    };
    var $rest = cloneDeep(rest);
    delete $rest.style;
    return (jsx("div", __assign({ className: classes, style: __assign(__assign(__assign({ width: "fit-content", color: $type === "deep" ? "#fff" : void 0 }, sizer()), { textAlign: "center", verticalAlign: "middle", padding: "0 12px", borderRadius: round ? "100px" : "4px", display: props.display }), rest.style) }, $rest, { children: children !== null && children !== void 0 ? children : text })));
};

export { EvpTag as default };
