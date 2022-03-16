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
import LinkButton from '.';
export default {
    title: 'components/LinkButton',
    component: LinkButton,
};
var Template = function (args) { return (_jsx(LinkButton, __assign({}, args, { children: "\uD558\uD558 \uB9C1\uD06C\uBC84\uD2BC\uC774\uC5D0\uC694!" }))); };
export var Default = Template.bind({});
Default.args = {
    text: '로그인 후 재인증하기',
    href: '/login',
    onClick: function () { return alert('/login'); },
    'data-event': '',
    style: {
        marginTop: '16px',
    },
};
//# sourceMappingURL=LinkButton.stories.js.map