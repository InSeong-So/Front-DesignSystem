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
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './LinkButton.styles';
var IconBefore = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx(Icon, {}), _jsx("div", { children: text })] }));
};
var IconAfter = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx("div", { children: text }), _jsx(Icon, {})] }));
};
var LinkButton = React.forwardRef(function (_a, ref) {
    var _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.href, href = _c === void 0 ? undefined : _c, _d = _a.to, to = _d === void 0 ? undefined : _d, _e = _a.icon, icon = _e === void 0 ? null : _e, _f = _a.isIconAfter, isIconAfter = _f === void 0 ? false : _f, onClick = _a.onClick, _g = _a.disabled, disabled = _g === void 0 ? false : _g, style = _a.style, dataEvent = _a["data-event"];
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
    var as = 'button';
    var linkAttr = {};
    var aAttr = {};
    if (to) {
        as = Link;
        linkAttr = { to: to };
    }
    else if (href) {
        as = 'a';
        aAttr = {
            href: href,
            target: '_blank',
            rel: 'noreferrer',
        };
    }
    return (_jsx(Styled.LinkButtonWrapper, __assign({ as: as, type: as === 'button' && 'button', ref: ref, onClick: onClick, disabled: disabled, style: style, "data-event": dataEvent }, linkAttr, aAttr, { children: child })));
});
export default React.memo(LinkButton);
//# sourceMappingURL=index.js.map