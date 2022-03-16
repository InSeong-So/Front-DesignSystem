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
import Header from '.';
export default {
    title: 'Example/Header',
    component: Header,
};
var Template = function (args) { return _jsx(Header, __assign({}, args)); };
export var LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {},
};
export var LoggedOut = Template.bind({});
LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map