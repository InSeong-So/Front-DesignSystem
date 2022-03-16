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
import * as Styled from './ModalScreen.styles';
var CloseButton = function (_a) {
    var mobileFullScreen = _a.mobileFullScreen, onClick = _a.onClick, dataEvent = _a.dataEvent;
    return (_jsxs(Styled.CloseButtonWrapper, __assign({ onClick: onClick, mobileFullScreen: mobileFullScreen, "data-event": dataEvent }, { children: [_jsx(Styled.Icon24CloseWhite, {}), _jsx(Styled.Icon24CloseBlack, {})] })));
};
var ModalScreen = function (_a) {
    var mobileFullScreen = _a.mobileFullScreen, close = _a.close, style = _a.style, children = _a.children, dataEventClose = _a.dataEventClose, paddingZero = _a.paddingZero, noCloseButton = _a.noCloseButton;
    return (_jsx(Styled.Background, __assign({ onClick: function (e) {
            if (!noCloseButton && e.target === e.currentTarget) {
                close();
            }
        }, "data-event": dataEventClose }, { children: _jsxs(Styled.ModalScreenWrapper, __assign({ mobileFullScreen: mobileFullScreen, paddingZero: paddingZero, style: style }, { children: [!noCloseButton && (_jsx(CloseButton, { mobileFullScreen: mobileFullScreen, onClick: close, dataEvent: dataEventClose })), children] })) })));
};
export default React.memo(ModalScreen);
//# sourceMappingURL=index.js.map