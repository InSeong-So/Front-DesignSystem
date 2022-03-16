var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Colors from '../../constants/colors';
import styled from 'styled-components';
export var RadioWrapper = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 20px;\n  display: flex;\n  align-content: center;\n  cursor: pointer;\n"], ["\n  height: 20px;\n  display: flex;\n  align-content: center;\n  cursor: pointer;\n"])));
export var Label = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  cursor: pointer;\n"], ["\n  width: 100%;\n  display: flex;\n  margin-left: 8px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  color: ", ";\n  cursor: pointer;\n"])), Colors.gray7);
export var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: none;\n\n  /* change hover background-color  */\n  &:checked + span::after {\n    background-color: ", ";\n  }\n\n  /* check design */\n  &:checked + span::before {\n    display: unset;\n  }\n\n  &:checked + span {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: none;\n\n  /* change hover background-color  */\n  &:checked + span::after {\n    background-color: ", ";\n  }\n\n  /* check design */\n  &:checked + span::before {\n    display: unset;\n  }\n\n  &:checked + span {\n    border: 1px solid ", ";\n  }\n"])), Colors.blue1, Colors.blue6);
export var Check = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  border: 1px solid ", ";\n  transition: opacity 0.3s ease-in-out;\n  cursor: pointer;\n\n  /* hover background */\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: ", ";\n    z-index: -1;\n    opacity: 0;\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n\n  /* check design */\n  &::before {\n    content: '';\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  flex: 0 0 auto;\n  border-radius: 50%;\n  border: 1px solid ", ";\n  transition: opacity 0.3s ease-in-out;\n  cursor: pointer;\n\n  /* hover background */\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    background-color: ", ";\n    z-index: -1;\n    opacity: 0;\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n\n  /* check design */\n  &::before {\n    content: '';\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n"])), Colors.gray7, Colors.blueGray1, Colors.blue6);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Radio.styles.js.map