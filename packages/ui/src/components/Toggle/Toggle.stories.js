var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import Toggle from '.';
export default {
    title: 'components/Toggle',
    component: Toggle,
};
var Template = function (args) { return _jsx(Toggle, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    onClick: function () { return alert('클릭!'); },
};
export var Checked = Template.bind({});
Checked.args = {
    checked: true,
};
//# sourceMappingURL=Toggle.stories.js.map