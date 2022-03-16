var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from '../../constants/colors';
export var IconWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n\n  & > :last-child {\n    margin-left: 2px;\n  }\n"], ["\n  display: flex;\n\n  & > :last-child {\n    margin-left: 2px;\n  }\n"])));
export var LinkButtonWrapper = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  text-decoration: ", ";\n\n  &:hover {\n    cursor: ", ";\n  }\n"], ["\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  text-decoration: ", ";\n\n  &:hover {\n    cursor: ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? Colors.gray3 : Colors.blue6);
}, function (_a) {
    var disabled = _a.disabled;
    return !disabled && 'underline';
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && 'not-allowed';
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=LinkButton.styles.js.map