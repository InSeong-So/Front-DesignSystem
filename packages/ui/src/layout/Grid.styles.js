var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import { MOBILE_COLUMNS, MOBILE_GUTTER, PC_COLUMNS, PC_GUTTER, TABLET_COLUMNS, TABLET_GUTTER, MOBILE_WIDTH, TABLET_WIDTH } from '../constants/layoutSystem';
// 일반적으로 Grid View를 화면 최대 넓이로 구성할 때 pc(12), tablet(8), mobile(6)의 최대 컬럼 수는 정해져 있지만
// 특별한 경우에는 prop으로 최대 컬럼 수를 바꿀 수 있다.
export var GridBox = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(var(--gutterWidth) / -2);\n  margin-right: calc(var(--gutterWidth) / -2);\n\n  ", "\n\n  @media (max-width: ", ") {\n    ", "\n  }\n\n  @media (max-width: ", ") {\n    ", "\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(var(--gutterWidth) / -2);\n  margin-right: calc(var(--gutterWidth) / -2);\n\n  ", "\n\n  @media (max-width: ", ") {\n    ", "\n  }\n\n  @media (max-width: ", ") {\n    ", "\n  }\n"])), function (_a) {
    var _b = _a.pcMaxColumns, pcMaxColumns = _b === void 0 ? PC_COLUMNS : _b;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    --gridBoxMaxColumns: ", ";\n  "], ["\n    --gridBoxMaxColumns: ", ";\n  "])), pcMaxColumns);
}, TABLET_WIDTH, function (_a) {
    var _b = _a.tbMaxColumns, tbMaxColumns = _b === void 0 ? TABLET_COLUMNS : _b;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      --gridBoxMaxColumns: ", ";\n    "], ["\n      --gridBoxMaxColumns: ", ";\n    "])), tbMaxColumns);
}, MOBILE_WIDTH, function (_a) {
    var _b = _a.mbMaxColumns, mbMaxColumns = _b === void 0 ? MOBILE_COLUMNS : _b;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      --gridBoxMaxColumns: ", ";\n    "], ["\n      --gridBoxMaxColumns: ", ";\n    "])), mbMaxColumns);
});
export var GridItem = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n  margin-left: calc(var(--gutterWidth) / 2);\n  margin-right: calc(var(--gutterWidth) / 2);\n\n  @media (max-width: ", ") {\n    ", "\n  }\n\n  @media (max-width: ", ") {\n    ", "\n  }\n"], ["\n  ", "\n  margin-left: calc(var(--gutterWidth) / 2);\n  margin-right: calc(var(--gutterWidth) / 2);\n\n  @media (max-width: ", ") {\n    ", "\n  }\n\n  @media (max-width: ", ") {\n    ", "\n  }\n"])), function (_a) {
    var pc = _a.pc;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: calc(\n      (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n        var(--gridBoxMaxColumns) + ", "px\n    );\n  "], ["\n    width: calc(\n      (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n        var(--gridBoxMaxColumns) + ", "px\n    );\n  "])), PC_GUTTER, pc, (pc - 1) * PC_GUTTER);
}, TABLET_WIDTH, function (_a) {
    var tb = _a.tb;
    return css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n      width: calc(\n        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n          var(--gridBoxMaxColumns) + ", "px\n      );\n    "], ["\n      width: calc(\n        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n          var(--gridBoxMaxColumns) + ", "px\n      );\n    "])), TABLET_GUTTER, tb, (tb - 1) * TABLET_GUTTER);
}, MOBILE_WIDTH, function (_a) {
    var mb = _a.mb;
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      width: calc(\n        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n          var(--gridBoxMaxColumns) + ", "px\n      );\n    "], ["\n      width: calc(\n        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ", "px) * ", " /\n          var(--gridBoxMaxColumns) + ", "px\n      );\n    "])), MOBILE_GUTTER, mb, (mb - 1) * MOBILE_GUTTER);
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=Grid.styles.js.map