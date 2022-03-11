import styled, { css } from 'styled-components';
import { MOBILE_WIDTH } from '@constants/layoutSystem';
import Colors from '@constants/colors';
export { ReactComponent as Icon24CloseWhite } from './static/icon-24-close-white.svg';
export { ReactComponent as Icon24CloseBlack } from './static/icon-24-close-black.svg';

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalScreenWrapper = styled.div(
  ({ mobileFullScreen, paddingZero }: { mobileFullScreen?: boolean; paddingZero?: boolean }) => css`
    width: 400px;
    max-height: 640px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 28px 28px 24px;
    border-radius: 5px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: ${Colors.gray0};

    ${paddingZero &&
    css`
      padding: 0 !important;
    `};

    @media (max-width: ${MOBILE_WIDTH}) {
      ${mobileFullScreen
        ? `
            width: 100%;
            height: 100%;
            max-height: 100%;
            padding: 28px 20px 24px;
            border-radius: 0;
            box-shadow: none;
            overflow-y: scroll;
          `
        : `
            width: 320px;
            padding: 24px 16px 16px;
            margin: 0 20px;
          `};
    }
  `,
);

export const CloseButtonWrapper = styled.button(
  ({ mobileFullScreen }: { mobileFullScreen?: boolean }) => css`
    position: absolute;
    top: 0;
    right: -30px;

    & > svg {
      width: 24px;
      height: 24px;
    }

    & > :nth-child(1) {
      display: unset;
    }

    & > :nth-child(2) {
      display: none;
    }

    @media (max-width: ${MOBILE_WIDTH}) {
      ${mobileFullScreen
        ? css`
            top: 12px;
            right: 12px;

            & > :nth-child(1) {
              display: none;
            }

            & > :nth-child(2) {
              display: unset;
            }
          `
        : css`
            top: -30px;
            right: 0;
          `};
    }
  `,
);
