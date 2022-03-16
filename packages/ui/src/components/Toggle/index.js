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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as Styled from './Toggle.styles';
var Toggle = React.memo(React.forwardRef(function (_a, ref) {
    var checked = _a.checked, handleClick = _a.handleClick, style = _a.style, dataEvent = _a["data-event"], restProps = __rest(_a, ["checked", "handleClick", "style", 'data-event']);
    return (_jsxs(Styled.Wrapper, __assign({ type: "button", ref: ref, onClick: function () { return handleClick; }, style: style, "data-event": dataEvent }, restProps, { children: [_jsx(Styled.Input, { type: "checkbox", checked: checked, readOnly: true }), _jsx(Styled.Background, {})] })));
}));
export default Toggle;
//# sourceMappingURL=index.js.map