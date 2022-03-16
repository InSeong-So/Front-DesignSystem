import Colors from '../../constants/colors';
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../constants/layoutSystem';
import { ThinScrollBar } from '../../styles/ThinScrollBar';
import styled, { css } from 'styled-components';
import { ReactComponent as Icon20NavigationSpread } from './static/icon-20-navigation-spread.svg';
import { getInputBorderColor } from '../../utils/getInputBorderColor';

export type DropdownSize = 'small' | 'medium' | 'large' | 'tiny';

const positionModifier = {
  small: css`
    top: 42px;
  `,
  medium: css`
    top: 50px;
  `,
  large: css`
    top: 58px;

    @media (max-width: ${TABLET_WIDTH}) {
      top: 50px;
    }
  `,
  tiny: css``,
};

enum InputState {
  inactive = 'inactive',
  active = 'active',
  focus = 'focus',
  error = 'error',
  disabled = 'disabled',
}

const borderModifier = (size: DropdownSize, hasError?: boolean) => {
  if (size === 'tiny') return 'none';
  return `1px solid ${getInputBorderColor(hasError ? InputState.error : InputState.inactive, '')}`;
};

// modifiers
const sizeModifier = {
  large: css`
    height: 56px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    padding: 16px 12px 16px 16px;

    @media (max-width: ${TABLET_WIDTH}) {
      height: 48px;
      padding: 14px 12px 14px 16px;
    }
  `,
  medium: css`
    height: 48px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    padding: 14px 12px 14px 16px;
  `,
  small: css`
    height: 40px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    padding: 10px 10px 10px 12px;
  `,
  tiny: css`
    height: 18px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    padding: 0;
  `,
};

const widthModifier = (width: string) => css`
  --widthPC: ${width.split(' ')[0]};
  --widthTablet: ${width.split(' ')[1] || width.split(' ')[0]};
  --widthMobile: ${width.split(' ')[2] || width.split(' ')[1] || width.split(' ')[0]};

  width: var(--widthPC);

  @media (max-width: ${TABLET_WIDTH}) {
    width: var(--widthTablet);
  }

  @media (max-width: ${MOBILE_WIDTH}) {
    width: var(--widthMobile);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
  }
`;

type DropdownWrapperProps = {
  size: DropdownSize | 'tiny';
  width: string;
  hasValue: boolean;
  active: boolean;
  showPlaceholder: boolean;
  hasError?: boolean;
};

export const DropdownWrapper = styled.button<DropdownWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.gray0};
  border-radius: 5px;
  ${({ size }) => sizeModifier[size]};
  ${({ hasValue }) => hasValue && `border: 1px solid ${Colors.blueGray6};`};
  ${({ active }) =>
    active &&
    `
    border: 1px solid ${Colors.blue6};
    color: ${Colors.blue6};
  `};
  border: ${({ size, hasError }) => borderModifier(size, hasError)};
  ${({ width }) => widthModifier(width)};
  ${({ showPlaceholder }) => showPlaceholder && `color: ${Colors.gray4}`};
`;

type ArrowProps = {
  $active: boolean;
  size?: DropdownSize | 'tiny';
};

export const Arrow = styled(Icon20NavigationSpread)<ArrowProps>`
  ${({ $active }) =>
    $active &&
    `
    path {
      fill: ${Colors.blue6};
    }

    transform: rotate(180deg);
  `};
  ${({ size }) => (size === 'tiny' ? '17px' : 'unset')};
`;

type WEbOptionProps = {
  subOption?: boolean;
};

export const WebOption = styled.li<WEbOptionProps>`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 8px 10px;
  color: ${({ subOption }) => (subOption ? Colors.gray4 : Colors.gray7)};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.blue0};
  }
`;

type WebSelectProps = {
  notScroll: boolean;
  size: DropdownSize;
};

export const WebSelect = styled.ul<WebSelectProps>`
  position: absolute;
  top: 52px;
  left: 0;
  ${({ size }) => positionModifier[size]};
  border: 1px solid ${Colors.blue6};
  border-radius: 5px;
  width: 100%;
  max-height: 194px;
  padding: 6px 6px;
  z-index: 1;
  background: ${Colors.gray0};
  overflow-y: auto;
  ${({ notScroll }) =>
    notScroll
      ? `overflow-y: hidden;
        max-height: initial;`
      : ThinScrollBar}
`;

export const AsteriskWrapper = styled.span`
  color: ${Colors.error};
`;

export const MobileOption = styled.option``;

export const MobileSelect = styled.select`
  opacity: 0;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;
