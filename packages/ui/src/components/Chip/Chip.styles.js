var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import Colors from '../../constants/colors';
import { text12 } from '../../constants/typograph';
import styled, { css } from 'styled-components';
export { ReactComponent as CloseIcon24 } from './static/icon-24-closeIcon.svg';
export var ChipWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var CloseButtonWrapper = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 4px;\n  margin-right: 12px;\n"], ["\n  margin-left: 4px;\n  margin-right: 12px;\n"])));
export var Text = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  color: ", ";\n  ", "\n"], ["\n  ", ";\n  color: ", ";\n  ", "\n"])), text12, Colors.blueGray6, function (_a) {
    var closeable = _a.closeable;
    return !closeable && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin-right: 8px;\n    "], ["\n      margin-right: 8px;\n    "])));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Chip.styles.js.map