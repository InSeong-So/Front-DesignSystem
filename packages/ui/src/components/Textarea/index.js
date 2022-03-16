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
import Asterisk from '../Asterisk';
import { HelperText } from '../../styles/HelperText';
import React from 'react';
import * as Styled from './Textarea.styles';
var CharLimit = function (_a) {
    var _b = _a.length, length = _b === void 0 ? 0 : _b, charLimit = _a.charLimit, error = _a.error;
    return React.useMemo(function () { return (_jsxs(Styled.CharLimitWrapper, { children: [_jsx(Styled.CharCount, __assign({ error: error }, { children: length })), "/", charLimit, "\uC790"] })); }, [length, charLimit, error]);
};
var Textarea = React.forwardRef(function (_a, ref) {
    var value = _a.value, _b = _a.width, width = _b === void 0 ? '100%' : _b, _c = _a.height, height = _c === void 0 ? '168px' : _c, label = _a.label, _d = _a.state, state = _d === void 0 ? 'inactive' : _d, description = _a.description, placeholder = _a.placeholder, helperText = _a.helperText, errorText = _a.errorText, charLimit = _a.charLimit, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.mustInput, mustInput = _f === void 0 ? false : _f, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, style = _a.style, hasNotScrollBar = _a.hasNotScrollBar, _g = _a.hasError, hasError = _g === void 0 ? false : _g, theme = _a.theme, defaultValue = _a.defaultValue, restProps = __rest(_a, ["value", "width", "height", "label", "state", "description", "placeholder", "helperText", "errorText", "charLimit", "disabled", "mustInput", "onChange", "onFocus", "onBlur", "style", "hasNotScrollBar", "hasError", "theme", "defaultValue"]);
    var hasFooterText = helperText || hasError;
    return (_jsxs(Styled.TextareaWrapper, __assign({ width: width, style: style }, { children: [label && (_jsxs(_Fragment, { children: [_jsxs(Styled.LabelWrapper, { children: [_jsxs(Styled.Label, { children: [label, mustInput && _jsx(Asterisk, {})] }), charLimit && (_jsx(CharLimit, { charLimit: charLimit, length: ref.current.value.length, error: hasError }))] }), description && _jsx(Styled.Description, { children: description })] })), _jsx(Styled.TextareaBorder, __assign({ state: state, theme: theme }, { children: _jsx(Styled.Textarea, __assign({ ref: ref, height: height, value: value, placeholder: placeholder, disabled: disabled, readOnly: disabled, hasNotScrollBar: hasNotScrollBar, theme: theme }, restProps)) })), hasFooterText && (_jsx(HelperText, __assign({ error: hasError }, { children: hasError ? errorText : helperText })))] })));
});
export default React.memo(Textarea);
//# sourceMappingURL=index.js.map