import styled, { css } from 'styled-components';
import getButtonColorCSS from '../../utils/getButtonColorCSS';
export { ReactComponent as LoadingIconBlue } from './static/icon-26-loading-blue.svg';
export { ReactComponent as LoadingIconWhite } from './static/icon-26-loading-white.svg';

enum ThemeEnum {
  dark = 'dark',
}

enum ButtonKindEnum {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

enum ButtonSizeEnum {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

const sizeModifier = {
  large: css`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    min-width: 120px;
    height: 48px;
    padding: 14px 20px;
  `,
  medium: css`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    min-width: 100px;
    height: 40px;
    padding: 10px 16px;
  `,
  small: css`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    min-width: 80px;
    height: 32px;
    padding: 6px 12px;
  `,
};

const iconButtonSizeModifier = {
  large: css`
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  `,
  medium: css`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  `,
  small: css`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  `,
};

export const ButtonWrapper = styled.button(
  ({
    kind,
    size,
    'icon-only': iconOnly = false,
    disabled,
    block,
    theme,
  }: {
    kind: keyof typeof ButtonKindEnum;
    size: keyof typeof ButtonSizeEnum;
    'icon-only': boolean;
    disabled: boolean;
    block?: boolean;
    theme?: keyof typeof ThemeEnum;
  }) => css`
    ${getButtonColorCSS(kind, theme, disabled)}
    ${iconOnly ? iconButtonSizeModifier[size] : sizeModifier[size]};
    width: ${block ? '100%' : 'fit-content'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    white-space: pre;
  `,
);

export const IconWrapper = styled.div`
  display: flex;

  // TODO: IconOnly는 아래 속성이 없어야 한다.
  & > :last-child {
    margin-left: 6px;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
