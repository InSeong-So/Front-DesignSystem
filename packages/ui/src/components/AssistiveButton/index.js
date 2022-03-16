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
import * as Styled from './AssistiveButton.styles';
var IconBefore = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx(Icon, {}), _jsx("div", { children: text })] }));
};
var IconAfter = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx("div", { children: text }), _jsx(Icon, {})] }));
};
var AssistiveButton = React.memo(React.forwardRef(function (_a, ref) {
    var color = _a.color, _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.icon, icon = _c === void 0 ? null : _c, _d = _a.isIconAfter, isIconAfter = _d === void 0 ? false : _d, onClick = _a.onClick, dataEvent = _a["data-event"], style = _a.style, restProps = __rest(_a, ["color", "text", "icon", "isIconAfter", "onClick", 'data-event', "style"]);
    var child;
    if (icon && !isIconAfter) {
        child = _jsx(IconBefore, { text: text, Icon: icon });
    }
    else if (icon && isIconAfter) {
        child = _jsx(IconAfter, { text: text, Icon: icon });
    }
    else {
        child = _jsx(_Fragment, { children: text });
    }
    return (_jsx(Styled.AssistiveButtonWrapper, __assign({ type: "button", color: color, onClick: onClick, "data-event": dataEvent, style: style, ref: ref }, restProps, { children: child })));
}));
export default AssistiveButton;
//# sourceMappingURL=index.js.map