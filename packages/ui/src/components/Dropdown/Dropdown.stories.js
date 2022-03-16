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
import Dropdown from '.';
export default {
    title: 'components/Dropdown',
    component: Dropdown,
};
var Template = function (args) { return _jsx(Dropdown, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    options: [
        { value: '1', label: 'item1' },
        { value: '2', label: 'item2' },
        { value: '3', label: 'item3' },
    ],
    width: '100%',
    size: 'medium',
    mustSelect: true,
    onChange: function (value) { return console.log(value); },
};
//# sourceMappingURL=Dropdown.stories.js.map