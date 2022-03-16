var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from 'styled-components';
import * as Layout from '../constants/layoutSystem';
export var CARD5_COLUMNS = 15;
export var CARD4_COLUMNS = 12;
export var CARD3_COLUMNS = 12;
export var CARD2_COLUMNS = 8;
export var CARD1_COLUMNS = 6;
var CARD3_MAX_WIDTH_RAW = 1417;
var CARD4_MAX_WIDTH = Layout.PC_WIDTH;
var CARD3_MAX_WIDTH = "".concat(CARD3_MAX_WIDTH_RAW, "px");
var CARD2_MAX_WIDTH = Layout.TABLET_WIDTH;
var CARD1_MAX_WIDTH = Layout.MOBILE_WIDTH;
var cardWidth5 = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"], ["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"])), CARD5_COLUMNS, Layout.PC_GUTTER, CARD5_COLUMNS / 5, CARD5_COLUMNS, (CARD5_COLUMNS / 5 - 1) * Layout.PC_GUTTER);
var cardWidth4 = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"], ["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"])), CARD4_COLUMNS, Layout.PC_GUTTER, CARD4_COLUMNS / 4, CARD4_COLUMNS, (CARD4_COLUMNS / 4 - 1) * Layout.PC_GUTTER);
var cardWidth3 = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"], ["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"])), CARD3_COLUMNS, Layout.PC_GUTTER, CARD3_COLUMNS / 3, CARD3_COLUMNS, (CARD3_COLUMNS / 3 - 1) * Layout.PC_GUTTER);
var cardWidth2 = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") +\n      ", "px\n  );\n"], ["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") +\n      ", "px\n  );\n"])), CARD2_COLUMNS, Layout.TABLET_GUTTER, CARD2_COLUMNS / 2, CARD2_COLUMNS, (CARD2_COLUMNS / 2 - 1) * Layout.TABLET_GUTTER);
var cardWidth1 = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"], ["\n  width: calc(\n    (100% - var(--gutterWidth) - (", " - 1) * ", "px) *\n      (", " / ", ") + ", "px\n  );\n"])), CARD1_COLUMNS, Layout.MOBILE_GUTTER, CARD1_COLUMNS, CARD1_COLUMNS, (CARD1_COLUMNS - 1) * Layout.MOBILE_GUTTER);
export var UnicornCardGridBox = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(var(--gutterWidth) / -2);\n  margin-right: calc(var(--gutterWidth) / -2);\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: calc(var(--gutterWidth) / -2);\n  margin-right: calc(var(--gutterWidth) / -2);\n"])));
export var UnicornCardGridItem = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  margin-left: calc(var(--gutterWidth) / 2);\n  margin-right: calc(var(--gutterWidth) / 2);\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n"], ["\n  width: ", ";\n  margin-left: calc(var(--gutterWidth) / 2);\n  margin-right: calc(var(--gutterWidth) / 2);\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n\n  @media (max-width: ", ") {\n    width: ", ";\n  }\n"])), cardWidth5, CARD4_MAX_WIDTH, cardWidth4, CARD3_MAX_WIDTH, cardWidth3, CARD2_MAX_WIDTH, cardWidth2, CARD1_MAX_WIDTH, cardWidth1);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=CardGrid.styles.js.map