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
import { HelperText } from '../../styles/HelperText';
import { isMobileOrTablet } from '../../utils/isMobileOrTablet';
import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './Dropdown.styles';
import Asterisk from '../Asterisk';
var Dropdown = React.forwardRef(function (_a, ref) {
    var _b;
    var options = _a.options, value = _a.value, onChange = _a.onChange, size = _a.size, _c = _a.width, width = _c === void 0 ? '100%' : _c, placeholder = _a.placeholder, _d = _a.mustSelect, mustSelect = _d === void 0 ? false : _d, _e = _a.notScroll, notScroll = _e === void 0 ? false : _e, style = _a.style, errorText = _a.errorText;
    // constant
    var CANCEL_OPTION = 'cancel';
    // global states
    var dropdownRef = useRef();
    // local methods
    var getValueFrom = function (option) {
        if (!option)
            return '';
        return (typeof option === 'string' ? option : option.value);
    };
    var getLabelFrom = function (option) {
        if (!option) {
            return null;
        }
        return typeof option === 'string' ? option : option.label;
    };
    // local states
    var _f = useState(false), active = _f[0], setActive = _f[1];
    var hasValue = value !== null && value !== '';
    var showPlaceholder = placeholder && !hasValue;
    var hasAsterisk = showPlaceholder && mustSelect;
    var label = typeof options[0] !== 'string'
        ? (_b = options.find(function (option) { return option.value === value || parseInt(value, 10) === option.value; })) === null || _b === void 0 ? void 0 : _b.label
        : value;
    // side effect
    useEffect(function () {
        if (!value && !placeholder) {
            var defaultValue = (typeof options[0] !== 'string' ? options[0].value : options[0]);
            onChange(defaultValue);
        }
    }, [onChange, options, placeholder, value]);
    // useClickOutside(
    //   ref || dropdownRef,
    //   () => {
    //     setActive(false);
    //   },
    //   [],
    // );
    // render component
    var WebDropdownMenu = function () { return (_jsxs(Styled.WebSelect, __assign({ size: size, notScroll: notScroll }, { children: [!mustSelect && (_jsx(Styled.WebOption, __assign({ subOption: true, onClick: function () { return onChange(null); } }, { children: placeholder }))), 
            // eslint-disable-next-line react/prop-types
            options.map(function (option) { return (_jsx(Styled.WebOption, __assign({ onClick: function () { return onChange(getValueFrom(option)); } }, { children: getLabelFrom(option) }), typeof option === 'string' ? option : option.value)); })] }))); };
    var MobileDropdownMenu = function () {
        var onChangeMobileOption = function (e) {
            var targetValue = e.target.value;
            if (targetValue === CANCEL_OPTION) {
                onChange(null);
            }
            else {
                onChange(targetValue);
            }
        };
        var onClickMobileSelect = function (e) {
            e.stopPropagation();
        };
        return (_jsxs(Styled.MobileSelect, __assign({ defaultValue: value || CANCEL_OPTION, onChange: onChangeMobileOption, onClick: onClickMobileSelect }, { children: [!mustSelect && (_jsx(Styled.MobileOption, __assign({ value: CANCEL_OPTION }, { children: placeholder }))), 
                // eslint-disable-next-line react/prop-types
                options.map(function (option) { return (_jsx(Styled.MobileOption, __assign({ value: getValueFrom(option) }, { children: getLabelFrom(option) }), typeof option === 'string' ? option : option.value)); })] })));
    };
    return (_jsxs(Styled.Column, { children: [_jsxs(Styled.DropdownWrapper, __assign({ type: "button", ref: ref || dropdownRef, size: size, width: width, active: active, hasValue: hasValue, showPlaceholder: showPlaceholder, onClick: function () { return setActive(!active); }, style: style, hasError: !!errorText }, { children: [_jsxs("div", { children: [showPlaceholder ? placeholder : label, hasAsterisk && _jsx(Asterisk, {})] }), _jsx(Styled.Arrow, { "$active": active, size: size }), isMobileOrTablet() || size === 'tiny' ? (_jsx(MobileDropdownMenu, {})) : (active && _jsx(WebDropdownMenu, {}))] })), errorText && _jsx(HelperText, __assign({ error: true }, { children: errorText }))] }));
});
export default React.memo(Dropdown);
//# sourceMappingURL=index.js.map