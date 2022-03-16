var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import Colors from '../../constants/colors';
var colorModifier = {
    blue: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), Colors.blue6, Colors.blue0, Colors.blue1),
    coral: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n    background-color: #fff5f5;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: #ffe2e2;\n    }\n  "], ["\n    color: ", ";\n    background-color: #fff5f5;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: #ffe2e2;\n    }\n  "])), Colors.coralPink),
    gray: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n      background-color: ", ";\n    }\n  "])), Colors.gray7, Colors.blueGray1, Colors.blueGray2),
};
export var IconWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n\n  & > :last-child {\n    margin-left: 4px;\n  }\n"], ["\n  display: flex;\n\n  & > :last-child {\n    margin-left: 4px;\n  }\n"])));
export var AssistiveButtonWrapper = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  height: 28px;\n  border-radius: 5px;\n  padding: 4px 8px;\n"], ["\n  ", ";\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  height: 28px;\n  border-radius: 5px;\n  padding: 4px 8px;\n"])), function (_a) {
    var color = _a.color;
    return colorModifier[color];
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=AssistiveButton.styles.js.map