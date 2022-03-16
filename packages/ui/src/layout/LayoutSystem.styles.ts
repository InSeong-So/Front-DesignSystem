import styled, { css } from 'styled-components';
import * as Layout from '../constants/layoutSystem';

export const widthWidePC = (n: number, parentColumns = Layout.WIDE_PC_COLUMNS) =>
  css`
    width: calc(
      (100% - (${parentColumns} - 1) * ${Layout.WIDE_PC_GUTTER}px) * ${n} / ${parentColumns} +
        ${(n - 1) * Layout.WIDE_PC_GUTTER}px
    );
  `;
export const widthPC = (n: number, parentColumns = Layout.PC_COLUMNS) =>
  css`
    width: calc(
      (100% - (${parentColumns} - 1) * ${Layout.PC_GUTTER}px) * ${n} / ${parentColumns} +
        ${(n - 1) * Layout.PC_GUTTER}px
    );
  `;
export const widthTablet = (n: number, parentColumns = Layout.TABLET_COLUMNS) =>
  css`
    width: calc(
      (100% - (${parentColumns} - 1) * ${Layout.TABLET_GUTTER}px) * ${n} / ${parentColumns} +
        ${(n - 1) * Layout.TABLET_GUTTER}px
    );
  `;
export const widthMobile = (n: number, parentColumns = Layout.MOBILE_COLUMNS) =>
  css`
    width: calc(
      (100% - (${parentColumns} - 1) * ${Layout.MOBILE_GUTTER}px) * ${n} / ${parentColumns} +
        ${(n - 1) * Layout.MOBILE_GUTTER}px
    );
  `;

// 일반적으로는 이 레아아웃 시스템으로 감싸서 사용한다.
// 최대 width가 1240px 까지 늘어난다.
export const LayoutSystem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: ${Layout.PC_MAX_LAYOUT_SYSTEM_WIDTH + Layout.PC_GLOBAL_PADDING * 2}px;
  padding: 0 ${Layout.PC_GLOBAL_PADDING}px;
  --gutterWidth: ${Layout.PC_GUTTER}px;

  @media (max-width: ${Layout.TABLET_WIDTH}) {
    max-width: ${Layout.TABLET_MAX_LAYOUT_SYSTEM_WIDTH + Layout.TABLET_GLOBAL_PADDING * 2}px;
    padding: 0 ${Layout.TABLET_GLOBAL_PADDING}px;
    --gutterWidth: ${Layout.TABLET_GUTTER}px;
  }

  @media (max-width: ${Layout.MOBILE_WIDTH}) {
    max-width: ${Layout.MOBILE_MAX_LAYOUT_SYSTEM_WIDTH + Layout.MOBILE_GLOBAL_PADDING * 2}px;
    padding: 0 ${Layout.MOBILE_GLOBAL_PADDING}px;
    --gutterWidth: ${Layout.MOBILE_GUTTER}px;
  }
`;

// 유니콘 카드 리스트가 존재하는 페이지는 이 레이아웃 시스템으로 감싸서 사용한다.
// 최대 width가 1555px 까지 늘어난다.
export const WideLayoutSystem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: ${Layout.WIDE_PC_MAX_LAYOUT_SYSTEM_WIDTH + Layout.WIDE_PC_GLOBAL_PADDING * 2}px;
  padding: 0 ${Layout.WIDE_PC_GLOBAL_PADDING}px;
  --gutterWidth: ${Layout.WIDE_PC_GUTTER}px;

  @media (max-width: ${Layout.PC_WIDTH}) {
    padding: 0 ${Layout.PC_GLOBAL_PADDING}px;
    --gutterWidth: ${Layout.PC_GUTTER}px;
  }

  @media (max-width: ${Layout.TABLET_WIDTH}) {
    max-width: ${Layout.TABLET_MAX_LAYOUT_SYSTEM_WIDTH + Layout.TABLET_GLOBAL_PADDING * 2}px;
    padding: 0 ${Layout.TABLET_GLOBAL_PADDING}px;
    --gutterWidth: ${Layout.TABLET_GUTTER}px;
  }

  @media (max-width: ${Layout.MOBILE_WIDTH}) {
    max-width: ${Layout.MOBILE_MAX_LAYOUT_SYSTEM_WIDTH + Layout.MOBILE_GLOBAL_PADDING * 2}px;
    padding: 0 ${Layout.MOBILE_GLOBAL_PADDING}px;
    --gutterWidth: ${Layout.MOBILE_GUTTER}px;
  }
`;
