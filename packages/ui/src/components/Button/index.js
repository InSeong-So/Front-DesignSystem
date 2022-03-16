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
import { Link } from 'react-router-dom';
import * as Styled from './Button.styles';
var ThemeEnum;
(function (ThemeEnum) {
    ThemeEnum["dark"] = "dark";
})(ThemeEnum || (ThemeEnum = {}));
var ButtonKindEnum;
(function (ButtonKindEnum) {
    ButtonKindEnum["primary"] = "primary";
    ButtonKindEnum["secondary"] = "secondary";
    ButtonKindEnum["tertiary"] = "tertiary";
})(ButtonKindEnum || (ButtonKindEnum = {}));
var ButtonSizeEnum;
(function (ButtonSizeEnum) {
    ButtonSizeEnum["large"] = "large";
    ButtonSizeEnum["medium"] = "medium";
    ButtonSizeEnum["small"] = "small";
})(ButtonSizeEnum || (ButtonSizeEnum = {}));
var Loading = function (_a) {
    var kind = _a.kind;
    return (_jsx(Styled.LoadingWrapper, { children: kind === ButtonKindEnum.secondary ? _jsx(Styled.LoadingIconBlue, {}) : _jsx(Styled.LoadingIconWhite, {}) }));
};
var IconBefore = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx(Icon, {}), _jsx("div", { children: text })] }));
};
var IconOnly = function (_a) {
    var Icon = _a.Icon;
    return (_jsx(Styled.IconWrapper, { children: _jsx(Icon, {}) }));
};
var IconAfter = function (_a) {
    var text = _a.text, Icon = _a.Icon;
    return (_jsxs(Styled.IconWrapper, { children: [_jsx("div", { children: text }), _jsx(Icon, {})] }));
};
var Button = React.forwardRef(function (_a, ref) {
    var _b = _a.kind, kind = _b === void 0 ? ButtonKindEnum.primary : _b, _c = _a.size, size = _c === void 0 ? ButtonSizeEnum.large : _c, _d = _a.text, text = _d === void 0 ? '' : _d, _e = _a.block, block = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.loading, loading = _g === void 0 ? false : _g, _h = _a.icon, icon = _h === void 0 ? null : _h, _j = _a.isIconAfter, isIconAfter = _j === void 0 ? false : _j, onClick = _a.onClick, dataEvent = _a["data-event"], style = _a.style, theme = _a.theme, to = _a.to, href = _a.href, restProps = __rest(_a, ["kind", "size", "text", "block", "disabled", "loading", "icon", "isIconAfter", "onClick", 'data-event', "style", "theme", "to", "href"]);
    var child;
    if (loading) {
        child = _jsx(Loading, { kind: kind });
    }
    else if (icon && !text) {
        child = _jsx(IconOnly, { Icon: icon });
    }
    else if (icon && !isIconAfter) {
        child = _jsx(IconBefore, { text: text, Icon: icon });
    }
    else if (icon && isIconAfter) {
        child = _jsx(IconAfter, { text: text, Icon: icon });
    }
    else {
        child = _jsx(_Fragment, { children: text });
    }
    var as = 'buttonComponent';
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
    return (_jsx(Styled.ButtonWrapper, __assign({ as: as, type: (as === 'buttonComponent' && 'buttonComponent') || undefined, kind: kind, size: size, "icon-only": (icon && !text) || undefined, block: block || undefined, disabled: disabled, onClick: !loading ? onClick : undefined, "data-event": dataEvent, style: style, ref: ref, theme: theme }, linkAttr, aAttr, restProps, { children: child })));
});
export default React.memo(Button);
//# sourceMappingURL=index.js.map