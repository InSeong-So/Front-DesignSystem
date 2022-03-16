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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from 'styled-components';
import Button from '../Button';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n"], ["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n"])));
var StyledH1 = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nfont-weight: 900;\nfont-size: 20px;\nline-height: 1;\nmargin: 6px 0 6px 10px;\ndisplay: inline-block;\nvertical-align: top;\n\n"], ["\nfont-weight: 900;\nfont-size: 20px;\nline-height: 1;\nmargin: 6px 0 6px 10px;\ndisplay: inline-block;\nvertical-align: top;\n\n"])));
var Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (_jsx("header", { children: _jsxs(Wrapper, { children: [_jsxs("div", { children: [_jsx("svg", __assign({ width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsxs("g", __assign({ fill: "none", fillRule: "evenodd" }, { children: [_jsx("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }), _jsx("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }), _jsx("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" })] })) })), _jsx(StyledH1, { children: "Acme" })] }), _jsx("div", { children: user ? (_jsx(Button, { size: "small", onClick: onLogout, text: "Log out" })) : (_jsxs(_Fragment, { children: [_jsx(Button, { size: "small", onClick: onLogin, text: "Log in" }), _jsx(Button, { size: "small", onClick: onCreateAccount, text: "Sign up" })] })) })] }) }));
};
export default Header;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map