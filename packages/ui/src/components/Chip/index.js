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
import React from 'react';
import * as Styled from './Chip.styles';
var CloseButton = function (_a) {
    var onClose = _a.onClose;
    return (_jsx(Styled.CloseButtonWrapper, __assign({ onClick: onClose, type: "button" }, { children: _jsx(Styled.CloseIcon24, {}) })));
};
var Chip = React.forwardRef(function (_a, ref) {
    var text = _a.text, _b = _a.closeable, closeable = _b === void 0 ? false : _b, onClose = _a.onClose, style = _a.style;
    return (_jsxs(Styled.ChipWrapper, __assign({ ref: ref, style: style }, { children: [_jsx(Styled.Text, __assign({ closeable: closeable }, { children: text })), closeable && _jsx(CloseButton, { onClose: onClose })] })));
});
export default React.memo(Chip);
//# sourceMappingURL=index.js.map