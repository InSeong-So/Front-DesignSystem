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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import * as Styled from './Input.styles';
import Asterisk from '../Asterisk';
import { HelperText } from '../../styles/HelperText';
var Input = React.forwardRef(function (_a, ref) {
    var value = _a.value, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.width, width = _c === void 0 ? '100%' : _c, _d = _a.height, height = _d === void 0 ? '48px' : _d, label = _a.label, state = _a.state, description = _a.description, innerLabel = _a.innerLabel, placeholder = _a.placeholder, unitText = _a.unitText, helperText = _a.helperText, errorText = _a.errorText, _e = _a.textAlignRight, textAlignRight = _e === void 0 ? false : _e, _f = _a.mustInput, mustInput = _f === void 0 ? false : _f, _g = _a.hasError, hasError = _g === void 0 ? false : _g, _h = _a.disabled, disabled = _h === void 0 ? false : _h, hasSearchIcon = _a.hasSearchIcon, icon = _a.icon, style = _a.style, theme = _a.theme, autoComplete = _a.autoComplete, props = __rest(_a, ["value", "type", "width", "height", "label", "state", "description", "innerLabel", "placeholder", "unitText", "helperText", "errorText", "textAlignRight", "mustInput", "hasError", "disabled", "hasSearchIcon", "icon", "style", "theme", "autoComplete"]);
    var hasFooterText = helperText || hasError;
    var showInnerLabel = innerLabel;
    var showSearchIcon = hasSearchIcon && !hasError;
    return (_jsxs(Styled.InputWrapper, __assign({ width: width, style: style }, { children: [label && (_jsxs(_Fragment, { children: [_jsxs(Styled.Label, { children: [label, mustInput && _jsx(Asterisk, {})] }), description && _jsx(Styled.Description, { children: description })] })), _jsxs(Styled.InputBorder, __assign({ state: state, theme: theme, height: height }, { children: [icon && _jsx(Styled.IconWrapper, { children: icon }), _jsxs(Styled.InputContents, { children: [showInnerLabel && _jsx(Styled.InnerLabel, { children: innerLabel }), _jsx(Styled.Input, __assign({}, props, { ref: ref, value: value, type: type, placeholder: placeholder, disabled: disabled, readOnly: disabled, theme: theme, autoComplete: autoComplete, textAlignRight: textAlignRight }))] }), unitText && _jsx(Styled.UnitText, { children: unitText }), showSearchIcon && _jsx(Styled.SearchIcon, {}), hasError && _jsx(Styled.ErrorIcon, {})] })), hasFooterText && (_jsx(HelperText, __assign({ error: hasError }, { children: hasError ? errorText : helperText })))] })));
});
export default Input;
//# sourceMappingURL=index.js.map