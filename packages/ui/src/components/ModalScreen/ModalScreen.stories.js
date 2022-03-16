var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from '../Button';
import styled from 'styled-components';
import ModalScreen from '.';
export default {
    title: 'components/ModalScreen',
    component: ModalScreen,
};
var Title = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  color: '#3A3A3A';\n  text-align: center;\n"], ["\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: bold;\n  color: '#3A3A3A';\n  text-align: center;\n"])));
var Description = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 20px;\n  color: '#595959';\n  text-align: center;\n  margin-top: 12px;\n\n  @media (max-width: '767px') {\n    margin-top: 10px;\n  }\n"], ["\n  font-size: 14px;\n  line-height: 20px;\n  color: '#595959';\n  text-align: center;\n  margin-top: 12px;\n\n  @media (max-width: '767px') {\n    margin-top: 10px;\n  }\n"])));
var Template = function (args) { return (_jsxs(ModalScreen, __assign({}, args, { children: [_jsxs(Title, { children: ["IR\uC790\uB8CC \uC5F4\uB78C \uC694\uCCAD\uC774", _jsx("br", {}), "\uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4."] }), _jsxs(Description, { children: ["\uD574\uB2F9 \uC790\uB8CC\uB294 'IR\uC790\uB8CC \uAC80\uD1A0\uD558\uAE30 > \uB0B4\uAC00 \uC694\uCCAD\uD55C' \uC73C\uB85C \uC774\uB3D9\uB418\uBA70", _jsx("br", {}), "\uC694\uCCAD \uC218\uB77D \uC2DC \uC774\uBA54\uC77C\uB85C \uC548\uB0B4\uD574 \uB4DC\uB9BD\uB2C8\uB2E4."] }), _jsx(Button, { text: "\uD655\uC778", block: true, kind: "primary", size: "large", onClick: function () { return alert('닫기!!!!'); }, style: {
                marginTop: '40px',
            } })] }))); };
export var Default = Template.bind({});
Default.args = {
    close: function () { return alert('외부레이어 클릭\n닫기!'); },
};
var templateObject_1, templateObject_2;
//# sourceMappingURL=ModalScreen.stories.js.map