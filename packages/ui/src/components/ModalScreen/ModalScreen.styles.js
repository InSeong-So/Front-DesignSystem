var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { MOBILE_WIDTH } from '../../constants/layoutSystem';
import Colors from '../../constants/colors';
export { ReactComponent as Icon24CloseWhite } from './static/icon-24-close-white.svg';
export { ReactComponent as Icon24CloseBlack } from './static/icon-24-close-black.svg';
export var Background = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
export var ModalScreenWrapper = styled.div(function (_a) {
    var mobileFullScreen = _a.mobileFullScreen, paddingZero = _a.paddingZero;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: 400px;\n    max-height: 640px;\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    padding: 28px 28px 24px;\n    border-radius: 5px;\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);\n    background-color: ", ";\n\n    ", ";\n\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "], ["\n    width: 400px;\n    max-height: 640px;\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    padding: 28px 28px 24px;\n    border-radius: 5px;\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);\n    background-color: ", ";\n\n    ", ";\n\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "])), Colors.gray0, paddingZero && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      padding: 0 !important;\n    "], ["\n      padding: 0 !important;\n    "]))), MOBILE_WIDTH, mobileFullScreen
        ? "\n            width: 100%;\n            height: 100%;\n            max-height: 100%;\n            padding: 28px 20px 24px;\n            border-radius: 0;\n            box-shadow: none;\n            overflow-y: scroll;\n          "
        : "\n            width: 320px;\n            padding: 24px 16px 16px;\n            margin: 0 20px;\n          ");
});
export var CloseButtonWrapper = styled.button(function (_a) {
    var mobileFullScreen = _a.mobileFullScreen;
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    right: -30px;\n\n    & > svg {\n      width: 24px;\n      height: 24px;\n    }\n\n    & > :nth-child(1) {\n      display: unset;\n    }\n\n    & > :nth-child(2) {\n      display: none;\n    }\n\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "], ["\n    position: absolute;\n    top: 0;\n    right: -30px;\n\n    & > svg {\n      width: 24px;\n      height: 24px;\n    }\n\n    & > :nth-child(1) {\n      display: unset;\n    }\n\n    & > :nth-child(2) {\n      display: none;\n    }\n\n    @media (max-width: ", ") {\n      ", ";\n    }\n  "])), MOBILE_WIDTH, mobileFullScreen
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            top: 12px;\n            right: 12px;\n\n            & > :nth-child(1) {\n              display: none;\n            }\n\n            & > :nth-child(2) {\n              display: unset;\n            }\n          "], ["\n            top: 12px;\n            right: 12px;\n\n            & > :nth-child(1) {\n              display: none;\n            }\n\n            & > :nth-child(2) {\n              display: unset;\n            }\n          "]))) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            top: -30px;\n            right: 0;\n          "], ["\n            top: -30px;\n            right: 0;\n          "]))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=ModalScreen.styles.js.map