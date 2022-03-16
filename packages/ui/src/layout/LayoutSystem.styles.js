var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import * as Layout from '../constants/layoutSystem';
export var widthWidePC = function (n, parentColumns) {
    if (parentColumns === void 0) { parentColumns = Layout.WIDE_PC_COLUMNS; }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "], ["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "])), parentColumns, Layout.WIDE_PC_GUTTER, n, parentColumns, (n - 1) * Layout.WIDE_PC_GUTTER);
};
export var widthPC = function (n, parentColumns) {
    if (parentColumns === void 0) { parentColumns = Layout.PC_COLUMNS; }
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "], ["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "])), parentColumns, Layout.PC_GUTTER, n, parentColumns, (n - 1) * Layout.PC_GUTTER);
};
export var widthTablet = function (n, parentColumns) {
    if (parentColumns === void 0) { parentColumns = Layout.TABLET_COLUMNS; }
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "], ["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "])), parentColumns, Layout.TABLET_GUTTER, n, parentColumns, (n - 1) * Layout.TABLET_GUTTER);
};
export var widthMobile = function (n, parentColumns) {
    if (parentColumns === void 0) { parentColumns = Layout.MOBILE_COLUMNS; }
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "], ["\n    width: calc(\n      (100% - (", " - 1) * ", "px) * ", " / ", " +\n        ", "px\n    );\n  "])), parentColumns, Layout.MOBILE_GUTTER, n, parentColumns, (n - 1) * Layout.MOBILE_GUTTER);
};
// 일반적으로는 이 레아아웃 시스템으로 감싸서 사용한다.
// 최대 width가 1240px 까지 늘어난다.
export var LayoutSystem = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  --gutterWidth: ", "px;\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  --gutterWidth: ", "px;\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n"])), Layout.PC_MAX_LAYOUT_SYSTEM_WIDTH + Layout.PC_GLOBAL_PADDING * 2, Layout.PC_GLOBAL_PADDING, Layout.PC_GUTTER, Layout.TABLET_WIDTH, Layout.TABLET_MAX_LAYOUT_SYSTEM_WIDTH + Layout.TABLET_GLOBAL_PADDING * 2, Layout.TABLET_GLOBAL_PADDING, Layout.TABLET_GUTTER, Layout.MOBILE_WIDTH, Layout.MOBILE_MAX_LAYOUT_SYSTEM_WIDTH + Layout.MOBILE_GLOBAL_PADDING * 2, Layout.MOBILE_GLOBAL_PADDING, Layout.MOBILE_GUTTER);
// 유니콘 카드 리스트가 존재하는 페이지는 이 레이아웃 시스템으로 감싸서 사용한다.
// 최대 width가 1555px 까지 늘어난다.
export var WideLayoutSystem = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  --gutterWidth: ", "px;\n\n  @media (max-width: ", ") {\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  max-width: ", "px;\n  padding: 0 ", "px;\n  --gutterWidth: ", "px;\n\n  @media (max-width: ", ") {\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n\n  @media (max-width: ", ") {\n    max-width: ", "px;\n    padding: 0 ", "px;\n    --gutterWidth: ", "px;\n  }\n"])), Layout.WIDE_PC_MAX_LAYOUT_SYSTEM_WIDTH + Layout.WIDE_PC_GLOBAL_PADDING * 2, Layout.WIDE_PC_GLOBAL_PADDING, Layout.WIDE_PC_GUTTER, Layout.PC_WIDTH, Layout.PC_GLOBAL_PADDING, Layout.PC_GUTTER, Layout.TABLET_WIDTH, Layout.TABLET_MAX_LAYOUT_SYSTEM_WIDTH + Layout.TABLET_GLOBAL_PADDING * 2, Layout.TABLET_GLOBAL_PADDING, Layout.TABLET_GUTTER, Layout.MOBILE_WIDTH, Layout.MOBILE_MAX_LAYOUT_SYSTEM_WIDTH + Layout.MOBILE_GLOBAL_PADDING * 2, Layout.MOBILE_GLOBAL_PADDING, Layout.MOBILE_GUTTER);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=LayoutSystem.styles.js.map