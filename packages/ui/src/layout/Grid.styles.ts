import styled, { css } from 'styled-components';
import {
  MOBILE_COLUMNS,
  MOBILE_GUTTER,
  PC_COLUMNS,
  PC_GUTTER,
  TABLET_COLUMNS,
  TABLET_GUTTER,
  MOBILE_WIDTH, TABLET_WIDTH
} from '../constants/layoutSystem';

interface GridBoxProps {
  pcMaxColumns: number;
  tbMaxColumns: number;
  mbMaxColumns: number;
}

// 일반적으로 Grid View를 화면 최대 넓이로 구성할 때 pc(12), tablet(8), mobile(6)의 최대 컬럼 수는 정해져 있지만
// 특별한 경우에는 prop으로 최대 컬럼 수를 바꿀 수 있다.
export const GridBox = styled.div<GridBoxProps>`
  display: flex;
  flex-wrap: wrap;
  margin-left: calc(var(--gutterWidth) / -2);
  margin-right: calc(var(--gutterWidth) / -2);

  ${({ pcMaxColumns = PC_COLUMNS }) => css`
    --gridBoxMaxColumns: ${pcMaxColumns};
  `}

  @media (max-width: ${TABLET_WIDTH}) {
    ${({ tbMaxColumns = TABLET_COLUMNS }) => css`
      --gridBoxMaxColumns: ${tbMaxColumns};
    `}
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    ${({ mbMaxColumns = MOBILE_COLUMNS }) => css`
      --gridBoxMaxColumns: ${mbMaxColumns};
    `}
  }
`;

interface GridItemProps {
  pc: number;
  tb: number;
  mb: number;
}

export const GridItem = styled.div<GridItemProps>`
  ${({ pc }) => css`
    width: calc(
      (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ${PC_GUTTER}px) * ${pc} /
        var(--gridBoxMaxColumns) + ${(pc - 1) * PC_GUTTER}px
    );
  `}
  margin-left: calc(var(--gutterWidth) / 2);
  margin-right: calc(var(--gutterWidth) / 2);

  @media (max-width: ${TABLET_WIDTH}) {
    ${({ tb }) => css`
      width: calc(
        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ${TABLET_GUTTER}px) * ${tb} /
          var(--gridBoxMaxColumns) + ${(tb - 1) * TABLET_GUTTER}px
      );
    `}
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    ${({ mb }) => css`
      width: calc(
        (100% - var(--gutterWidth) - (var(--gridBoxMaxColumns) - 1) * ${MOBILE_GUTTER}px) * ${mb} /
          var(--gridBoxMaxColumns) + ${(mb - 1) * MOBILE_GUTTER}px
      );
    `}
  }
`;
