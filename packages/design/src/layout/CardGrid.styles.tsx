import styled, { css } from 'styled-components';
import * as Layout from '@constants/layoutSystem';

export const CARD5_COLUMNS = 15;
export const CARD4_COLUMNS = 12;
export const CARD3_COLUMNS = 12;
export const CARD2_COLUMNS = 8;
export const CARD1_COLUMNS = 6;

const CARD3_MAX_WIDTH_RAW = 1417;

const CARD4_MAX_WIDTH = Layout.PC_WIDTH;
const CARD3_MAX_WIDTH = `${CARD3_MAX_WIDTH_RAW}px`;
const CARD2_MAX_WIDTH = Layout.TABLET_WIDTH;
const CARD1_MAX_WIDTH = Layout.MOBILE_WIDTH;

const cardWidth5 = css`
  width: calc(
    (100% - var(--gutterWidth) - (${CARD5_COLUMNS} - 1) * ${Layout.PC_GUTTER}px) *
      (${CARD5_COLUMNS / 5} / ${CARD5_COLUMNS}) + ${(CARD5_COLUMNS / 5 - 1) * Layout.PC_GUTTER}px
  );
`;

const cardWidth4 = css`
  width: calc(
    (100% - var(--gutterWidth) - (${CARD4_COLUMNS} - 1) * ${Layout.PC_GUTTER}px) *
      (${CARD4_COLUMNS / 4} / ${CARD4_COLUMNS}) + ${(CARD4_COLUMNS / 4 - 1) * Layout.PC_GUTTER}px
  );
`;

const cardWidth3 = css`
  width: calc(
    (100% - var(--gutterWidth) - (${CARD3_COLUMNS} - 1) * ${Layout.PC_GUTTER}px) *
      (${CARD3_COLUMNS / 3} / ${CARD3_COLUMNS}) + ${(CARD3_COLUMNS / 3 - 1) * Layout.PC_GUTTER}px
  );
`;

const cardWidth2 = css`
  width: calc(
    (100% - var(--gutterWidth) - (${CARD2_COLUMNS} - 1) * ${Layout.TABLET_GUTTER}px) *
      (${CARD2_COLUMNS / 2} / ${CARD2_COLUMNS}) +
      ${(CARD2_COLUMNS / 2 - 1) * Layout.TABLET_GUTTER}px
  );
`;

const cardWidth1 = css`
  width: calc(
    (100% - var(--gutterWidth) - (${CARD1_COLUMNS} - 1) * ${Layout.MOBILE_GUTTER}px) *
      (${CARD1_COLUMNS} / ${CARD1_COLUMNS}) + ${(CARD1_COLUMNS - 1) * Layout.MOBILE_GUTTER}px
  );
`;

export const UnicornCardGridBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--gutterWidth) / -2);
  margin-right: calc(var(--gutterWidth) / -2);
`;

export const UnicornCardGridItem = styled.div`
  width: ${cardWidth5};
  margin-left: calc(var(--gutterWidth) / 2);
  margin-right: calc(var(--gutterWidth) / 2);

  @media (max-width: ${CARD4_MAX_WIDTH}) {
    width: ${cardWidth4};
  }

  @media (max-width: ${CARD3_MAX_WIDTH}) {
    width: ${cardWidth3};
  }

  @media (max-width: ${CARD2_MAX_WIDTH}) {
    width: ${cardWidth2};
  }

  @media (max-width: ${CARD1_MAX_WIDTH}) {
    width: ${cardWidth1};
  }
`;
