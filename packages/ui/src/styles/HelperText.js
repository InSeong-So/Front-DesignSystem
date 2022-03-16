var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import Colors from '../constants/colors';
export var HelperText = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 4px;\n  margin-left: 16px;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  ", "\n"], ["\n  margin-top: 4px;\n  margin-left: 16px;\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  ", "\n"])), function (_a) {
    var error = _a.error;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), error ? Colors.error : Colors.gray7);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=HelperText.js.map