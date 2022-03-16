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
export var ButtonKindEnum;
(function (ButtonKindEnum) {
    ButtonKindEnum["primary"] = "primary";
    ButtonKindEnum["secondary"] = "secondary";
    ButtonKindEnum["tertiary"] = "tertiary";
})(ButtonKindEnum || (ButtonKindEnum = {}));
function getBackgroundColor(kind, theme) {
    if (theme === ThemeEnum.dark) {
        switch (kind) {
            case ButtonKindEnum.secondary:
                return Colors.gray2C;
            default:
                return Colors.blue6;
        }
    }
    switch (kind) {
        case ButtonKindEnum.primary:
            return Colors.blue6;
        case ButtonKindEnum.secondary:
            return Colors.gray0;
        case ButtonKindEnum.tertiary:
            return Colors.blueGray0;
        default:
            return Colors.blue6;
    }
}
function getFontColor(kind, theme) {
    if (theme === ThemeEnum.dark) {
        switch (kind) {
            case ButtonKindEnum.secondary:
                return Colors.blue6;
            default:
                return Colors.gray0;
        }
    }
    switch (kind) {
        case ButtonKindEnum.primary:
            return Colors.gray0;
        case ButtonKindEnum.secondary:
            return Colors.blue6;
        case ButtonKindEnum.tertiary:
            return Colors.gray7;
        default:
            return Colors.gray0;
    }
}
function getBorderCSS(kind) {
    if (kind === ButtonKindEnum.secondary) {
        return "1px solid ".concat(Colors.blue6);
    }
    return null;
}
function getDisabledCSS(kind, theme) {
    if (theme === ThemeEnum.dark) {
        switch (kind) {
            case ButtonKindEnum.secondary:
                return css(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
            default:
                return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          opacity: 0.3;\n        "], ["\n          opacity: 0.3;\n        "])));
        }
    }
    switch (kind) {
        case ButtonKindEnum.primary:
            return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        opacity: 0.3;\n      "], ["\n        opacity: 0.3;\n      "])));
        case ButtonKindEnum.secondary:
            return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        opacity: 0.5;\n      "], ["\n        opacity: 0.5;\n      "])));
        case ButtonKindEnum.tertiary:
            return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        color: ", ";\n      "], ["\n        color: ", ";\n      "])), Colors.gray3);
        default:
            return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        opacity: 0.3;\n      "], ["\n        opacity: 0.3;\n      "])));
    }
}
function getHoverBorderCSS(kind) {
    if (kind === ButtonKindEnum.secondary) {
        return "1px solid ".concat(Colors.blue7);
    }
    return null;
}
function getHoverBackgroundColor(kind, theme) {
    if (theme === ThemeEnum.dark) {
        switch (kind) {
            case ButtonKindEnum.secondary:
                return Colors.blue6Alpha;
            default:
                return Colors.blue7;
        }
    }
    switch (kind) {
        case ButtonKindEnum.primary:
            return Colors.blue7;
        case ButtonKindEnum.secondary:
            return Colors.blue0;
        case ButtonKindEnum.tertiary:
            return Colors.blueGray1;
        default:
            return Colors.blue7;
    }
}
function getButtonColorCSS(kind, theme, disabled) {
    return css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n    ", ";\n\n    ", "\n  "], ["\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n    ", ";\n\n    ", "\n  "])), getBackgroundColor(kind, theme), getFontColor(kind, theme), getBorderCSS(kind), disabled && getDisabledCSS(kind, theme), !disabled && css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      &:hover {\n        background-color: ", ";\n        border: ", ";\n      }\n    "], ["\n      &:hover {\n        background-color: ", ";\n        border: ", ";\n      }\n    "])), getHoverBackgroundColor(kind, theme), getHoverBorderCSS(kind)));
}
export default getButtonColorCSS;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=getButtonColorCSS.js.map