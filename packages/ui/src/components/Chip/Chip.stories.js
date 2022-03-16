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
import { createElement as _createElement } from "react";
import Chip from '.';
export default {
    title: 'components/Chip',
    component: Chip,
};
var Template = function (args) { return _createElement(Chip, __assign({}, args, { key: "Tag_1", text: "#".concat('하하') })); };
export var DefaultAndHoverPressed = Template.bind({});
export var Closeable = Template.bind({});
Closeable.args = {
    closeable: true,
};
//# sourceMappingURL=Chip.stories.js.map