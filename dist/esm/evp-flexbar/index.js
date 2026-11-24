import { jsx, Fragment } from 'react/jsx-runtime';
import EvpFlexbarContentfixed from './content-fixed.js';
import EvpFlexbarLabelfixed from './label-fixed.js';

function EvpFlexbar(props) {
    var _a;
    var fixedMode = (_a = props.fixedMode) !== null && _a !== void 0 ? _a : 'default';
    var render = function () {
        switch (fixedMode) {
            case 'content': return EvpFlexbarContentfixed(props);
            case 'label': return EvpFlexbarLabelfixed(props);
            case 'default': return EvpFlexbarContentfixed(props);
            default: return EvpFlexbarContentfixed(props);
        }
    };
    return (jsx(Fragment, { children: render() }));
}

export { EvpFlexbar as default };
