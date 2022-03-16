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
import TextButton from '.';
import { Icon20BookmarkSelected } from '../../assets/svg/startupCompanyProfile/icons';
export default {
    title: 'components/TextButton',
    component: TextButton,
};
var Template = function (args) { return _jsx(TextButton, __assign({}, args)); };
export var Default = Template.bind({});
Default.args = {
    text: '북마크 완료',
    icon: Icon20BookmarkSelected,
    onClick: function () { return alert('클릭!'); },
    'data-event': 'user/bookmark/off',
};
//# sourceMappingURL=TextButton.stories.js.map