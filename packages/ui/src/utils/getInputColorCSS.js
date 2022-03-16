var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Colors from '../constants/colors';
import { css } from 'styled-components';
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["dark"] = "dark";
})(ThemeEnum || (ThemeEnum = {}));
function getBackgroundColor(theme) {
    if (theme === ThemeEnum.dark)
        return Colors.gray4E;
    return Colors.gray0;
}
function getFontColor(theme, disabled) {
    if (disabled)
        return Colors.blueGray6;
    if (theme === ThemeEnum.dark)
        return Colors.gray0;
    return Colors.gray7;
}
function getPlaceholderColor(theme) {
    if (theme === ThemeEnum.dark)
        return Colors.gray86;
    return Colors.gray4;
}
export function getInputColorCSS(theme, disabled) {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    /* required on iOS */\n    -webkit-text-fill-color: ", ";\n\n    ::placeholder {\n      color: ", ";\n    }\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    /* required on iOS */\n    -webkit-text-fill-color: ", ";\n\n    ::placeholder {\n      color: ", ";\n    }\n  "])), getBackgroundColor(theme), getFontColor(theme, disabled), getFontColor(theme, disabled), getPlaceholderColor(theme));
}
var templateObject_1;
//# sourceMappingURL=getInputColorCSS.js.map