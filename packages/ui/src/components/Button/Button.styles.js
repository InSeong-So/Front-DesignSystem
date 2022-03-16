var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import getButtonColorCSS from '../../utils/getButtonColorCSS';
export { ReactComponent as LoadingIconBlue } from './static/icon-26-loading-blue.svg';
export { ReactComponent as LoadingIconWhite } from './static/icon-26-loading-white.svg';
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["dark"] = "dark";
})(ThemeEnum || (ThemeEnum = {}));
var ButtonKindEnum;
(function (ButtonKindEnum) {
    ButtonKindEnum["primary"] = "primary";
    ButtonKindEnum["secondary"] = "secondary";
    ButtonKindEnum["tertiary"] = "tertiary";
})(ButtonKindEnum || (ButtonKindEnum = {}));
var ButtonSizeEnum;
(function (ButtonSizeEnum) {
    ButtonSizeEnum["large"] = "large";
    ButtonSizeEnum["medium"] = "medium";
    ButtonSizeEnum["small"] = "small";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));
var sizeModifier = {
    large: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 120px;\n    height: 48px;\n    padding: 14px 20px;\n  "], ["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 120px;\n    height: 48px;\n    padding: 14px 20px;\n  "]))),
    medium: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 100px;\n    height: 40px;\n    padding: 10px 16px;\n  "], ["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 100px;\n    height: 40px;\n    padding: 10px 16px;\n  "]))),
    small: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 80px;\n    height: 32px;\n    padding: 6px 12px;\n  "], ["\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    min-width: 80px;\n    height: 32px;\n    padding: 6px 12px;\n  "]))),
};
var iconButtonSizeModifier = {
    large: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 48px;\n    height: 48px;\n    flex-shrink: 0;\n  "], ["\n    width: 48px;\n    height: 48px;\n    flex-shrink: 0;\n  "]))),
    medium: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n  "], ["\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n  "]))),
    small: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 32px;\n    height: 32px;\n    flex-shrink: 0;\n  "], ["\n    width: 32px;\n    height: 32px;\n    flex-shrink: 0;\n  "]))),
};
export var ButtonWrapper = styled.button(function (_a) {
    var kind = _a.kind, size = _a.size, _b = _a["icon-only"], iconOnly = _b === void 0 ? false : _b, disabled = _a.disabled, block = _a.block, theme = _a.theme;
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    ", "\n    ", ";\n    width: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    transition: all 0.2s ease-in-out;\n    white-space: pre;\n  "], ["\n    ", "\n    ", ";\n    width: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n    transition: all 0.2s ease-in-out;\n    white-space: pre;\n  "])), getButtonColorCSS(kind, theme, disabled), iconOnly ? iconButtonSizeModifier[size] : sizeModifier[size], block ? '100%' : 'fit-content');
});
export var IconWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n\n  // TODO: IconOnly\uB294 \uC544\uB798 \uC18D\uC131\uC774 \uC5C6\uC5B4\uC57C \uD55C\uB2E4.\n  & > :last-child {\n    margin-left: 6px;\n  }\n"], ["\n  display: flex;\n\n  // TODO: IconOnly\uB294 \uC544\uB798 \uC18D\uC131\uC774 \uC5C6\uC5B4\uC57C \uD55C\uB2E4.\n  & > :last-child {\n    margin-left: 6px;\n  }\n"])));
export var LoadingWrapper = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Button.styles.js.map