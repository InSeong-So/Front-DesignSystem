var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import Colors from '../../constants/colors';
import { getInputBorderColor, getInputColorCSS } from '../../utils/index';
import { ThinScrollBar } from '../../styles/index';
export var TextareaBorder = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  ", ";\n\n  :not(:first-child) {\n    margin-top: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  border: 1px solid ", ";\n  border-radius: 5px;\n  ", ";\n\n  :not(:first-child) {\n    margin-top: 8px;\n  }\n"])), function (_a) {
    var state = _a.state, theme = _a.theme;
    return getInputBorderColor(state, theme);
}, function (_a) {
    var state = _a.state;
    return state === 'disabled' && 'cursor: not-allowed';
});
export var Textarea = styled.textarea(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  padding: 10px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  border-radius: 5px;\n  ", ";\n  ", ";\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  height: ", ";\n  padding: 10px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  border-radius: 5px;\n  ", ";\n  ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var height = _a.height;
    return height;
}, ThinScrollBar, function (_a) {
    var disabled = _a.disabled;
    return disabled && 'cursor: not-allowed';
}, function (_a) {
    var hasNotScrollBar = _a.hasNotScrollBar;
    return hasNotScrollBar && "overflow: hidden;";
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return getInputColorCSS(theme, disabled);
});
export var TextareaWrapper = styled.div(function (_a) {
    var width = _a.width;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: ", ";\n    display: flex;\n    flex-direction: column;\n  "], ["\n    width: ", ";\n    display: flex;\n    flex-direction: column;\n  "])), width);
});
export var LabelWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));
export var Label = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"])), Colors.gray8);
export var Description = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n"], ["\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n"])), Colors.gray7);
export var AsteriskWrapper = styled.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), Colors.error);
export var CharLimitWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  margin-top: 4px;\n"], ["\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  margin-top: 4px;\n"])), Colors.gray7);
export var CharCount = styled.span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var error = _a.error;
    return (error ? Colors.error : Colors.gray7);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Textarea.styles.js.map