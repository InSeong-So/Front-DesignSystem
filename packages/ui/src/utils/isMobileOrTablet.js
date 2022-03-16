/**
 * @reference
 * https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
 * @description
 * 에 독립적으로 존재해야하는 로직이므로 web/@utils의 동일한 로직과 중복하고 있음을 인지해야함
 * navigator?.maxTouchPoints === 5 터치기능이 있다는 의미  https://minemanemo.tistory.com/101
 * */
export var isMobileOrTablet = function () {
    var _a;
    return typeof navigator !== 'undefined' &&
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Miniuse/i.test(navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) ||
            ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.maxTouchPoints) === 5);
};
//# sourceMappingURL=isMobileOrTablet.js.map