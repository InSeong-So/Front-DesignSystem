var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import Colors from '../../constants/colors';
import { ReactComponent as Icon20Alert } from './static/icon-20-alert.svg';
import { ReactComponent as Icon24Search } from './static/icon-24-search.svg';
import { getInputBorderColor } from '../../utils/getInputBorderColor';
import { getInputColorCSS } from '../../utils/getInputColorCSS';
export var Label = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"])), Colors.gray8);
export var InnerLabel = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"], ["\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: ", ";\n"])), Colors.blue6);
export var IconWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 12px;\n"], ["\n  margin-left: 12px;\n"])));
export var SearchIcon = styled(Icon24Search)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: 12px;\n"], ["\n  margin-right: 12px;\n"])));
export var ErrorIcon = styled(Icon20Alert)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 12px;\n"], ["\n  margin-right: 12px;\n"])));
export var InputWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (_a) {
    var width = _a.width;
    return width;
});
export var InputBorder = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  ", ";\n\n  :not(:first-child) {\n    margin-top: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  ", ";\n\n  :not(:first-child) {\n    margin-top: 8px;\n  }\n"])), function (_a) {
    var height = _a.height;
    return height;
}, Colors.gray0, function (_a) {
    var state = _a.state, theme = _a.theme;
    return getInputBorderColor(state, theme);
}, function (_a) {
    var state = _a.state;
    return state === 'disabled' && "cursor: not-allowed;";
});
export var Input = styled.input(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  border-radius: 5px;\n  opacity: 1;\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  width: 100%;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  border-radius: 5px;\n  opacity: 1;\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var textAlignRight = _a.textAlignRight;
    return textAlignRight && 'text-align: right';
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && 'cursor: not-allowed';
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return getInputColorCSS(theme, disabled);
});
export var InputContents = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100%;\n  margin: 0 12px;\n\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n"], ["\n  width: 100%;\n  margin: 0 12px;\n\n  &:not(:last-child) {\n    margin-right: 8px;\n  }\n"])));
export var UnitText = styled.span(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin-right: 12px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n"], ["\n  margin-right: 12px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n"])), Colors.gray7);
export var Description = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n"], ["\n  margin-top: 4px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n"])), Colors.gray7);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=Input.styles.js.map