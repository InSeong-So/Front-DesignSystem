var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Colors from '../../constants/colors';
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../constants/layoutSystem';
import { ThinScrollBar } from '../../styles/ThinScrollBar';
import styled, { css } from 'styled-components';
import { ReactComponent as Icon20NavigationSpread } from './static/icon-20-navigation-spread.svg';
import { getInputBorderColor } from '../../utils/getInputBorderColor';
var positionModifier = {
    small: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    top: 42px;\n  "], ["\n    top: 42px;\n  "]))),
    medium: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    top: 50px;\n  "], ["\n    top: 50px;\n  "]))),
    large: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    top: 58px;\n\n    @media (max-width: ", ") {\n      top: 50px;\n    }\n  "], ["\n    top: 58px;\n\n    @media (max-width: ", ") {\n      top: 50px;\n    }\n  "])), TABLET_WIDTH),
    tiny: css(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""]))),
};
var InputState;
(function (InputState) {
    InputState["inactive"] = "inactive";
    InputState["active"] = "active";
    InputState["focus"] = "focus";
    InputState["error"] = "error";
    InputState["disabled"] = "disabled";
})(InputState || (InputState = {}));
var borderModifier = function (size, hasError) {
    if (size === 'tiny')
        return 'none';
    return "1px solid ".concat(getInputBorderColor(hasError ? InputState.error : InputState.inactive, ''));
};
// modifiers
var sizeModifier = {
    large: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    height: 56px;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    padding: 16px 12px 16px 16px;\n\n    @media (max-width: ", ") {\n      height: 48px;\n      padding: 14px 12px 14px 16px;\n    }\n  "], ["\n    height: 56px;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.5;\n    letter-spacing: normal;\n    padding: 16px 12px 16px 16px;\n\n    @media (max-width: ", ") {\n      height: 48px;\n      padding: 14px 12px 14px 16px;\n    }\n  "])), TABLET_WIDTH),
    medium: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    height: 48px;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 14px 12px 14px 16px;\n  "], ["\n    height: 48px;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 14px 12px 14px 16px;\n  "]))),
    small: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    height: 40px;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 10px 10px 10px 12px;\n  "], ["\n    height: 40px;\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 10px 10px 10px 12px;\n  "]))),
    tiny: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    height: 18px;\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 0;\n  "], ["\n    height: 18px;\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.43;\n    letter-spacing: normal;\n    padding: 0;\n  "]))),
};
var widthModifier = function (width) { return css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  --widthPC: ", ";\n  --widthTablet: ", ";\n  --widthMobile: ", ";\n\n  width: var(--widthPC);\n\n  @media (max-width: ", ") {\n    width: var(--widthTablet);\n  }\n\n  @media (max-width: ", ") {\n    width: var(--widthMobile);\n  }\n"], ["\n  --widthPC: ", ";\n  --widthTablet: ", ";\n  --widthMobile: ", ";\n\n  width: var(--widthPC);\n\n  @media (max-width: ", ") {\n    width: var(--widthTablet);\n  }\n\n  @media (max-width: ", ") {\n    width: var(--widthMobile);\n  }\n"])), width.split(' ')[0], width.split(' ')[1] || width.split(' ')[0], width.split(' ')[2] || width.split(' ')[1] || width.split(' ')[0], TABLET_WIDTH, MOBILE_WIDTH); };
export var Column = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: ", ") {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: ", ") {\n    width: 100%;\n  }\n"])), MOBILE_WIDTH);
export var DropdownWrapper = styled.button(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  border-radius: 5px;\n  ", ";\n  ", ";\n  ", ";\n  border: ", ";\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ", ";\n  border-radius: 5px;\n  ", ";\n  ", ";\n  ", ";\n  border: ", ";\n  ", ";\n  ", ";\n"])), Colors.gray0, function (_a) {
    var size = _a.size;
    return sizeModifier[size];
}, function (_a) {
    var hasValue = _a.hasValue;
    return hasValue && "border: 1px solid ".concat(Colors.blueGray6, ";");
}, function (_a) {
    var active = _a.active;
    return active &&
        "\n    border: 1px solid ".concat(Colors.blue6, ";\n    color: ").concat(Colors.blue6, ";\n  ");
}, function (_a) {
    var size = _a.size, hasError = _a.hasError;
    return borderModifier(size, hasError);
}, function (_a) {
    var width = _a.width;
    return widthModifier(width);
}, function (_a) {
    var showPlaceholder = _a.showPlaceholder;
    return showPlaceholder && "color: ".concat(Colors.gray4);
});
export var Arrow = styled(Icon20NavigationSpread)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), function (_a) {
    var $active = _a.$active;
    return $active &&
        "\n    path {\n      fill: ".concat(Colors.blue6, ";\n    }\n\n    transform: rotate(180deg);\n  ");
}, function (_a) {
    var size = _a.size;
    return (size === 'tiny' ? '17px' : 'unset');
});
export var WebOption = styled.li(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 100%;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  padding: 8px 10px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  padding: 8px 10px;\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.43;\n  letter-spacing: normal;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var subOption = _a.subOption;
    return (subOption ? Colors.gray4 : Colors.gray7);
}, Colors.blue0);
export var WebSelect = styled.ul(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  top: 52px;\n  left: 0;\n  ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  width: 100%;\n  max-height: 194px;\n  padding: 6px 6px;\n  z-index: 1;\n  background: ", ";\n  overflow-y: auto;\n  ", "\n"], ["\n  position: absolute;\n  top: 52px;\n  left: 0;\n  ", ";\n  border: 1px solid ", ";\n  border-radius: 5px;\n  width: 100%;\n  max-height: 194px;\n  padding: 6px 6px;\n  z-index: 1;\n  background: ", ";\n  overflow-y: auto;\n  ", "\n"])), function (_a) {
    var size = _a.size;
    return positionModifier[size];
}, Colors.blue6, Colors.gray0, function (_a) {
    var notScroll = _a.notScroll;
    return notScroll
        ? "overflow-y: hidden;\n        max-height: initial;"
        : ThinScrollBar;
});
export var AsteriskWrapper = styled.span(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), Colors.error);
export var MobileOption = styled.option(templateObject_16 || (templateObject_16 = __makeTemplateObject([""], [""])));
export var MobileSelect = styled.select(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  opacity: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n"], ["\n  opacity: 0;\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17;
//# sourceMappingURL=Dropdown.styles.js.map