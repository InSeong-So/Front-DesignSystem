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
import Button from '.';
export default {
    title: 'components/Button',
    component: Button,
};
var Template = function (args) { return (_jsx(Button, __assign({}, args, { block: true, kind: "secondary", size: "large", text: "\uC544\uB2C8\uC624" }))); };
export var DefaultAndHoverPressed = Template.bind({});
export var Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
//# sourceMappingURL=Button.stories.js.map